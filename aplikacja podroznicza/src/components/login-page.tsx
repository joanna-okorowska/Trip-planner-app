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
} from "./login-and-register-page-styled";

export function Login() {
  return (
    <div>
      <Global />
      <Container>
        <Logintxt>Sign In To TripTastic:</Logintxt>
        <form>
          <Name>e-mail:</Name>
          <br />
          <Field></Field>
          <br />
          <Name>password:</Name>
          <br />
          <Field type={"password"}></Field>
          <br />
          <Button type="submit" value="Sign In"></Button>
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
