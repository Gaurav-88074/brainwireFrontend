import React from "react";
import classes from "./Signup.module.css";
import AdminSignUpPage from "../signup/AdminSignUpPage";
import DoctorSignUpPage from "../signup/DoctorSignUpPage";
import PatientSignUpPage from "../signup/PatientSignUpPage";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
    const navigate = useNavigate();
    const rytSignHandler = (event) => {
        navigate("/Login");
    };
    const [shift, changeShift] = useState(0);

    const [adminSignup, setAdminSignup] = useState(false);
    const [patientSignup, setPatientSignup] = useState(false);
    const [doctorSignup, setDoctorSignup] = useState(false);
    const [buttonChange, setButtonChange] = useState(false)
    const [roleValue,setRoleValue] = useState("");
    
    const style =   {
          transform: `translateX(${shift}%)`
    }
      
    const proceedButtonHandler = () => {
        if (roleValue!="" && roleValue!="select") {
            setButtonChange(true);
            changeShift(-100);
        }
    };
    const createAcbuttonHandler =()=>{
        // console.log("working..");
        fetch("https://healthidsbx.ndhm.gov.in/api/v1/search/existsByHealthId",{
            method :'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(
                {
                    "healthId": "real_id@ndhm"
                }
            )
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }
    const backButtonHandler = ()=>{
        changeShift(0);
        setButtonChange(false);
    }
    const roleChangeHandler = (event)=>{
        const role = event.target.value;
        setRoleValue(role)
        if(role==="admin"){
            setAdminSignup(true);
            setDoctorSignup(false);
            setPatientSignup(false);
        }
        else if(role=="doctor"){
            setAdminSignup(false);
            setDoctorSignup(true);
            setPatientSignup(false);
        }
        else if(role=="patient"){
            setAdminSignup(false);
            setDoctorSignup(false);
            setPatientSignup(true);
        }
    }
    return (
        <div className={classes.signupDom}>
            <div className={classes.leftBody}></div>
            <div className={classes.rightBody}>
                <div className={classes.section_0}>
                    <span>Already a member?</span>
                    <button
                        className={classes.rytSign}
                        onClick={rytSignHandler}
                    >
                        Sign in
                    </button>
                </div>

                <div className={classes.section_1}>
                    <div className={classes.sudSection_1_1}>
                        <h2>Sign up to Brain Wire</h2>
                        <section className={classes.googleSignup}>
                            <div className={classes.logoGoogle}></div>
                            <button className={classes.googleSignupBtn}>
                                Sign up with Google
                            </button>
                        </section>
                        <section className={classes.or}>Or</section>
                    </div>
                </div>

                <div className={classes.section_2}>
                    <div className={classes.dynamicSignup}>
                        <section className={classes.signupSection} 
                          style = {{...style}}
                        >
                            <div className={classes.nameInput}>
                                <div className={classes.nameSection}>
                                    <label className={classes.nameLabel}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className={classes.nameTextInput}
                                    />
                                </div>

                                <div className={classes.userNameSection}>
                                    <label className={classes.nameLabel}>
                                        Role
                                    </label>
                                    <select
                                        className={classes.signupChoiceSelect}
                                        onChange = {roleChangeHandler}
                                    >
                                        <option value="select">select</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="patient">Patient</option>
                                        <option value="admin">DCA</option>
                                    </select>
                                </div>
                            </div>
                            <div className={classes.emailInput}>
                                <label className={classes.nameLabel}>
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className={classes.nameTextInput}
                                />
                            </div>
                            <div className={classes.passwordInput}>
                                <label className={classes.nameLabel}>
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className={classes.nameTextInput}
                                    placeholder="6+ characters"
                                />
                            </div>
                            <div className={classes.passwordInput}>
                                <label className={classes.nameLabel}>
                                    Confirm Password
                                </label>
                                <input
                                    type="text"
                                    placeholder="6+ characters"
                                    className={classes.nameTextInput}
                                />
                            </div>
                        </section>
                        {
                            adminSignup
                            &&
                            <AdminSignUpPage style = {{...style}}/>
                        }
                        {
                            doctorSignup
                            &&
                            <DoctorSignUpPage style = {{...style}} />
                        }
                        {
                            patientSignup
                            &&
                            <PatientSignUpPage style = {{...style}}/>
                        }
                    </div>
                </div>
                <div className={classes.section_3}>
                    <div className={classes.sudSection_3_1}>
                        {
                            !buttonChange
                            &&
                            <button
                                className={classes.createAcbutton}
                                onClick={proceedButtonHandler}
                            >
                                Proceed
                            </button>
                        }
                        {
                            buttonChange
                            &&
                            <button className={classes.backButton}
                                onClick={backButtonHandler}
                            >
                                &#8592;
                            </button>
                        }
                        {   
                            buttonChange
                            &&
                            <button className={classes.createAcbutton}
                            onClick={createAcbuttonHandler}
                            >
                                Create Account
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
