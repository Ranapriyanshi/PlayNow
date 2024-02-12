import '../src/styles/App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Signup from "../src/pages/signup";
 

const App = () => {

    return (
        <>
            <BrowserRouter>
            
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/signup"
                        element={<Signup />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default App;
