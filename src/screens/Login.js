import React from 'react'
import classes from'./Login.module.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const rytSignHandler=(event)=>{
    navigate("/Signup");
  }
  const signInHandler = ()=>{
    navigate("/User/Dashboard");
  }
  return (
    <div className={classes.signupDom}>
        <div className={classes.sudSection1}>

        </div>
        <div className={classes.sudSection2}>
            <div className={classes.sudSection_0}>
              <div className={classes.sudDection_0_1}>
                  <span>Not a member?</span>
                  <button className={classes.rytSign}
                    onClick={rytSignHandler}
                  >
                      Sign up
                  </button>
              </div>
            </div>
            <div className={classes.sudSection_1}>
              <div className={classes.sudSection_1_1}>
                
                  <h2>Sign in to Brain Wire</h2>
                  <section className={classes.googleSignup}>
                      <div className={classes.logoGoogle}>
                          
                      </div>
                      <button className={classes.googleSignupBtn}>
                        Sign in with Google
                      </button>
                  </section>
                  <section className={classes.or}>
                   Or
                  </section>
              </div>
            </div>
            <div className={classes.sudSection_2}>
              <section className={classes.signupSection}>
                  <div className={classes.nameInput}>
                      
                      
                      <div className={classes.userNameSection}
                        style={{width:'100%'}}
                      >
                          <label className={classes.nameLabel}>
                              Email 
                          </label>
                          <input type="text" 
                            className={classes.nameTextInput}
                          />
                      </div>
                  </div>
                  {/* <div className="emailInput">
                      <label className="nameLabel">
                          Email
                      </label>
                      <input type="text"
                        className='nameTextInput'
                      />
                  </div> */}
                  <div className={classes.passwordInput}>
                      <label className={classes.nameLabel}
                        
                      >
                          Password
                      </label>
                      <input type="password"
                        className={classes.nameTextInput}
                        placeholder=''
                      />
                  </div>
                  
                  <div className={classes.sudSection_3_1}>
                    <button className={classes.createAcbutton}
                      style={{
                        height:'20%'
                      }}
                      onClick={signInHandler}
                    >
                      Sign In
                    </button>
                  </div>
                
              </section>
            </div>
            
        </div>
    </div>
  )
}

export default Login