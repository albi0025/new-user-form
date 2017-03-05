import React from 'react';
import FormField from './FormField';

class NewUserForm extends React.Component {

  // constructor() {
  //   super();
  // }

  userNameValidation(e) {
    var str = e.target.value
    var splitByAt = str.split("@");
    if(splitByAt.length !== 2) {
      console.log("invalid")
      return false;
    }
    var splitByPeriod = splitByAt[1].split(".");
    if(splitByPeriod.length !== 2 ) {
      console.log("invalid")
      return false;
    }
    console.log("valid")
    return true;
  }

  render() {
    return (
      <div>
        <div><h1>Error!</h1></div>
        <form>
          <FormField validation={this.userNameValidation} id="username" label="Username:"/>
          <FormField id="password" label="Password:"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUserForm;
