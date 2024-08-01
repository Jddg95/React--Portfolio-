import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      <Header />
      <main className="min-vh-100 container ">
        <Outlet />
      </main>
      {location.pathname === "/contact" &&
      <Footer />
      }
    </div>
  );
}

export default App;
