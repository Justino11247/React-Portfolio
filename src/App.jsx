import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/NAvigation";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="body">
      <Header />
      <Navigation />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
    </ChakraProvider>
  );
}

export default App;
