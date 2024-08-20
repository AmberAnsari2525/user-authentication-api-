import React from 'react';
import { Link } from 'react-router-dom';
export const Signup = () => {
    return (
        <section className="auth bg-base d-flex flex-wrap">
        <div className="auth-left d-lg-block d-none">
            <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                <img src="assets/images/auth/auth-img.png" alt="Authentication" />
            </div>
        </div>
        <div className="auth-right py-4 px-3 d-flex flex-column justify-content-center">
            <div className="max-w-464-px mx-auto w-100">
                <div style={{textAlign: 'left'}}>
                    <a href="index.html" className="mb-4 max-w-290-px">
                        <img src="assets/images/logo.png" alt="Logo" />
                    </a>
                    <h4 className="mb-3">Sign Up to your Account</h4>
                    <p className="mb-4 text-secondary-light text-lg">Welcome back! Please enter your details.</p>
                </div>
                <form action="#">
                    <div className="icon-field mb-3">
                        <span className="icon top-50 translate-middle-y">
                            <iconify-icon icon="f7:person"></iconify-icon>
                        </span>
                        <input type="text" className="form-control h-56-px bg-neutral-50 rounded-3" placeholder="Username" />
                    </div>
                    <div className="icon-field mb-3">
                        <span className="icon top-50 translate-middle-y">
                            <iconify-icon icon="mage:email"></iconify-icon>
                        </span>
                        <input type="email" className="form-control h-56-px bg-neutral-50 rounded-3" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <div className="position-relative">
                            <div className="icon-field">
                                <span className="icon top-50 translate-middle-y">
                                    <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
                                </span>
                                <input type="password" className="form-control h-56-px bg-neutral-50 rounded-3" id="your-password" placeholder="Password" />
                            </div>
                            <span className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-3 text-secondary-light" data-toggle="#your-password"></span>
                        </div>
                        <span className="mt-3 text-sm text-secondary-light" style={{ marginLeft: -168}}>Your password must have at least 8 characters.</span>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between gap-2">
                            <div className="form-check d-flex align-items-start">
                                <input className="form-check-input border border-neutral-300 mt-1" type="checkbox" value="" id="condition" />
                                <label className="form-check-label text-sm ms-2" htmlFor="condition">
                                    By creating an account, you agree to the
                                    <a href="javascript:void(0)" className="text-primary-600 fw-semibold">Terms & Conditions</a> and our
                                    <a href="javascript:void(0)" className="text-primary-600 fw-semibold">Privacy Policy</a>.
                                </label>
                            </div>
                        </div>
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
                        <p className="mb-0">Already have an account? <Link to="/signin" className="text-primary-600 fw-semibold">Sign In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    


    )



}