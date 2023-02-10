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
import { auth } from "../firebase-config";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export function Login(): JSX.Element {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("user is logged");
    } catch (error) {
      console.log("Error occured during login");
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Global />
      <Container>
        <Logintxt>Sign In To TripTastic:</Logintxt>
        <form onSubmit={login}>
          <Name>e-mail:</Name>
          <br />
          <Field
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <br />
          <Name>password:</Name>
          <br />
          <Field
            type={"password"}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}></Field>
          <br />
          <Button type="submit" value="Sign In" />
        </form>
        <Separator>
          <Line></Line>
          <Septxt>You Can Also:</Septxt>
          <Line></Line>
        </Separator>
        <Google>
          <Gglimg src="src/assets/Google.png"></Gglimg>
          <Txt>Sign In With Google</Txt>
        </Google>
        <Facebook>
          <Fbimg src="src/assets/Facebook.png"></Fbimg>Sign In With Facebook
        </Facebook>
      </Container>
    </div>
  );
}
