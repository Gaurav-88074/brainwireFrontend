import React from "react";
import classes from './DoctorSignUpPage.module.css'
const DoctorSignUpPage = (props) => {
    // console.log(props);
    return (
        <section className={classes.signupSection} style = {{...props.style}} >
            <div className={classes.nameInput}>
                <div className={classes.nameSection}>
                    <label className={classes.nameLabel}>Age</label>
                    <input type="text" className={classes.nameTextInput} />
                </div>

                <div className={classes.userNameSection}>
                    <label className={classes.nameLabel}>Gender</label>
                    {/* <input type="text" className={classes.nameTextInput} /> */}
                    <div className={classes.radioSection}>

                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">Male</label>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Female</label>
                    {/* <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Other</label> */}
                    </div>
                </div>
            </div>
            <div className={classes.emailInput}>
                <label className={classes.nameLabel}>License Number</label>
                <input type="text" className={classes.nameTextInput} />
            </div>
            <div className={classes.passwordInput}>
                <label className={classes.nameLabel}>Year of license Allotment
                </label>
                <input
                    type="text"
                    className={classes.nameTextInput}
                    placeholder=""
                />
            </div>
            <div className={classes.passwordInput}>
                <label className={classes.nameLabel}>Phone Number</label>
                <input
                    type="text"
                    placeholder="+91"
                    className={classes.nameTextInput}
                />
            </div>
        </section>
    );
};

export default DoctorSignUpPage;
