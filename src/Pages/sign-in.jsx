import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../Contex/authcontex";

export const SignIn = () => {
    const navigate = useNavigate();
    const {Login , error} =useContext(AuthContext);
    const [formdata, setFormdata] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Login (formdata);


    };

    return (
        <section className="auth bg-base d-flex flex-wrap">
            <div className="auth-left d-lg-block d-none">
                <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                    <img src="/assets/images/auth/auth-img.png" alt=""/>
                </div>
            </div>
            <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                <div className="max-w-464-px mx-auto w-100">
                    <div>
                        <Link to="/index.html" className="mb-40 max-w-290-px">
                            <img src="../../public/assets/images/logo.png" alt=""/>
                        </Link>
                        <h4 className="mb-12">Sign In to your Account</h4>
                        <p className="mb-32 text-secondary-light text-lg">Welcome back! please enter your detail</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="icon-field mb-16">
                            <span className="icon top-50 translate-middle-y">
                                <iconify-icon icon="mage:email"></iconify-icon>
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={formdata.email}
                                onChange={handleChange}
                                className="form-control h-56-px bg-neutral-50 radius-12"
                                placeholder="Email"
                            />
                        </div>
                        <div className="position-relative mb-20">
                            <div className="icon-field">
                                <span className="icon top-50 translate-middle-y">
                                    <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formdata.password}
                                    onChange={handleChange}
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    id="your-password"
                                    placeholder="Password"
                                />
                            </div>
                            <span
                                onClick={handleTogglePassword}
                                className={`toggle-password cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light ${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}`}
                            ></span>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-between gap-2">
                                <div className="form-check style-check d-flex align-items-center">
                                    <input
                                        className="form-check-input border border-neutral-300"
                                        type="checkbox"
                                        value=""
                                        id="remember"
                                    />
                                    <label className="form-check-label" htmlFor="remember">Remember me </label>
                                </div>
                                <a href="javascript:void(0)" className="text-primary-600 fw-medium">Forgot Password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"> Sign In</button>

                        <div className="mt-32 center-border-horizontal text-center">
                            <span className="bg-base z-1 px-4">Or sign in with</span>
                        </div>
                        <div className="mt-32 d-flex align-items-center gap-3">
                            <button
                                type="button"
                                className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
                            >
                                <iconify-icon icon="ic:baseline-facebook" class="text-primary-600 text-xl line-height-1"></iconify-icon>
                                Facebook
                            </button>
                            <button
                                type="button"
                                className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
                            >
                                <iconify-icon icon="logos:google-icon" class="text-primary-600 text-xl line-height-1"></iconify-icon>
                                Google
                            </button>
                        </div>
                        <div className="mt-32 text-center text-sm">
                            <p className="mb-0">Don’t have an account? <Link to="/" className="text-primary-600 fw-semibold">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
