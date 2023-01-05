import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";
import Search from "./Search";

const Navbar = () => {
    
    return (
    <div className={styles.navbar}> 
         <div className={styles.links}>
            <input type="text"
                    name="searchbar"
                    placeholder=" search free high resolution photos"
            />
           <Link href="/explore">Explore</Link>
           <Link href="/advertise">Advertise</Link>
           <Link href="/unsplashplus">Unsplash+</Link> 
           <div className={styles.logsign}>
           <Link href="/login">Login</Link> 
           <Link href="">|</Link> 
           <Link href="/" >Sign up</Link>  
           <Link className={styles.payments}href="/payments">Payments Plans</Link>
           </div>   
        </div>       
    </div>
    );
};


export default Navbar;