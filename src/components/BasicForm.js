import {useRef} from "react";
import useInput from "./hooks/use-input";

const isNotEmpty=value=>value.trim()!=='';
const isEmail=value=>/^\S+@\S+\.\S+$/.test(value);


const BasicForm = (props) => {

  const{
    value:firstNameValue,
    isValid:firstNameIsValid,
    hasError:firstNameHasError,
  valueChangeHandler:firstNameChangeHandler,
  inputBlurHandler:firstNameBlurHandler,
  reset:resetFirstName
  }=useInput(isNotEmpty);

  const{
    value:lastNameValue,
    isValid:lastNameIsValid,
    hasError:lastNameHasError,
  valueChangeHandler:lastNameChangeHandler,
  inputBlurHandler:lastNameBlurHandler,
  reset:resetLastName
  }=useInput(isNotEmpty);

  const{
    value:emailValue,
    isValid:emailIsValid,
    hasError:emailHasError,
  valueChangeHandler:emailChangeHandler,
  inputBlurHandler:emailBlurHandler,
  reset:resetEmail
  }=useInput(isEmail);

  
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();


 
  
 
 
  let formIsValid=false;

  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid=true;
  }


  const submitHandler = (e) => {
    e.preventDefault();
    //extra check makes sense because the button could be enabled from the dev tools.
    if(!formIsValid){
      return;
    }
   console.log('submitted!')
   console.log(firstNameValue,lastNameValue,emailValue)
   resetFirstName();
   resetLastName();
   resetEmail();
  };

 const firstNameClasses=firstNameHasError?'form-control invalid':'form-control';
 const lastNameClasses=lastNameHasError?'form-control invalid':'form-control';
 const emailClasses=emailHasError?'form-control invalid':'form-control';






  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={
           firstNameClasses
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            ref={firstNameInput}
            hasError={firstNameHasError}
            value={firstNameValue}
            onBlur={firstNameBlurHandler}
          />
          <p className="error-text">{firstNameHasError?'Please enter a first name.':''}</p>
        </div>
        <div
          className={
           lastNameClasses
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            ref={lastNameInput}
            value={lastNameValue}
            onBlur={lastNameBlurHandler}
          />
           <p className="error-text">{lastNameHasError?'Please enter a last name':''}</p>
        </div>
      </div>
      <div
          className={
            emailClasses
          }
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          ref={emailInput}
          onChange={emailChangeHandler}
          value={emailValue}
          onBlur={emailBlurHandler}
          className={
            emailIsValid  ? "form-control input" : "form-control input invalid"
          }
        />
        <p className="error-text">{emailHasError?'Email is Invalid, Please Provide a valid Email.':''}</p>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
