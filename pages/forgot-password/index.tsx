import {Form,Input,Button, notification} from 'antd'
import { Auth } from 'aws-amplify'
import React, { useState } from 'react'

const ForgotPassword = () => {
  const [email,setEmail]=useState('')
  return (
    <div style={{ maxWidth: 400,margin:'0 auto',marginTop:40}}>
      <Form layout='vertical'>
        <Form.Item label="Email Address">
          <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
        </Form.Item>
        <Form.Item>
          <Button onClick={async() => {
            try {
              if (email) {
               await Auth.forgotPassword(email)
              } else {
                notification.error({message:"Email shouldn't be empty"})
              }
            } catch (error) {
              notification.error({message:error.message})
            }
            }} type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ForgotPassword
