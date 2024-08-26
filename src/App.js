import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./Contex/authcontex";
import { Signup } from "./Component/sign-up";
import { SignIn } from "./Component/sign-in";
import { MyNavbar } from "./Component/Navbar";
import {Profile} from "./Component/view-profile";

function App() {
    return (
        <AuthProvider>
            <Router>
                <MyNavbar />
                <div className="container mt-4">
                    <Routes>
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/" element={<Signup />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
