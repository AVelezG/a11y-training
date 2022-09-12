import React, { useState } from "react";
import { HiCursorClick } from "react-icons/hi";

import {
  FormContainer,
  FormElements,
  FormInputButton,
  FormInput,
  FormLabel,
  FormError,
} from "./Form.styled";

export interface FormProps {
  onClick?: () => void;
}

export interface stateForm {
  firstName_a11y?: string;
  lastName_a11y?: string;
  email_a11y?: string;
}

export const Form: React.FC<FormProps> = ({ ...props }) => {
  const [formState_a11y, setFormState_a11y] = useState<stateForm>({
    firstName_a11y: "",
    lastName_a11y: "",
    email_a11y: "",
  });

  const [inputValidation_a11y, setInputValidation_a11y] = useState<stateForm>({
    firstName_a11y: undefined,
    lastName_a11y: "",
    email_a11y: "",
  });

  let changeForm_a11y = (e: any) => {
    setFormState_a11y({
      ...formState_a11y,
      [e.target.name]: e.target.value,
    });
  };

  let validateInput = () => {
    console.log("[[[[[[", formState_a11y.firstName_a11y);
    if (formState_a11y.firstName_a11y) {
      console.log("------", formState_a11y.firstName_a11y);
      if (formState_a11y.firstName_a11y.length > 7) {
        setInputValidation_a11y({
          ...setInputValidation_a11y,
          firstName_a11y: "",
        });
      } else {
        setInputValidation_a11y({
          ...setInputValidation_a11y,
          firstName_a11y: undefined,
        });
      }
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormElements>
        <h3>Contact</h3>
        <p>Please fill the form</p>
        <FormLabel htmlFor="firstName_a11y">First Name</FormLabel>
        <FormInput
          type="text"
          id="firstName_a11y"
          name="firstName_a11y"
          aria-describedby="alert-form"
          required
          onChange={changeForm_a11y}
          value={formState_a11y.firstName_a11y}
          onBlur={validateInput}
        />
        <div
          role="alert"
          aria-hidden={
            inputValidation_a11y.firstName_a11y === "" ? false : true
          }
          id="alert-form"
        >
          <FormError>
            {inputValidation_a11y.firstName_a11y === ""
              ? "Error: Text is to long"
              : ""}
          </FormError>
        </div>

        <FormInput
          type="text"
          id="lastName_a11y"
          name="lastName_a11y"
          placeholder="Last Name"
          aria-label="Last Name"
          onChange={changeForm_a11y}
          value={formState_a11y.lastName_a11y}
        />

        <FormLabel htmlFor="email_a11y">email</FormLabel>
        <FormInput
          type="email"
          id="email_a11y"
          name="email_a11y"
          onChange={changeForm_a11y}
          value={formState_a11y.email_a11y}
        />
        {/* <FormInput type="text" id="test" name="test" /> */}
        <FormInputButton type="submit" value="Send Info" />
      </FormElements>
    </FormContainer>
  );
};
