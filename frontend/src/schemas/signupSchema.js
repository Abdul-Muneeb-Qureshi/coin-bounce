import * as yup from 'yup';

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const errorMessage  = 'user lowercase , uppercase and digits'


const signupSchema = yup.object().shape({
    name: yup.string().max(30).required('name is required'),
    username: yup.string().min(5).max(30).required('username is required'),
    email: yup.string().email('enter a valid email').required('email is required'),
    password: yup.string().matches(passwordPattern , {message : errorMessage}).required('password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')] , 'password must match').required('password is required'),
});

export default signupSchema;