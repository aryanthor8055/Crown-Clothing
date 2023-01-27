import { useState, useContext } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";


const defaultFormFields = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInwithGoogle = async () => {
        await signInWithGooglePopup();

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)



            resetFormFields()

        } catch (error) {
            switch (error.code) {

                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                default:
                    console.log(error);
            }

        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>
                Sign In with your email and password
            </span>
            <form onSubmit={handleSubmit}>


                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInwithGoogle}>Google sign In</Button>
                </div>

            </form>
        </div>

    )
}
export default SignInForm;