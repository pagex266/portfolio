import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from "./Me";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";

class Pages extends React.Component<{ user: any }> {
    render() {
        let {user} = this.props;
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Me user={user}/>}/>
                    <Route path="/projects" element={<Projects user={user}/>}/>
                    <Route path="/work" element={<Work user={user}/>}/>
                    <Route path="/education" element={<Education user={user}/>}/>
                </Routes>
            </Router>
        )
    }
}

export default Pages;
