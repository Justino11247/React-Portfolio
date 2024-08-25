import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/NAvigation";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main className="content-area">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
