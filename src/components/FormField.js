import React from 'react';

class FormField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    let validationResult = this.props.validation(e);
    this.setState({ valid: validationResult });
    this.toggleErrorTextVisibility();
  }

  toggleErrorTextVisibility() {
    let errorTextElement = document.getElementById(this.props.id + "-error-text");
    if(this.state.valid) {
      errorTextElement.style.visibility = "hidden";
    } else {
      errorTextElement.style.visibility = "visible";
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label><br/>
        <input onChange={this.handleValueChange} type="text"
               id={this.props.id} name={this.props.id} />
        <p id={this.props.id + "-error-text"}>{this.props.errorText}</p>
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
