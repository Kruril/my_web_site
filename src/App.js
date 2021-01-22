import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ""}>
        <div className="flex flex-col h-screen">
            <NavBar />
        </div>
    </BrowserRouter>
  );
}
