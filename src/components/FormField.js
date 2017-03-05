import React from 'react';

class FormField extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label><br/>
        <input onChange={this.props.validation} type="text"
               id={this.props.id} name={this.props.id} />
        <p>{this.props.errorText}</p>
      </div>
    );
  }
}

FormField.propTypes = {
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  validation: React.PropTypes.func,
  errorText: React.PropTypes.string
};

export default FormField;
