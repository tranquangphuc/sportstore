import React, { Component } from 'react';
import { ValidationError } from './ValidationError';
import { GetMessages } from './ValidationMessages';

export class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
    this.formInputs = {};
  }

  handleSubmit = () => {
    this.setState(
      state => {
        const neoState = { ...state, validationErrors: {} };
        Object.values(this.formInputs).forEach(input => {
          if (!input.checkValidity()) {
            neoState.validationErrors[input.name] = GetMessages(input);
          }
        });
        return neoState;
      },
      () => {
        if (Object.keys(this.state.validationErrors).length === 0) {
          const data = Object.assign(
            ...Object.entries(this.formInputs).map(e => ({
              [e[0]]: e[1].value
            }))
          );
          this.props.submitCallback(data);
        }
      }
    );
  };

  registerRef = input => {
    if (input) {
      this.formInputs[input.name] = input;
    }
  };

  renderInput = modelItem => {
    const name = modelItem.name || modelItem.label.toLowerCase();
    return (
      <div className="form-group" key={modelItem.label}>
        <label>{modelItem.label}</label>
        <ValidationError errors={this.state.validationErrors[name]} />
        <input
          className="form-control"
          name={name}
          ref={this.registerRef}
          {...this.props.defaultAttrs}
          {...modelItem.attrs}
        />
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.props.formModel.map(m => this.renderInput(m))}
        <div className="text-center">
          <button
            className="btn btn-secondary m-1"
            onClick={this.props.cancelCallback}
          >
            {this.props.cancelLabel || 'Cancel'}
          </button>
          <button className="btn btn-primary m-1" onClick={this.handleSubmit}>
            {this.props.submitLabel || 'Submit'}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
