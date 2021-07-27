import {Form,Input,Button} from 'antd'
import {Auth} from 'aws-amplify';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {useRouter} from 'next/router'

interface ICode{
  code?: number;
}

const EmailVerification = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<ICode>();
  const router = useRouter();
  console.log(router.query.email)
  const handleAuthVerificationCode = async (data) => {
    try {
      await Auth.confirmSignUp(router.query.email.toString(),data.code)
    } catch (err) {
      console.log("err->",err)
    }
   
  }

  return (
    <div style={{maxWidth:"300px",margin:"0 auto",marginTop:'50px'}}>
      <Form onFinish={handleSubmit(handleAuthVerificationCode)} layout="vertical">
        <strong style={{ color: "blue", paddingBottom: "20px" }}>Please Verify Your Email Address</strong>
        
        <Form.Item label="Verification Code">
          <Controller
            control={control}
            name="code"
            render={({ field }) => <Input type="number" size="large" {...field}/>}
          
          />
          {
            errors.code
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EmailVerification
