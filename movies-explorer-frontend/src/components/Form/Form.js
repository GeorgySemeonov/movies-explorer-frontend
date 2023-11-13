import React from "react";
import { Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../images/logo.svg";
import "./Form.css";
import '../../vendor/hover.css';
import { useForm } from 'react-hook-form';
import { useCallback, useState, useEffect } from 'react';

function Form({ nameForm, title, buttonText, linkText, bottomText,onSubmit }) {
  
//  const [name, setUserName] = React.useState('');
//  const [email, setEmail] = React.useState('');
//  const [password, setPassword] = React.useState('');

//  const [isValidName, setIsValidName] = React.useState(false);
//  const [isValidEmail, setIsValidEmail] = React.useState(false);
//  const [isValidPassword, setIsValidPassword] = React.useState(false);

//  const [errorName, setErrorName] =React.useState('');
//  const [errorEmail, setErrorEmail] = React.useState('');
//  const [errorPassword, setErrorPassword] = React.useState('');


  //  register,
  //  formState: { errors },
  const { register, handleSubmit,
 } = useForm();

//  function handleNameChange(e) {
//    const input = e.target;
//    setUserName(input.value);
//    setIsValidName(input.validity.valid);
//    if (!isValidName) {
//      setErrorEmail(input.validationMessage);
//    } else {
//      setErrorName('');
     
//      // setIsDisabled(false);
//    }
//  }

//  function handleEmailChange(event) {
//    const input = event.target;
//    setEmail(input.value);
//    setIsValidEmail(input.validity.valid);
//    if (!isValidEmail) {
//      setErrorEmail(input.validationMessage);
//    } else {
//      setErrorEmail('');
//    }
//  }

//  function handlePasswordChange(event) {
//    setPassword(event.target.value);
//    const input = event.target;
//    setPassword(input.value);
//    setIsValidPassword(input.validity.valid);
//    if (!isValidPassword) {
//      setErrorPassword(input.validationMessage);
//    } else {
//      setErrorPassword('');
//    }
//  }


   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});
   const [isValid, setIsValid] = useState({});


   function handleChange(evt) {
     const name = evt.target.name;
     const value = evt.target.value;
     setValues({ ...values, [name]: value });
     setErrors({ ...errors, [name]: evt.target.validationMessage });
     setIsValid(evt.target.closest('form').checkValidity());
   }

   const resetForms = useCallback(
     (updatedValues = {}, updatedErrors = {}, updatedIsValid = false) => {
       setValues(updatedValues);
       setErrors(updatedErrors);
       setIsValid(updatedIsValid);
     },
     [setValues, setErrors, setIsValid]
   );


   useEffect(() => {
    resetForms();
  }, [resetForms]);

  return (

    <div className="form__container">
    <form className="form" onSubmit={
      handleSubmit
      (onSubmit)}>
      <div className="form-top">
        <Link to="/">
          <img className="header__logo" src={logo} alt="логотип" />
        </Link>
        <p className="form__title">{title}</p>
      </div>
      <fieldset className="form__inputs-register">
        {nameForm === 'signup' && (
          <label className="form__label">
            <span className="form__label_title">Имя</span>


            <input

{...register('name', {
  required: true,
  pattern: /^[A-Za-zА-Яа-яЁё /s -]+$/,
})}
          type="text"
          name="name"
          className="form__inputs-item"
          onChange={handleChange}
          value={values.name || ''}
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          // pattern="/^[A-Za-zА-Яа-яЁё /s -]+$/v"
          required
        ></input>


            {/* <input
              {...register('name', {
                required: true,
                onChange: (e) => handleNameChange(e),
                minLength: 2,
                maxLength: 35,
              })}
              type="name"
              className="form__inputs-item"
              placeholder="Имя"
              id="name"
              value={name || ''}
            ></input> */}


<span className="form__inputs-error">
{errors.name || ''}
              </span>

            {/* {errors.name && errors.name.type === 'required' && (
              <span className="form__inputs-error">
                Добавьте, пожалуйста, имя
              </span>
            )}
            {errors.name && errors.name.type === 'minLength' && (
              <span className="form__inputs-error">
                Имя не бывает таким коротким
              </span>
            )} */}
          </label>
        )}

        <label className="form__label">
          <span className="form__label_title">E-mail</span>

          <input
      //    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      //   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
{...register('email', {
  required: true,
  pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
})}

          type="email"
          name="email"
          className="form__inputs-item"
          onChange={handleChange}
          value={values.email || ''}
          // pattern="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/"
          placeholder="E-mail"
          minLength="6"
          required
        />

          {/* <input
            {...register('email', {
              required: true,
              onChange: (e) => handleEmailChange(e),
              pattern: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
            })}
            type="email"
            className="form__inputs-item"
            placeholder="E-mail"
            value={email || ''}
          /> */}

<span className="form__inputs-error">
{errors.email || ''}
            </span>


          {/* {errors.email && errors.email.type === 'required' && (
            <span className="form__inputs-error">
              Добавьте, пожалуйста, ваш E-mail
            </span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span className="form__inputs-error">
              E-mail написан с ошибкой
            </span>
          )} */}


        </label>

        <label className="form__label">
          <span className="form__label_title">Пароль</span>

          <input
            {...register('password', {
              required: true,
            })}


          type="password"
          name="password"
          className="form__inputs-item"
          onChange={handleChange}
          value={values.password || ''}
          placeholder="Пароль"
      
          maxLength="30"
          minLength="6"
          required
        />

          {/* <input
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 35,
              onChange: (e) => handlePasswordChange(e),
            })}
            type="password"
            className="form__inputs-item"
            placeholder="Пароль"
            value={password || ''}
          /> */}

<span className="form__inputs-error">
{errors.password || ''}
            </span>

          {/* {errors.password && errors.password.type === 'required' && (
            <span className="form__inputs-error">
              Без пароля не получится, сорри
            </span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className="form__inputs-error">
              Безопасный пароль включает не менее 6 символов
            </span>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <span className="form__inputs-error">Слишком длинный пароль</span>
          )} */}


        </label>
      </fieldset>
      <div className="form__bottom">
        <button
          type="submit"
          className={`button__sumbit  hover
          
          ${!isValid && 'button__sumbit_disable'}

          
         `}

          disabled={!isValid}
        >
          {buttonText}
        </button>
        <div className="form__bottom-signin">
          <p className="form__bottom-text">{bottomText}</p>
          {nameForm === 'signup' && (
            <Link to="/sign-in" className="form__bottom-link hover">
              {linkText}
            </Link>
          )}
          {nameForm === 'signin' && (
            <Link to="/sign-up" className="form__bottom-link hover">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </form>

    <Route exact path="/profile">
      <form className="form">
        <div className="form-top">
          <p className="form__title">{title}</p>
        </div>
      </form>
    </Route>
  </div>


    //__________________________________________________________

//     <div className="form__container">

//       <form className="form">

//         <div className="form-top">
//           <Link to="/">
//             <img className="header__logo" src={logo} alt="логотип" />
//           </Link>
//           <p className="form__title">{title}</p>
//         </div>

//         <fieldset className="form__inputs-register">

//         {nameForm === 'signup' && (
//           <label className="form__label">
//             <span className="form__label_title">Имя</span>
//             <input
//               type="name"
//               className="form__inputs-item"
//               placeholder="Имя"
//             ></input>
//           </label>
//  )}
//           <label className="form__label">
//             <span className="form__label_title">E-mail</span>
//             <input
//               type="email"
//               className="form__inputs-item"
//               placeholder="E-mail"
//             />

//             <span className="form__inputs-error">
//               Добавьте, пожалуйста, ваш E-mail
//             </span>
//           </label>

//           <label className="form__label">
//             <span className="form__label_title">Пароль</span>
//             <input
//               type="password"
//               className="form__inputs-item"
//               placeholder="Пароль"
//             />
//           </label>
//         </fieldset>


//         <div className="form__bottom">
//           <button type="submit" className={`button__sumbit`}>
//             {buttonText}
//           </button>
//           <div className="form__bottom-signin">
//             <p className="form__bottom-text">{bottomText}</p>
//             {nameForm === "signup" && (
//               <Link to="/signin" className="form__bottom-link hover">
//                 {linkText}
//               </Link>
//             )}
//             {nameForm === "signin" && (
//               <Link to="/signup" className="form__bottom-link hover">
//                 {linkText}
//               </Link>
//             )}
//           </div>
//         </div>


//       </form>

//     </div>
  );
}

export default Form;
