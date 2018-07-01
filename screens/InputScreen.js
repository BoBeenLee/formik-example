
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;

const Text = styled.Text``;

class InputScreen extends React.Component {
  render() {
    return (<Container><Text>Hello</Text></Container>);
  }
}

const WithForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    setSubmitting(false);
    try {
      props.successCallback && props.successCallback();
    } catch (errors) {
      setErrors(transformMyApiErrors(errors));
    }

  },
})(InputScreen);



export default WithForm;
