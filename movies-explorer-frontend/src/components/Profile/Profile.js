import React,  { useContext, useEffect } from "react";
import "./Profile.css";
// import Header from "../Header/Header";
import "../Form/Form.css";
import '../../vendor/hover.css';
import  CurrentUserContext  from '../../contexts/CurrentUserContext';

function Profile() {
  const { user: currentUser, updateUser } = useContext(CurrentUserContext);
  const [isEditData, setIsEditData] = React.useState(false); 
  const [errorEdit, setErrorEdit] = React.useState(false); 
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [errorName, setErrorName] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState('');
  const [isActiveEdit, setIsActiveEdit] = React.useState(false);

  useEffect(() => {
    if (currentUser.name !== name || currentUser.email !== email) {
      setIsEditData(false);
    } else {
      setIsActiveEdit(false);
    }
  }, [currentUser, name, email]);


  // useEffect(() => {
  //   setName(currentUser.name);
  //   setEmail(currentUser.email);
  // }, [currentUser]);

  
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    
    if (name !== currentUser.name || email !== currentUser.email) {
      setIsActiveEdit(true);
      
      updateUser({ name, email }); 
    } else {
      setIsActiveEdit(false); 
    }
  };

  function handleNameChange(event) {
    setIsActiveEdit(true);
    setIsEditData(false);
    setName(event.target.value);
    const input = event.target;
    setName(input.value);
    setIsValidName(input.validity.valid);
    if (!isValidName) {
      setErrorName(input.validationMessage);
    } else {
      setErrorName('');
    }
  }

  function handleEmailChange(event) {
    setIsActiveEdit(true);
    setEmail(event.target.value);
    const input = event.target;
    setEmail(input.value);
    setIsValidEmail(input.validity.valid);
    if (!isValidEmail) {
      setErrorEmail(input.validationMessage);
    } else {
      setErrorEmail('');
    }
  }

  return (
    <section className="profile">
      

      <div className="profile__content">
        <p className="form-profile__title">{`Привет, ${currentUser.name}!`}</p>

        <form
          id="profile"
          className="form-profile"
          onSubmit={handleSubmitProfile}
          noValidate
        >
          <fieldset className="form__inputs-register">
            <label className="form__label form__label_profile">
              <span className="form__label_title form__label_title_profile">
                Имя
              </span>
              <input
                type="name"
                className="form__inputs-item form__inputs-item_profile"
                minLength={2}
                maxLength={35}
                placeholder="Имя"
                id="name"
                value={name || ''}
                onChange={handleNameChange}
                required
              ></input>
              <span className="form__inputs-error form__inputs-error_profile">
                {errorName}
              </span>
            </label>

            <label className="form__label form__label_profile">
              <span className="form__label_title form__label_title_profile">
                E-mail
              </span>
              <input
                type="email"
                className="form__inputs-item_profile form__inputs-item_profile_last"
                placeholder="E-mail"
                required
                value={email || ''}
                onChange={handleEmailChange}
              />
              <span className="form__inputs-error form__inputs-error_profile ">
                {errorEmail}
              </span>
            </label>
          </fieldset>
        </form>

        <div className="profile__links">
          {errorEdit && (
            <span className="profile__links-item profile__edit-message">
              Ошибка , что то не так
            </span>
          )}
          {isEditData && (
            <span className="profile__links-item profile__edit-message">
              Успешно сохранено
            </span>
          )}

          <button
            type="submit"
            form="profile"
            disabled={!isActiveEdit}
            className={`profile__links-item ${isActiveEdit && 'hover'}`}
          >
            Редактировать
          </button>
          <button
            className="profile__links-item profile__links-item_signout hover"
          
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;




  // _______________________________________________________________

//   return (
//     <div className="profile">
//       {/* <Header /> */}

//       <div className="profile__content">
//         <p className="form-profile__title">Привет, Medved !</p>

//         <form id="profile" className="form-profile">
//           <fieldset className="form__inputs-register">
//             <label className="form__label form__label_profile">
//               <span className="form__label_title form__label_title_profile">
//                 Имя
//               </span>
//               <input
//                 type="name"
//                 className="form__inputs-item form__inputs-item_profile"
//                 minLength={2}
//                 maxLength={35}
//                 placeholder="Имя"
//                 id="name"
//                 required
//               ></input>
//               <span className="form__inputs-error form__inputs-error_profile"></span>
//             </label>

//             <label className="form__label form__label_profile">
//               <span className="form__label_title form__label_title_profile">
//                 E-mail
//               </span>
//               <input
//                 type="email"
//                 className="form__inputs-item_profile form__inputs-item_profile_last"
//                 placeholder="E-mail"
//                 required
//               />
//               <span className="form__inputs-error form__inputs-error_profile "></span>
//             </label>
//           </fieldset>
//         </form>

//         <div className="profile__links">
//           <span className="profile__links-item profile__edit-message"></span>

//           <span className="profile__links-item profile__edit-message"></span>

//           <button type="submit" form="profile" className="profile__links-item">
//             Редактировать
//           </button>
//           <button className="profile__links-item profile__links-item_signout hover">
//             Выйти из аккаунта
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
