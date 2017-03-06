import React from 'react';
import FormField from './FormField';

class NewUserForm extends React.Component {

  constructor() {
    super();
    this.passwordErrorText = "Password must contain at least 8 characters";
    this.usernameErrorText = "Username must be a valid email address";
    this.verifyErrorText = "Password does not match";
  }
  // Return true or false based on whether or not the
  // target element's value is a valid email address. Valid email requires
  // an @ character and a period. The period must follow the @ symbol and
  // neither the period or the @ can be the first or last character.
  userNameValidation(e) {
    let str = e.target.value;
    let splitByAt = str.split("@");
    if(splitByAt.length !== 2) {
      return false;
    }
    let splitByPeriod = splitByAt[1].split(".");
    if(splitByPeriod.length !== 2 ) {
      return false;
    }
    return true;
  }

  // Return true or false based on whether or not the target element's value
  // is a valid password. A valid password is at least 8 characters long.

  passwordValidation(e) {
    let password = e.target.value.length;
    if(password < 8) {
      return false;
    }
    return true;
  }

  // Return true or false base on whether or not the first password input
  // matches the second password input.
  passwordMatch(e) {
    let password1 = document.getElementById('password').value;
    let password2 = e.target.value;
    if(password2 === password1) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="container jumbotron">
        <form>
          <FormField errorText={this.usernameErrorText}
                     validation={this.userNameValidation}
                     id="username" label="Username:"/>
          <FormField errorText={this.passwordErrorText}
                     validation={this.passwordValidation}
                     id="password" label="Password:"/>
         <FormField id="verifyPassword" label="Verify Password:"
                     errorText={this.verifyErrorText}
                     validation={this.passwordMatch}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUserForm;
