import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import Registration from './Registration';
import ContactUs from './ContactUs';

import ParentComponent from '../parent-to-child/ParentComponent'
import ChildToParentComponent from '../child-to-parent/ChildToParentComponent'
import UseStateHook from "../hooks/UseStateHook";
import UseEffectHook from "../hooks/UseEffectHook";
import DataBindingWithUseEffect from '../hooks/DataBindingWithUseEffect';
import UseContextHook from "../hooks/UseContextHook/UseContextHook";
import UseRefHook from "../hooks/UseRefHook";
import FormSubmit from "../forms/FormSubmit";


export default function Routing() {

    return (
        <Router>
            {/* <div>
                <ul style={{ listStyleType: "none" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                </ul>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="contactus" element={<ContactUs />} />
                </Routes>
            </div> */}

            <div>
                <ul style={{ listStyleType: "none", textAlign: "left" }}>
                    <li><Link to="/parentchild">Passing Data From Parent to Child</Link></li>
                    <li><Link to="/childtoparent">Passing Data From Child to Parent</Link></li>
                    <li><Link to="/usestatehook">useState() Hook</Link></li>
                    <li><Link to="/useeffecthook">useEffect() Hook</Link></li>
                    <li><Link to="/useeffecthookdatabind">Data Binding with useEffect() Hook</Link></li>
                    <li><Link to="/usecontexthook">useContext() Hook</Link></li>
                    <li><Link to="/userefhook">useRef() Hook</Link></li>
                    <li><Link to="/formsubmit">FormSubmit</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/parentchild" element={<ParentComponent />} />
                    <Route exact path="/childtoparent" element={<ChildToParentComponent />} />
                    <Route exact path="/usestatehook" element={<UseStateHook />} />
                    <Route exact path="/useeffecthook" element={<UseEffectHook />} />
                    <Route exact path="/useeffecthookdatabind" element={<DataBindingWithUseEffect />} />
                    <Route exact path="/usecontexthook" element={<UseContextHook />} />
                    <Route exact path="/userefhook" element={<UseRefHook />} />
                    <Route exact path="/formsubmit" element={<FormSubmit />} />
                </Routes>
            </div>
        </Router >
    );
}
