import * as Yup from 'yup';

const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email address"),
    phoneNumber: Yup.string().min(10).max(25).matches(/^[0-9]+$/, "Phone number must be only digits").required("Please enter your phone number"),
    password: Yup.string().min(6).max(25).required("Please enter your password"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Please confirm your password")
});

export default signUpSchema;