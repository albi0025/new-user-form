import React from 'react';

class FormField extends React.Component {

  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type="text" id={this.props.id} name={this.props.id} />
        <p>validation</p>
      </div>
    );
  }
}

FormField.propTypes = {
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired
};

export default FormField;
