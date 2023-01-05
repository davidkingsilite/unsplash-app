import React from 'react';
import styles from '../styles/components/LoginForm.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { SpaOutlined, SpaTwoTone } from '@material-ui/icons';

class LoginForm extends React.Component {

    state = {
        email: '',
        password:''
    };

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

  render() {
    return (
            <form className={styles.contentcontainerlogin} onSubmit={this.handleSubmit}>

                <div className={styles.container}>
                    <div className={styles.headercontainer}>
                    <h2 className={styles.loginh2}> Login </h2>
                    <p> welcome back.</p>
                    </div>
                    <a className={styles.link} href="https://www.facebook.com">
                    <div className={styles.facebooklogocontainer}>
                          <FacebookIcon className={styles.facebookicon} />  
                          <p className={styles.pfacebook}>  Login with Facebook </p>  
                    </div>{/*social login section*/}
                       </a>
                    <p className={styles.p2}> OR </p>
                    <div className={styles.groupform_justify}>
                        <div className={styles.form1}>
                        <label>Email</label>   
                         <input type="email"
                                className={styles.form_control}
                                name="user[email]"
                                id="user_email"
                                autoFocus="autofocus"
                                tabIndex="1"
                                onChange={this.handleChange}
                            />               
                        </div>
                        <div className={styles.form2}>
                        <div className={styles.label_justify}>
                            <label>Password</label>
                            <span> <a className={styles.a} tabIndex="4" href="/user/password/new">Forgot your password?</a></span>
                        </div>
                    
                         <input type="password"
                            className={styles.form_control}
                            name="user[password]"
                            id="user_password"
                            tabIndex="2"
                            autoComplete="off"
                            onChange={this.handleChange}
                            /> 
                        </div>
                            <button type="submit"
                            className={styles.form_control_btn}
                        
                        
                                > Login </button>

                         <div className={styles.alt_bottom} text-center >
                          {"Don't have an account? "}
                            <a className={styles.a} href="/join"> Join Unsplash</a>
                         </div>       
                     </div>
                </div>
            </form>
    )
  };
};

export default LoginForm;
