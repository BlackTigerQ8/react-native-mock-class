import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Success from "./components/Success";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Home />
    </>
  );
}
