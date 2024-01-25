import { Button, Form, Input } from 'antd';
import { LoginWrapper } from 'pages/login/styled';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();

  return (
    <LoginWrapper >
      <div className="login-card e-card-shadow" >
        <h2>Sign up</h2>
        <Form
          form={form}
          layout="vertical"
        // onFinish={(values) => mutate(values)}
        >
          <Form.Item name="username" label="Username" rules={[{ required: true, message: `Please input username!`}]} >
            <Input placeholder='Enter your username' />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: `Please input username!`}]} >
            <Input.Password placeholder='Enter your password' />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: `Please input username!`}]} >
            <Input.Password placeholder='Repeate your password' />
          </Form.Item>
          <Button type="primary" block htmlType="submit">{"Submit"}</Button>
          <p className='mt-5 text-center' >Already signed up? <Link className='text-blue-600' to="/login">Go to sign in</Link>.</p>
        </Form>
      </div>
    </LoginWrapper>
  );
};

export default Register;