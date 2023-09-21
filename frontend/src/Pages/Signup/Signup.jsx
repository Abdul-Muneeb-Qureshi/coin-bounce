import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import styles from './Signup.module.css';
import signupSchema from '../../schemas/signupSchema';
import { useFormik } from 'formik';
import { signup } from '../../api/internal';
import {setUser} from '../../Store/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error , setError] = useState('');
    const handleSignup = async ()=>{
        const data ={
            username : values.username,
            password : values.password,
            email    : values.email,
            name : values.name,
            confirmPassword : values.confirmPassword,
        }
        const response = await signup(data);

        if(response.status === 201){
            const user = {
                _id: response.data.user._id ,
                username: response.data.user.username ,
                email: response.data.user.email ,
                auth: response.data.auth
            }
            dispatch(setUser(user));
            navigate('/')
        }
        else if(response.code === 'ERR_BAD_REQUEST'){

            setError(response.response.statusText)

        }
    }

    const { values , touched , handleBlur , handleChange , errors } = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            name: '',
            confirmPassword: '',

        },
        validationSchema :signupSchema
    });

    return(
    <div className={styles.signupWrapper}>
        <div className={styles.signupHeader}>
            Create an Account
        </div>
        <TextInput
        type="text"
        value={values.name}
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="name"
        error={errors.name && touched.name ? 1 : undefined}
        errormessage={errors.name}
        />
        <TextInput
        type="text"
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="username"
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
        />
         <TextInput
        type="text"
        value={values.email}
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="email"
        error={errors.email && touched.email ? 1 : undefined}
        errormessage={errors.email}
        />
        <TextInput
         type="password"
         value={values.password}
         name="password"
         onBlur={handleBlur}
         onChange={handleChange}
         placeholder="password"
         error={errors.password && touched.password ? 1 : undefined}
         errormessage={errors.password}/>

        <TextInput
         type="password"
         value={values.confirmPassword}
         name="confirmPassword"
         onBlur={handleBlur}
         onChange={handleChange}
         placeholder="confirmPassword"
         error={errors.confirmPassword && touched.confirmPassword ? 1 : undefined}
         errormessage={errors.confirmPassword}/>
       
        <button className={styles.signupButton} onClick={handleSignup}
        disabled={!values.confirmPassword || !values.email || !values.name || !values.password || !values.username || errors.confirmPassword || errors.email || errors.password || errors.username || errors.name }
        >Sign Up</button>
        <span>
            Already have an account? <button className={styles.login} onClick={()=>navigate("/login")}>Sign In</button>
        </span>
        {error !== "" ? <p className={styles.errorMessage}>kindly Change Credentials</p> : ""}
    </div>)

}

export default Signup