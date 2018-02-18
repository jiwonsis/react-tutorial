import React from 'react';
import { Label, Form, Button, Input } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    // loading: false,
    errors: {},
  };

  onChange = event => this.setState({
    data: { ...this.state.data, [event.target.name]: event.target.value }
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = '비밀번호를 입력해주세요';
    if (!data.email) errors.email = '이메일을 입력해주세요';
    else if (!Validator.isEmail(data.email)) errors.email = '잘못된 형식의 이메일입니다';
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password} >
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field >
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;