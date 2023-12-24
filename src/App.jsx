import './App.css'
import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Mail} from "./components/Mail.jsx";
import {EmailList} from "./components/EmailList.jsx";
import {SendMail} from "./components/SendMail.jsx";


function App() {


    return (
        <Router>
            <div className="app">
                <Header/>
                <div className="app_body">
                    <Sidebar/>
                    <Routes>
                        <Route path="/gmail-clone-firebase/" element={<EmailList/>} />
                        <Route path="/gmail-clone-firebase/mail" element={<Mail/>} />

                    </Routes>
                </div>
                <SendMail />
            </div>
        </Router>
    )
}

export default App
