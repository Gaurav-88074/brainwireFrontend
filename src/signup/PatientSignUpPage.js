import React from 'react'
import classes from './PatientSignUpPage.module.css'
const PatientSIgnUpPage = (props) => {
  return (
    <section className={classes.signupSection} style = {{...props.style}} >
            <div className={classes.nameInput}>
                <div className={classes.nameSection}>
                    <label className={classes.nameLabel}>
                        Age
                    </label>
                    <input type="text"
                    className={classes.nameTextInput}
                    />
                </div>
                
                <div className={classes.userNameSection}>
                    <label className={classes.nameLabel}>
                        Gender
                    </label>
                    <div className={classes.radioSection}>

                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">Male</label>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                        <label for="css">Female</label>
                    </div>
                </div>
            </div>
            <div className={classes.emailInput}>
                <label className={classes.nameLabel}>
                    Phone Number
                </label>
                <input type='Number'
                placeholder='+91'
                    className={classes.nameTextInput}
                />
            </div>
            <div className={classes.passwordInput}>
                <label className={classes.nameLabel}
                    
                >
                    ABHA ID
                </label>
                <input type="text"
                    className={classes.nameTextInput}
                    placeholder=''
                />
            </div>
            {/* <div className={classes.passwordInput}>
                <label className={classes.nameLabel}>
                    Confirm Password
                </label>
                <input type="text"
                    placeholder='6+ characters'
                    className={classes.nameTextInput}
                />
            </div> */}
        </section> 
  )
}

export default PatientSIgnUpPage