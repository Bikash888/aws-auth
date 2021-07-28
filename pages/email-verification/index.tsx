import {Form,Input,Button,notification} from 'antd'
import {Auth} from 'aws-amplify';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {useRouter} from 'next/router'

interface ICode{
  code?: number;
}

const EmailVerification = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<ICode>();
  const router = useRouter();
  const [isEmailResent,setIsEmailResent]=useState(false)
  const handleAuthVerificationCode = async (data) => {
    try {
      await Auth.confirmSignUp(router.query.email.toString(), data.code);
      router.push('/dashboard')
    } catch (err) {
      console.log("err->", err);
      notification.error({
        message:err?.message || "Something went wrong"
      })
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
      <Button onClick={async() => {
        try {
          await Auth.resendSignUp(router.query.email.toString());
          setIsEmailResent(true);
        } catch (error) {
          
          console.log("resend error",error)
        }
       
      }} type='dashed'>Resend </Button>
      {
        isEmailResent && <p>Mail sent, please check your mail</p>
      }
    </div>
  )
}

export default EmailVerification
