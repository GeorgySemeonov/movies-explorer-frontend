import React from "react";
import Form from "../Form/Form";



function Register({ title, buttonText, linkText, bottomText,userReg }) {
  
  return (
    <Form
      nameForm="signup"
      onSubmit={userReg}
      title={title}
      buttonText={buttonText}
      linkText={linkText}
      bottomText={bottomText}
    ></Form>
  );
}

export default Register;
