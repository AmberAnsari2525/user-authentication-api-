import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    number: '',
    department: '',
    designation: '',
    language: '',
    description: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage

      if (!token) {
        setError('No token found in local storage.');
        return;
      }

      try {
        const response = await axios.get('https://jwtauth.techxdeveloper.com/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        if (error.response) {
          // Access the response data and other error properties
          const status = error.response.status;
          const message = error.response.data.message || 'An error occurred';
          setError(`Server responded with status ${status}: ${message}`);
        } else if (error.request) {
          setError('No response received from server.');
        } else {
          setError(`Error setting up request: ${error.message}`);
        }
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.post('https://jwtauth.techxdeveloper.com/api/user/update', profile, config);

      // Handle success
      console.log('User updated successfully', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };

  return (
      <main className="dashboard-main">
        <div className="dashboard-main-body">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
            <h6 className="fw-semibold mb-0">View Profile</h6>
            <ul className="d-flex align-items-center gap-2">
              <li className="fw-medium">
                <a href="/index.html" className="d-flex align-items-center gap-1 hover-text-primary">
                  <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg"></iconify-icon>
                  Dashboard
                </a>
              </li>
              <li>-</li>
              <li className="fw-medium">View Profile</li>
            </ul>
          </div>
          <div className="row gy-4">
            {error ? (
                <div className="col-lg-12">
                  <div className="alert alert-danger">{error}</div>
                </div>
            ) : profile ? (
                <div className="col-lg-4">
                  <div className="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
                    <img src="/assets/images/user-grid/user-grid-bg1.png" alt="" className="w-100 object-fit-cover"/>
                    <div className="pb-24 ms-16 mb-24 me-16  mt--100">
                      <div className="text-center border border-top-0 border-start-0 border-end-0">
                        <img src="/assets/images/user-grid/user-grid-img14.png" alt=""
                             className="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover"/>
                        <h6 className="mb-0 mt-16">{profile?.name}</h6>
                        <span className="text-secondary-light mb-16">{profile?.email}</span>
                      </div>
                      <div className="mt-24">
                        <h6 className="text-xl mb-16">Personal Info</h6>
                        <ul>
                          <li className="d-flex align-items-center gap-1 mb-12">
                            <span className="w-30 text-md fw-semibold text-primary-light">Full Name</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.name}</span>
                          </li>
                          <li className="d-flex align-items-center gap-1 mb-12">
                            <span className="w-30 text-md fw-semibold text-primary-light">Email</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.email}</span>
                          </li>
                          <li className="d-flex align-items-center gap-1 mb-12">
                            <span className="w-30 text-md fw-semibold text-primary-light">Phone Number</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.number}</span>
                          </li>
                          <li className="d-flex align-items-center gap-1 mb-12">
                            <span className="w-30 text-md fw-semibold text-primary-light">Department</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.department}</span>
                          </li>
                          <li className="d-flex align-items-center gap-1 mb-12">
                            <span className="w-30 text-md fw-semibold text-primary-light">Designation</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.designation}</span>
                          </li>
                          <li className="d-flex align-items-center gap-1 mb-12">
                            <span className="w-30 text-md fw-semibold text-primary-light">Languages</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.language}</span>
                          </li>
                          <li className="d-flex align-items-center gap-1">
                            <span className="w-30 text-md fw-semibold text-primary-light">Bio</span>
                            <span className="w-70 text-secondary-light fw-medium">: {profile?.description}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            ) : (
                <div className="col-lg-12">
                  <div className="alert alert-info">Loading...</div>
                </div>
            )}
            <div className="col-lg-8">
              <div className="card h-100">
                <div className="card-body p-24">
                  <ul className="nav border-gradient-tab nav-pills mb-20 d-inline-flex" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link d-flex align-items-center px-24 active" id="pills-edit-profile-tab"
                              data-bs-toggle="pill" data-bs-target="#pills-edit-profile" type="button" role="tab"
                              aria-controls="pills-edit-profile" aria-selected="true">
                        Edit Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link d-flex align-items-center px-24" id="pills-change-passwork-tab"
                              data-bs-toggle="pill" data-bs-target="#pills-change-passwork" type="button" role="tab"
                              aria-controls="pills-change-passwork" aria-selected="false" tabIndex="-1">
                        Change Password
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link d-flex align-items-center px-24" id="pills-notification-tab"
                              data-bs-toggle="pill" data-bs-target="#pills-notification" type="button" role="tab"
                              aria-controls="pills-notification" aria-selected="false" tabIndex="-1">
                        Notification Settings
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-edit-profile" role="tabpanel"
                         aria-labelledby="pills-edit-profile-tab" tabIndex="0">
                      <h6 className="text-md text-primary-light mb-16">Profile Image</h6>
                      <div className="mb-24 mt-16">
                        <div className="avatar-upload">
                          <div className="avatar-edit position-absolute bottom-0 end-0 me-24 mt-16 z-1 cursor-pointer">
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" hidden/>
                            <label htmlFor="imageUpload"
                                   className="w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 radius-16">
                              <iconify-icon icon="fluent:edit-16-regular"></iconify-icon>
                            </label>
                          </div>
                          <img src="/assets/images/user-grid/user-grid-img14.png" alt="" className="w-200-px h-200-px rounded-circle object-fit-cover"/>
                        </div>
                      </div>

                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-24">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" value={profile.name} onChange={handleChange}/>
                          </div>
                          <div className="col-md-6 mb-24">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" value={profile.email} onChange={handleChange}/>
                          </div>
                          <div className="col-md-6 mb-24">
                            <label htmlFor="number" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="number" value={profile.number} onChange={handleChange}/>
                          </div>
                          <div className="col-md-6 mb-24">
                            <label htmlFor="department" className="form-label">Department</label>
                            <input type="text" className="form-control" id="department" value={profile.department} onChange={handleChange}/>
                          </div>
                          <div className="col-md-6 mb-24">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <input type="text" className="form-control" id="designation" value={profile.designation} onChange={handleChange}/>
                          </div>
                          <div className="col-md-6 mb-24">
                            <label htmlFor="language" className="form-label">Languages</label>
                            <input type="text" className="form-control" id="language" value={profile.language} onChange={handleChange}/>
                          </div>
                          <div className="col-md-12 mb-24">
                            <label htmlFor="description" className="form-label">Bio</label>
                            <textarea className="form-control" id="description" rows="4" value={profile.description} onChange={handleChange}></textarea>
                          </div>
                          <div className="col-md-12 text-end">
                            <button
                                type="button"
                                className="btn btn-primary border border-primary-600 text-md px-56 py-11 radius-8"
                                onClick={handleSubmit}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="pills-change-passwork" role="tabpanel"
                         aria-labelledby="pills-change-passwork-tab" tabIndex="0">
                      {/* Change Password Content */}
                    </div>
                    <div className="tab-pane fade" id="pills-notification" role="tabpanel"
                         aria-labelledby="pills-notification-tab" tabIndex="0">
                      {/* Notification Settings Content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};
