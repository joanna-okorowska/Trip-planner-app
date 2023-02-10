import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  Global,
  Container,
  Logintxt,
  Name,
  Field,
  Button,
  Separator,
  Line,
  Septxt,
  Google,
  Gglimg,
  Txt,
  Facebook,
  Fbimg,
} from "../Styles/login-and-register-page-styled";
import React, { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export function Register(): JSX.Element {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((response) => console.log(response.user.email))
      
   
  };
  return (
    <div>
      <Global />
      <Container>
        <Logintxt>Sign Up To TripTastic:</Logintxt>
        <form onSubmit={register}>
          <Name>e-mail:</Name>
          <br />
          <Field
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <br />
          <Name>password:</Name>
          <br />
          <Field
            type={"password"}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <br />
          <Button type="submit" value="Sign Up" />
        </form>
        <Separator>
          <Line></Line>
          <Septxt>You Can Also:</Septxt>
          <Line></Line>
        </Separator>
        <Google>
          <Gglimg src="src/assets/Google.png"></Gglimg>
          <Txt>Sign Up With Google</Txt>
        </Google>
        <Facebook>
          <Fbimg src="src/assets/Facebook.png"></Fbimg>Sign Up With Facebook
        </Facebook>
      </Container>
    </div>
  );
}
