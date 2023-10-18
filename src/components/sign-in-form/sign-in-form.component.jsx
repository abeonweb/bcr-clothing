// import { useEffect } from "react";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
// import { getRedirectResult } from "firebase/auth";
import {
  //   auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormInputs = {
  signInEmail: "",
  signInPassword: "",
};

const SignInForm = () => {
  //   useEffect(()=>{
  //     async function getRedirect() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     getRedirect()
  //   }, []);

  const [formInput, setformInput] = useState(defaultFormInputs);
  const { signInEmail, signInPassword } = formInput;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformInput({ ...formInput, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(
        signInEmail,
        signInPassword
      );
      console.log(user);
      resetFormFields();
    } catch (error) {
      const errorCode = error.code;
      if(errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found"){
        alert("Incorrect email or password entered")
      } else {
        console.error("There was an error signing you in.");
      }
    }
  };

  const resetFormFields = () => {
    setformInput(defaultFormInputs);
  };

  return (
    <div className="sign-in-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          required
          onChange={handleChange}
          id="sign-in-email"
          name="signInEmail"
          value={signInEmail}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          id="sign-in-password"
          name="signInPassword"
          value={signInPassword}
        />
        <div className="form-button-container">
          <Button type="submit" onClick={handleChange}>Sign In</Button>
          <Button onClick={logGoogleUser} buttonType={"google"}>
            Google Sign In
          </Button>
        </div>
        {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      </form>
    </div>
  );
};

export default SignInForm;
