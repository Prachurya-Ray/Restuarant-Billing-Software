import * as Yup from 'yup';

const signInSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email address"),
    password: Yup.string().min(6).max(25).required("Please enter your password"),
});

export default signInSchema;