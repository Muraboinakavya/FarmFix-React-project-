import "./Register.css";
import { useState } from "react";
import api from "../API/api";
import {FaEye,FaEyeSlash} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setUserEmail] = useState("");
  const [mobile, setUserMobile] = useState("");
  const [password, setUserPassword] = useState("");
  const [confrompassword, setUserConform] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("farmer");

  // Mechanic Fields
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [serviceArea, setServiceArea] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);


  

  function handleReset() {
    setFullName("");
    setUserEmail("");
    setUserMobile("");
    setUserPassword("");
    setUserConform("");
    setLocation("");
    setRole("farmer");
    setSpecialization("");
    setExperience("");
    setServiceArea("");
    setTermsAccepted(false);
    setErrors({});
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationError = {};

    if (fullname.trim() === "") {
      validationError.fullname = "Full Name is required";
    }

    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
      validationError.email = "Enter a valid email";
    }

    if (mobile.length !== 10) {
      validationError.mobile = "Phone number must contain 10 digits";
    }

    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passPattern.test(password)) {
      validationError.password =
        "Password must contain uppercase, lowercase, number and special character";
    }

    if (password !== confrompassword) {
      validationError.confrompassword =
        "Password and Confirm Password must match";
    }

    if (location.trim() === "") {
      validationError.location = "Village is required";
    }

    if (!termsAccepted) {
      validationError.terms = "Accept Terms & Conditions";
    }

    if (role === "mechanic") {
      if (specialization.trim() === "") {
        validationError.specialization = "Enter specialization";
      }

      if (experience.trim() === "") {
        validationError.experience = "Enter experience";
      }

      if (serviceArea.trim() === "") {
        validationError.serviceArea = "Enter service area";
      }
    }

    setErrors(validationError);

    if (Object.keys(validationError).length > 0) return;

    const userData = {
      name: fullname,
      email,
      phone: mobile,
      password,
      village: location,
      role,
    };

    try {
      setLoading(true);

      const response = await api.post("/users/register", userData);
      console.log(response);

      setSuccessMessage(response.data.message);

      handleReset();
       setTimeout(()=>{
        
        navigate("/login");
       },1500);
    
      
    } catch (error) {
      console.log(error)
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    } finally {
      setLoading(false);
    }
}
    return (
    <section className="register-page">
      <h2>Create Your FarmFix Account</h2>

      <p>
        Join FarmFix to connect farmers with trusted mechanics for faster
        equipment repair and maintenance.
      </p>

      {successMessage && (
        <p className="success">{successMessage}</p>
      )}

      <form className="register-form" onSubmit={handleSubmit} autoComplete="off">

        <input
          type="text"
           autoComplete="off"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullname && <p className="error">{errors.fullname}</p>}

        <input
          type="email"
           autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
           autoComplete="off"
          placeholder="Phone Number"
          value={mobile}
          onChange={(e) => setUserMobile(e.target.value)}
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

       <div className="password-box">
    <input
        type={showPassword ? "text" : "password"}
         autoComplete="off"
        placeholder="Password"
        value={password}
        onChange={(e) => setUserPassword(e.target.value)}
    />

    <span
        className="eye-icon"
        onClick={() => setShowPassword(!showPassword)}
    >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
</div>

{errors.password && (
    <p className="error">{errors.password}</p>
)}
      
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="farmer">Farmer</option>
          <option value="mechanic">Mechanic</option>
        </select>

        <div className="password-box">
    <input
        type={showConfirmPassword ? "text" : "password"}
         autoComplete="off"
        placeholder="Confirm Password"
        value={confrompassword}
        onChange={(e) => setUserConform(e.target.value)}
    />

    <span
        className="eye-icon"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
</div>

{errors.confrompassword && (
    <p className="error">{errors.confrompassword}</p>
)}        <input
          type="text"
           autoComplete="off"
          placeholder="Village / Town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
        
        {errors.location && <p className="error">{errors.location}</p>}

        {/* Mechanic Fields */}

        {role === "mechanic" && (
          <>
            <input
              type="text"
               autoComplete="off"
              placeholder="Specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
            {errors.specialization && (
              <p className="error">{errors.specialization}</p>
            )}

            <input
              type="text"
               autoComplete="off"
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
            {errors.experience && (
              <p className="error">{errors.experience}</p>
            )}

            <input
              type="text"
               autoComplete="off"
              placeholder="Service Area"
              value={serviceArea}
              onChange={(e) => setServiceArea(e.target.value)}
            />
            {errors.serviceArea && (
              <p className="error">{errors.serviceArea}</p>
            )}
          </>
        )}

        <div className="terms-container">
          <input
            type="checkbox"
             autoComplete="off"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />

          <label htmlFor="terms">
            I agree to the Terms & Conditions and Privacy Policy.
          </label>
        </div>

        {errors.terms && (
          <p className="error">{errors.terms}</p>
        )}

        <div className="button-group">
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

      </form>
    </section>
  );
}


export default Register;