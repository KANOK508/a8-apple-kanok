"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const handelLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: '/profile',
      },
      
    );
    
    if (data) {
  toast.success("Welcome back! Login successful.");
} else {
  toast.error("Login failed. Please check your credentials and try again.");
}

  };

  const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: '/profile'
  });
   if (data) {
  toast.success("🎉 Welcome back! Login successful.");
} else {
  toast.error("Login failed. Please check your credentials and try again.");
}
  console.log(data)
};

  return (
    <div className="pt-20">
      <div className="border p-8 w-fit py-5 rounded-2xl my-20 mx-auto">
      <Form
        onSubmit={handelLogin}
        className="flex w-90 flex-col gap-4 "
        render={(props) => <form {...props} data-custom="foo" />}
      >
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
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2 justify-center">
          <Button type="submit" className={"w-full"}>
            Login
          </Button>
        </div>
      </Form>
      <div className="border-t mt-5 text-center pt-5">
        <Button onClick={signIn} variant="outline">
          <FaGoogle></FaGoogle> Login With Google{" "}
        </Button>
      </div>
      <div className="text-center py-5">
        <Link
          href={"/register"}
          className="text-[19px] border-b-2 border-black/70"
        >
          Registation
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
