import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Title from "../Images/Title.png";
import bag from "../Images/Bag.png";
import { doCreateUserWithEmailAndPassword } from "../Firebase/auth";
import { Result } from "antd";
import { firestore } from "../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
const Signup = () => {
  const navigate = useNavigate();
  // State variables for form fields
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  // Error messages state
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    let formErrors = {};

    if (!title) formErrors.title = "Title is required";
    if (!firstName) formErrors.firstName = "First name is required";
    if (!lastName) formErrors.lastName = "Last name is required";
    if (!email) formErrors.email = "Email is required";
    if (!phone) formErrors.phone = "Phone number is required";
    else if (!/^\d+$/.test(phone))
      formErrors.phone = "Phone number must be numeric"; // Validate phone number for only digits
    if (!dob) formErrors.dob = "Date of birth is required";
    if (!nationality) formErrors.nationality = "Nationality is required";
    if (!password) formErrors.password = "Password is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setIsRegistering(true);

      // Create a new user document
      await addDoc(collection(firestore, "Users"), {
        title,
        firstName,
        lastName,
        email,
        phone,
        dob,
        nationality,
        password,
      });

      navigate("/Browse");
    } catch (error) {
      console.error("Error adding user: ", error);
      setErrors({ firestore: "Failed to register user. Please try again." });
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#131120" }}>
        <div
          className="container-fluid"
          style={{
            height: "80px",
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <a className="navbar-brand" href="#">
            <img
              src={bag}
              alt="bag"
              style={{ height: "60px", width: "auto", color: "#2E2A50" }}
              onClick={() => navigate("/")}
            />
            <img
              src={Title}
              alt="title"
              style={{
                height: "20px",
                width: "auto",
                marginLeft: -9,
                marginBottom: -8,
              }}
            />
          </a>
        </div>
      </nav>
      <div
        style={{
          backgroundColor: "#131120",
          width: "100vw", // Full viewport width
          minHeight: "100vh", // Full viewport height
          margin: "0", // Removes any default margin
          padding: "0",
        }}
      >
        <div className="container" style={{ padding: "50px" }}>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div style={{ marginBottom: "20px" }}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        margin: "0px",
                      }}
                    >
                      CREATE AN ACCOUNT
                    </h3>
                    <div>
                      <div style={{ color: "gray" }}>
                        Already have an account?{" "}
                        <Link
                          to="/Login"
                          style={{ color: "wheat", textDecoration: "none" }}
                        >
                          Log in
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <div style={{ marginBottom: "10px" }}>
                      <input
                        type="radio"
                        id="Mr"
                        name="title"
                        value={"Mr"}
                        checked={title === "Mr"}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                          marginRight: "8px",
                          width: "20px",
                          height: "20px",
                          color: "#131120",
                          backgroundColor: "#131120",
                          accentColor: "wheat",
                        }}
                      />
                      <label
                        htmlFor="Mr"
                        style={{ color: "white", marginRight: "12px" }}
                      >
                        Mr
                      </label>
                      <input
                        type="radio"
                        id="Mrs"
                        name="title"
                        value={"Mrs"}
                        checked={title === "Mrs"}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                          marginRight: "8px",
                          width: "20px",
                          height: "20px",
                          color: "#131120",
                          backgroundColor: "#131120",
                          accentColor: "wheat",
                        }}
                      />
                      <label
                        htmlFor="Mrs"
                        style={{ color: "white", marginRight: "12px" }}
                      >
                        Mrs
                      </label>
                      <input
                        type="radio"
                        id="Miss/Ms"
                        name="title"
                        value={"Miss/Ms"}
                        checked={title === "Miss/Ms"}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                          marginRight: "8px",
                          width: "20px",
                          height: "20px",
                          color: "#131120",
                          backgroundColor: "#131120",
                          accentColor: "wheat",
                        }}
                      />
                      <label
                        htmlFor="Miss/Ms"
                        style={{ color: "white", marginRight: "12px" }}
                      >
                        Miss/Ms
                      </label>
                    </div>
                    {errors.title && (
                      <div style={{ color: "red" }}>{errors.title}</div>
                    )}

                    {/* First and Last Name */}
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          placeholder="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid white",
                            outline: "none",
                            backgroundColor: "#131120",
                            color: "white",
                          }}
                        />
                        {errors.firstName && (
                          <div style={{ color: "red" }}>{errors.firstName}</div>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          placeholder="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid white",
                            outline: "none",
                            backgroundColor: "#131120",
                            color: "white",
                          }}
                        />
                        {errors.lastName && (
                          <div style={{ color: "red" }}>{errors.lastName}</div>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          marginTop: "5px",
                          borderRadius: "5px",
                          border: "1px solid white",
                          outline: "none",
                          backgroundColor: "#131120",
                          color: "white",
                        }}
                      />
                      {errors.email && (
                        <div style={{ color: "red" }}>{errors.email}</div>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <div style={{ flex: "0 0 80px" }}>
                        <select
                          id="countryCode"
                          value={"+971"}
                          onChange={(e) => setPhone(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid white",
                            outline: "none",
                            backgroundColor: "#131120",
                            color: "white",
                          }}
                        >
                          <option value="+971">+20</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <input
                          type="text"
                          id="phone"
                          value={phone}
                          placeholder="eg: 501234567"
                          onChange={(e) =>
                            setPhone(e.target.value.replace(/[^0-9]/g, ""))
                          } // Remove non-numeric characters
                          style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid white",
                            outline: "none",
                            backgroundColor: "#131120",
                            color: "white",
                          }}
                        />
                        {errors.phone && (
                          <div style={{ color: "red" }}>{errors.phone}</div>
                        )}
                      </div>
                    </div>

                    {/* Date of Birth */}
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid white",
                          outline: "none",
                          backgroundColor: "#131120",
                          color: "white",
                        }}
                      />
                      {errors.dob && (
                        <div style={{ color: "red" }}>{errors.dob}</div>
                      )}
                    </div>

                    {/* Nationality */}
                    <div style={{ marginBottom: "15px" }}>
                      <select
                        id="nationality"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          marginTop: "5px",
                          borderRadius: "5px",
                          border: "1px solid white",
                          outline: "none",
                          backgroundColor: "#131120",
                          color: "white",
                        }}
                      >
                        <option value="">Select Nationality</option>
                        <option value="EGY">EGY</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                      </select>
                      {errors.nationality && (
                        <div style={{ color: "red" }}>{errors.nationality}</div>
                      )}
                    </div>

                    {/* Password */}
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid white",
                          outline: "none",
                          backgroundColor: "#131120",
                          color: "white",
                        }}
                      />
                      {errors.password && (
                        <div style={{ color: "red" }}>{errors.password}</div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "wheat",
                        color: "#131120",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={handleSubmit}
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src="https://d1qg2tinnmsnxd.cloudfront.net/shared/img/revamp/MOE-Journey-Banner.jpg"
                className="d-block w-100"
                style={{
                  objectFit: "cover", // Ensures the image covers the area while maintaining aspect ratio
                  width: "100%", // Makes the image span the full width of the screen
                  height: "100vh", // Sets the image height to 100% of the viewport height
                }}
                alt="Sale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
