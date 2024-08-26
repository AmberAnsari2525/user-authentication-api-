import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../Contex/authcontex";

export const Signup = () => {
    const navigate = useNavigate();
    const { signup, error } = useContext(AuthContext);
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });
    const [passwordshow, setPasswordshow] = useState(false);

    const handleTogglePassword = () => {
        setPasswordshow(!passwordshow);
    };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(userData); // Assuming signup returns a response with a token
            const { token } = response.data; // Adjust based on actual response
            localStorage.setItem('token', token); // Store token in local storage
            navigate('/profile');
        } catch (err) {
            console.error('Registration error:', err);
            // Handle error appropriately
        }
    };



    return (
        <section className="auth bg-base d-flex flex-wrap">
            <div className="auth-left d-lg-block d-none">
                <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                    <img src="/assets/images/auth/auth-img.png" alt="Authentication" />
                </div>
            </div>
            <div className="auth-right py-4 px-3 d-flex flex-column justify-content-center">
                <div className="max-w-464-px mx-auto w-100">
                    <div style={{ textAlign: 'left' }}>
                        <Link to="/index.html" className="mb-4 max-w-290-px">
                            <img src="/assets/images/logo.png" alt="Logo" />
                        </Link>
                        <h4 className="mb-3">Sign Up to your Account</h4>
                        <p className="mb-4 text-secondary-light text-lg">Welcome back! Please enter your details.</p>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="icon-field mb-3">
                            <span className="icon top-50 translate-middle-y">
                                <iconify-icon icon="f7:person"></iconify-icon>
                            </span>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={userData.name}
                                className="form-control h-56-px bg-neutral-50 rounded-3"
                                placeholder="Username"
                            />
                        </div>
                        <div className="icon-field mb-3">
                            <span className="icon top-50 translate-middle-y">
                                <iconify-icon icon="mage:email"></iconify-icon>
                            </span>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={userData.email}
                                className="form-control h-56-px bg-neutral-50 rounded-3"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="position-relative">
                                <div className="icon-field">
                                    <span className="icon top-50 translate-middle-y">
                                        <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                                    </span>
                                    <input
                                        type={passwordshow ? "text" : "password"}
                                        name="password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        className="form-control h-56-px bg-neutral-50 rounded-3"
                                        id="your-password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <span onClick={handleTogglePassword}
                                      className={`toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-3 text-secondary-light ${passwordshow ? 'ri-eye-off-line' : 'ri-eye-line'}`}>
                                </span>
                            </div>
                            <span className="mt-3 text-sm text-secondary-light" >Your password must have at least 8 characters.</span>
                        </div>
                        <button type="submit" className="btn btn-primary text-sm px-4 py-3 w-100 rounded-3 mt-4">Sign Up</button>
                        <div className="mt-4 text-center">
                            <div className="bg-base z-1 px-2">Or sign up with</div>
                        </div>
                        <div className="mt-4 d-flex align-items-center gap-3">
                            <button type="button" className="fw-semibold text-primary-light py-3 px-4 w-50 border rounded-3 text-md d-flex align-items-center justify-content-center gap-3 bg-hover-primary-50">
                                <iconify-icon icon="ic:baseline-facebook" className="text-primary-600 text-xl"></iconify-icon>
                                Facebook
                            </button>
                            <button type="button" className="fw-semibold text-primary-light py-3 px-4 w-50 border rounded-3 text-md d-flex align-items-center justify-content-center gap-3 bg-hover-primary-50">
                                <iconify-icon icon="logos:google-icon" className="text-primary-600 text-xl"></iconify-icon>
                                Google
                            </button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            <p className="mb-0">Already have an account? <Link to="/sign-in" className="text-primary-600 fw-semibold">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
