import { useState } from "react";
import { AppShell, ColorScheme, ColorSchemeProvider, Footer, Header, MantineProvider } from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import { Route, Routes } from "react-router-dom";
import { AboutMe, Chat, MainPage, Articles, ToDo, ArticlesMore } from "./pages";
import { FooterComponent, HeaderComponent } from "./components";
import SignIn from "./pages/sign-in/sign-in";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => { setColorScheme(value || (colorScheme === "dark" ? "light" : "dark")); }
  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!login) {
  //     navigate("/login");
  //   }
  // }, [])

  return (
    <>
      {!login ? <SignIn setLogin={setLogin} />
        :
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withCSSVariables withGlobalStyles withNormalizeCSS>
            <AppShell
              header={
                <Header height={60} p="xs">
                  <HeaderComponent setLogin={setLogin} />
                </Header>}
              footer={
                <Footer height="auto" p="xs" sx={{ position: "static" }}>
                  <FooterComponent />
                </Footer>
              }
            >
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticlesMore />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
              </Routes>
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      }
    </>
  );
}

export default App;

