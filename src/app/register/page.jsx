"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";



const page = () => {

  const handelRegistation = async(e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;
    
    const { data, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photourl,
    
});

    console.log(data, error)
    if (data) {
  toast.success("🎉 Registration successful! Welcome aboard.");
} else {
  toast.error("Registration failed. Please try again.");
}

  }
  
  return (

        <Form onSubmit={handelRegistation}
          className="flex w-99 flex-col gap-4 p-8 border border-black/30 mx-auto mt-30 rounded-2xl"
          render={(props) => <form {...props} data-custom="foo" />}
          
        >

            <TextField
            isRequired
            name="name"
            type="text"
            
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>


          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

           <TextField
            isRequired
            name="photourl"
            type="text"
            
          >
            <Label>Photo-url(link)</Label>
            <Input placeholder="Enter Your Photo" />
            <FieldError />
          </TextField>


          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 justify-center">
            <Button type="submit" className={'w-full'}>
              Registation
            </Button>
            
          </div>
        </Form>
        
  )
}

export default page