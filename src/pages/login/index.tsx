import React from 'react';
import useForm from 'hooks/useForm';
import axios from "axios";
import { URL } from 'config/utils';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { LoginWrapper } from './styled';
import { Button, Form, Input } from 'antd';



const Login: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (form.getFieldsValue()) {
      try {
        const res = await axios.post(`${URL}/login`, JSON.stringify(form.getFieldsValue()), {
          headers: {
            // "Access-Control-Allow-Origin": "*"
          }
        });
        if (res.data?.status === 1) {
          form.resetFields();
          console.log("Created user");
        }
      } catch (arr) {
        console.log(arr);
      }
    } else {
      console.log("Please fill inpul");
    }
  }

  console.log("login");
  return (
    <LoginWrapper >
      <div className="login-card e-card-shadow" >
        <h2>Sign in</h2>
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
          <Button type="primary" block htmlType="submit">{"Submit"}</Button>
          <p className='mt-5 text-center' >Already signed up? <Link className='text-blue-600' to="/register">Go to sign up</Link>.</p>
        </Form>
      </div>
    </LoginWrapper>
  )
}
export default Login