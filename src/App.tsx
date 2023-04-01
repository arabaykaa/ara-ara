import { AppShell, ColorScheme, ColorSchemeProvider, Header, MantineProvider } from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/sign-in/sign-in";
import React, { useState } from "react";
import { AboutMe, Chat, MainPage, MyWork, ToDo } from "./pages";
import { FooterComponent, HeaderComponent } from "./components";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => { setColorScheme(value || (colorScheme === "dark" ? "light" : "dark")); }
  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  const [login, setLogin] = useState(false);

  return (
    <>
      {!login ? <SignIn setLogin={setLogin} />
        :
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withCSSVariables withGlobalStyles withNormalizeCSS>
            <AppShell padding="md"
              header={
                <Header height={60} p="xs">
                  <HeaderComponent />
                </Header>}>
              <main style={{ minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/work" element={<MyWork />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/todo" element={<ToDo />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
                <FooterComponent />
              </main>
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      }
    </>
  );
}

export default App;

