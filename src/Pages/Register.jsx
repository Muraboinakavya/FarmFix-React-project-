import "./Register.css";
import { useState } from "react";
function Register(){
    const [fullname,setFullName] = useState("");
    const [email,setUserEmail] = useState("");
    const [mobile,setUserMobile] = useState("");
    const [password,setUserPassword] = useState("");
    const [equipment, setEquipment] = useState("");
const [location, setLocation] = useState("");
const [termsAccepted, setTermsAccepted] = useState(false);
    const [confrompassword,setUserConform] = useState("");
     const [errors,setErrors] = useState({});
     const [successMessage, setSuccessMessage] = useState("");
     const [userData, setUserData] = useState(null);
    //  const validationError ={};
    function handleSubmit(event){
        event.preventDefault()
        // console.log("Register button clicked")
        validation(event);
    }
        // event.preventDefault()
    function handleRest() {
    setFullName("");
    setUserEmail("");
    setUserMobile("");
    setUserPassword("");
    setUserConform("");
    setEquipment("");
    setLocation("");
    setTermsAccepted(false);
    setErrors({});
}
    
    function validation(event){
        const validationError ={};
        event.preventDefault();
        if(fullname.trim() === ""){
            validationError.fullname = "Full name is required";
            
            

        }
        const emailpattern = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        if(!emailpattern.test(email)){
            validationError.email = "Please Enter the valid Email"
            
        }
        if(mobile.trim() === "" || mobile.length !== 10){
            validationError.mobile  = "Mobile number is must be 10 digits";
            
        }
        const passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passpattern.test(password)){
            validationError.password ="Enter the valid password"
            
        }
        if(confrompassword !== password){
            validationError.confrompassword ="The password and conform password should same";
            

        }
    
    if(equipment === ""){
    validationError.equipment = "Please select farm equipment";
}

if(location.trim() === ""){
    validationError.location = "Location is required";
}

if(!termsAccepted){
    validationError.terms = "Please accept the Terms & Conditions";
}
setErrors(validationError);
if(Object.keys(validationError).length === 0){

    setSuccessMessage("🎉 Registration Successful!");

    setUserData({
        fullname,
        email,
        mobile,
        equipment,
        location
    });

    handleRest();
}
    }
    return(
        <section className="register-page">
            <h2>Create Your FarmFix Account</h2>
            <p>Join FarmFix to connect with trusted mechanics, report farm equipment issues, track repair requests, and access reliable maintenance services. Register today to experience faster, smarter, and more efficient equipment support.</p>
             {successMessage && (
    <p className="success">{successMessage}</p>
)}          
            <form  className="register-form" onSubmit={handleSubmit}>
                <input id="name"
                type="text"
                placeholder="Enter the Fullname"
                value={fullname}
                onChange={(event)=>setFullName(event.target.value)}
                />
                {errors.fullname && <p className="error">{errors.fullname}</p>}
                <input id="email"
                type="email"
                placeholder="Enter the Email"
                value={email}
                onChange={(event)=>setUserEmail(event.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input id="mobile"
                type="text"
                placeholder="Enter the phone number"
                value={mobile}
                onChange={(event)=>setUserMobile(event.target.value)}
                />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
                <input id="password"
                type="password"
                placeholder="Enter the password"
                value={password}
                onChange={(event)=>setUserPassword(event.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <input id="conform-password"
                type="password"
                placeholder="Enter the  conform password"
                value={confrompassword}
                onChange={(event)=>setUserConform(event.target.value)}
                />
                {errors.confrompassword && (
    <p className="error">{errors.confrompassword}</p>
)}
                <select
    value={equipment}
    onChange={(event) => setEquipment(event.target.value)}
>
    <option value="">Select Farm Equipment</option>
    <option value="Tractor">Tractor</option>
    <option value="Rotavator">Rotavator</option>
    <option value="Cultivator">Cultivator</option>
    <option value="Seed Drill">Seed Drill</option>
    <option value="Sprayer">Sprayer</option>
    <option value="Harvester">Harvester</option>
    <option value="Power Tiller">Power Tiller</option>
    <option value="Thresher">Thresher</option>
    <option value="Plough">Plough</option>
    <option value="Water Pump">Water Pump</option>
    <option value="Other">Other</option>
</select>
{errors.equipment && (
    <p className="error">{errors.equipment}</p>
)}
<input
    type="text"
    placeholder="Enter your Village / Town"
    value={location}
    onChange={(event) => setLocation(event.target.value)}
/>
{errors.location && <p className="error">{errors.location}</p>}
<div className="terms-container">

    <input
        type="checkbox"
        id="terms"
        checked={termsAccepted}
        onChange={(event)=>setTermsAccepted(event.target.checked)}
    />

    <label htmlFor="terms">
        I agree to the Terms & Conditions and Privacy Policy of FarmFix. I confirm that the information provided is accurate and authorize FarmFix to connect me with verified service providers.
    </label>

</div>
{errors.terms && <p className="error">{errors.terms}</p>}
                <button type="submit">Register</button> <button type="button" onClick={handleRest}>Reset</button>

                
            </form>
            {userData && (
    <div className="user-card">
        <h3>Registered User Details</h3>

        <p><strong>Name:</strong> {userData.fullname}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Mobile:</strong> {userData.mobile}</p>
        <p><strong>Equipment:</strong> {userData.equipment}</p>
        <p><strong>Location:</strong> {userData.location}</p>
    </div>
)}
        </section>
    );
}
export default Register;