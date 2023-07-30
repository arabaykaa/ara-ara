import { Button } from "@mantine/core"
import { toast } from "react-toastify";

const notification = () => {
    toast.success("button pressed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

function Chat() {
    return (
        <div>
            Chat
            <br />
            <br />
            <Button onClick={notification}>
                notification
            </Button>
        </div>
    )
}

export default Chat