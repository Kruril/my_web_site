import './App.css';
import React, { Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./routes/About";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Cv from "./routes/Cv";

export default function App() {

    return (
        <Suspense fallback="loading">
            <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
                <div className="flex flex-col h-screen">
                    <NavBar/>

                    <div className="flex flex-1 flex-col">
                        <Switch>
                            <Route path="/home" exact component={Home} />
                            <Route path={"/about"} exact component={About} />
                            <Route path={"/cv"} exact component={Cv} />
                            <Route path={'/'} exact component={Home} />
                            <Route exact component={Error} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Suspense>
    );
}
