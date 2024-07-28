import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="min-vh-100 container ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
