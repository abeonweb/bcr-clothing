import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  SignInFormContainer,
  FormButtonContainer,
} from "./sign-in-form.styles";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormInputs = {
  signInEmail: "",
  signInPassword: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formInput, setformInput] = useState(defaultFormInputs);
  const { signInEmail, signInPassword } = formInput;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformInput({ ...formInput, [name]: value });
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(signInEmail, signInPassword));
      resetFormFields();
    } catch (error) {
      const errorCode = error.code;
      if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/user-not-found"
      ) {
        alert("Incorrect email or password entered");
      } else {
        console.error("There was an error signing you in.");
      }
    }
  };

  const resetFormFields = () => {
    setformInput(defaultFormInputs);
  };

  return (
    <SignInFormContainer>
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
        <FormButtonContainer>
          <Button type="submit" onClick={handleChange}>
            Sign In
          </Button>
          <Button
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </FormButtonContainer>
        {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
