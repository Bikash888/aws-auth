
import { Auth } from 'aws-amplify';
import { Button, Form, Input, notification } from 'antd';
import { SubmitHandler, Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import Link from 'next/link'
interface LoginProps{
  username?: string;
  password?: string;
}

export default function Home() {
  const { control, handleSubmit,formState: { errors } } = useForm<LoginProps>();
  const router = useRouter();

  const handleLogin = async (data) => {
    
    try {
       await Auth.signIn(
        data?.username,
        data?.password,
       
        
       )
      router.push({
        pathname: "/dashboard",})
      
    } catch (err) {
      notification.error({
        message: "Error Occured",
        description:err?.message,
      })
      
    
    }
  }
  console.log("error",errors)
  return (
    <>
      <Form onFinish={handleSubmit(handleLogin)} layout='vertical' style={{maxWidth:'30%',margin:"0 auto",marginTop:"40px"}}>
        <Form.Item label="Email Address">
          <Controller
            name="username"
            rules={{required:true}}
             control={control}
            render={({ field }) => <Input size="large" {...field}/>}
          />
          {
       errors.username && <span>Email is required</span>
        }
        
        </Form.Item>
        
        <Form.Item label="Password">
          <Controller
            name="password"
            rules={{
              required: true,
              minLength:8,
              
            }}
             control={control}
            render={({ field }) => <Input.Password size="large" {...field}/>}
          />
           {
       errors.password && <span>{errors?.password?.type==="minLength"?"Minimum length is 8":"password is required"}</span>
        }
        
        </Form.Item>
        <Form.Item>

          <Button htmlType="submit" size="large" type='ghost'>Login</Button>
        </Form.Item>
       
        {
          <Link href="/forgot-password"><a>Forgot password?</a></Link>
        }

      </Form>
      
     
    </>
  )
}
