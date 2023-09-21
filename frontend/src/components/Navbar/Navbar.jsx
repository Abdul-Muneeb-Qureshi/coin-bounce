import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
import { useSelector } from "react-redux";
import { signout } from "../../api/internal";
import {resetUser} from "../../Store/userSlice";
import { useDispatch } from "react-redux";

function Navbar() {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state) => state.user.auth);
    const handleSignOut = async() =>{
            await signout();
            dispatch(resetUser());}
    return (
        <>
            <nav className={styles.navbar}>
                <NavLink
                    to='/'
                    className={`${styles.logo} ${styles.InActiveStyle}`}>Coin Bounce</NavLink>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Home</NavLink>
                <NavLink
                    to='crypto'
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Crypto Currencies</NavLink>
                <NavLink
                    to='blogs'
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Blogs</NavLink>
                <NavLink
                    to='submit'
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Submit a Blog</NavLink>

                {isAuthenticated ?
                    <div>
                        <NavLink>
                            <button className={styles.signOutButton} onClick={handleSignOut}>LogOut</button>
                        </NavLink>
                    </div>
                    : <div>
                        <NavLink
                            to='login'
                            className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>
                            <button className={styles.logInButton}>Log In</button>
                        </NavLink>
                        <NavLink
                            to='signup'
                            className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>
                            <button className={styles.signUpButton}>Sign UP</button>
                        </NavLink>
                    </div>}

            </nav>
            <div className={styles.separator}>

            </div>
        </>
    )
}

export default Navbar;