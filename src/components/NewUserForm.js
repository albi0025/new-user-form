import React from 'react';
import FormField from './FormField';

class NewUserForm extends React.Component {

  // Return true or false based on whether or not the
  // target elements value is a valid email address. Valid email requires
  // an @ character and a period. The period must follow the @ symbol and
  // the neither the period or the @ can be the first or last character.
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

  render() {
    return (
      <div>
        <div><h1>Error!</h1></div>
        <form>
          <FormField validation={this.userNameValidation}
                     id="username" label="Username:"/>
          <FormField id="password" label="Password:"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUserForm;
