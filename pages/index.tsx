
import { Auth } from 'aws-amplify';
import { Button, Form, Input } from 'antd';
import { SubmitHandler, Controller, useForm } from 'react-hook-form'

interface LoginProps{
  email?: string;
  password?: string;
}

export default function Home() {
  const { control, handleSubmit } = useForm<LoginProps>();
  

  const handleSignup = async() => {
    try {
      const { user } = await Auth.signUp({
        username:'bikashdulal150@gmail.com',
        password:"Asd@123456",
       
    });
    console.log(user);
    } catch (err) {
      console.log("---->",err)
    
    }
  }
  return (
    <>
      <Form layout='vertical' style={{maxWidth:'30%',margin:"0 auto",marginTop:"40px"}}>
        <Form.Item label="Email Address">
          <Controller
            name="email"
             control={control}
            render={({ field }) => <Input size="large" {...field}/>}
          />
        
        </Form.Item>
        <Form.Item label="Email Address">
          <Controller
            name="password"
             control={control}
            render={({ field }) => <Input.Password size="large" {...field}/>}
          />
        
        </Form.Item>
        <Form.Item>

          <Button type='ghost'>Register</Button>
        </Form.Item>
       
        

      </Form>
      
     
    </>
  )
}
