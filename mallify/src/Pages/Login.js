import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Title from "../Images/Title.png";
import bag from "../Images/Bag.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";
import { auth } from "../Firebase/firebase";
import { firestore } from "../Firebase/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(false); // Track login process
  const [errorMessage, setErrorMessage] = useState(""); // Display error messages

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      setIsSignIn(true);
      setErrorMessage(""); // Clear previous errors

      // Query Firestore for a user with the provided email
      const usersRef = collection(firestore, "Users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErrorMessage("No account found with this email.");
      } else {
        // Assume only one document matches the email
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        // Validate the password (use hashed comparison in production)
        if (userData.password !== password) {
          setErrorMessage("Incorrect password.");
        } else {
          // Successful login
          navigate("/Browse");
        }
      }
    } catch (error) {
      console.error("Error during login: ", error);
      setErrorMessage("Failed to log in. Please try again later.");
    } finally {
      setIsSignIn(false);
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
        <div
          className="container"
          style={{
            padding: "0px",
          }}
        >
          <div className="row">
            <div className="col">
              <div className="row">
                <div
                  className="col"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15vh",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "bolder",
                        margin: "0px",
                      }}
                    >
                      Log in to Your Account
                    </h3>
                    <div>
                      <div style={{ color: "gray" }}>
                        Don't have an account?{" "}
                        <Link
                          to="/Signup"
                          style={{ color: "wheat", textDecoration: "none" }}
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <form>
                    <div style={{ marginBottom: "10px" }}></div>

                    {/* Error Message */}
                    {errorMessage && (
                      <div
                        className="alert alert-danger"
                        style={{
                          color: "red",
                          marginBottom: "15px",
                          textAlign: "center",
                        }}
                      >
                        {errorMessage}
                      </div>
                    )}

                    {/* Email */}
                    <div style={{ marginBottom: "15px" }}>
                      <input
                        type="email"
                        id="email"
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
                    </div>

                    {/* Password */}
                    <div style={{ marginBottom: "15px" }}>
                      <div style={{ position: "relative" }}>
                        <input
                          type="password"
                          id="password"
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
                      </div>
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
                        fontWeight: "bold",
                      }}
                      onClick={onSubmit}
                    >
                      Log in
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
