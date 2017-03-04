import React from 'react';

class FormField extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label htmlFor="username">User Name:</label>
        <input type="text" id="username" name="username" />
        <p>validation</p>
      </div>
    );
  }
}


export default FormField;
