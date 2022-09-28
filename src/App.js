import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Stack } from "@chakra-ui/react";
import BottomBar from "./Components/Navbar/BottomBar";
import AllRouter from "./Router/AllRouter";

function App() {
  return (
    <div className="App">
      <Stack bg={"#0046BE"}>
        <Navbar />
      </Stack>
      <Stack bg={"#003DA6"}>
        <BottomBar />
      </Stack>
      <AllRouter />
    </div>
  );
}

export default App;
