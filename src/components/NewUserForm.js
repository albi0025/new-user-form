import React from 'react';
import FormField from './FormField';

class NewUserForm extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div><h1>Error!</h1></div>
        <form>
          <FormField />
          <FormField />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUserForm;
