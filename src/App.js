import './App.css';
import {Component, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./routes/About";
import Home from "./routes/Home";
import Error from "./routes/Error";

export default function App() {

    return (
        <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
            <div className="flex flex-col h-screen">
                <Suspense fallback={'loading'}>
                    <NavBar/>
                </Suspense>

                <div className="flex flex-1 flex-col overflow-y-scroll">
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path={"/about"} exact component={About} />
                        <Route path={'/'} exact component={Home} />
                        <Route exact component={Error} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
