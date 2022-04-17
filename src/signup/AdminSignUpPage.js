import React from 'react'
import classes from './AdminSignUpPage.module.css';
const AdminSignUpPage = (props) => {
    
    return (   
        //style={{...props.style}}
        <section className={classes.signupSection} style = {{...props.style}} >
            <div className={classes.nameInput}>
                <div className={classes.nameSection}>
                    <label className={classes.nameLabel}>
                        Laboratory Name
                    </label>
                    <input type="text"
                    className={classes.nameTextInput}
                    />
                </div>
                
                <div className={classes.userNameSection}>
                    <label className={classes.nameLabel}>
                        Certificate No.
                    </label>
                    <input type="text" 
                        className={classes.nameTextInput}
                    />
                </div>
            </div>
            <div className={classes.emailInput}>
                <label className={classes.nameLabel}>
                    Address
                </label>
                <input type="text"
                    className={classes.nameTextInput}
                />
            </div>
            <div className={classes.passwordInput}>
                <label className={classes.nameLabel}
                    
                >
                   Laboratory Name
                </label>
                <input type="text"
                    className={classes.nameTextInput}
                    placeholder=''
                />
            </div>
            <div className={classes.passwordInput}>
                <label className={classes.nameLabel}>
                    Field
                </label>
                <input type="text"
                    placeholder='(i.e. Calibration, Medical Testing)'
                    className={classes.nameTextInput}
                />
            </div>
        </section> 
    )
}

export default AdminSignUpPage
