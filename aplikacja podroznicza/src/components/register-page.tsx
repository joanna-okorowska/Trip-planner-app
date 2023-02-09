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

export function Register() {
  return (
    <div>
      <Global />
      <Container>
        <Logintxt>Sign Up To TripTastic:</Logintxt>
        <form>
          <Name>e-mail:</Name>
          <br />
          <Field></Field>
          <br />
          <Name>password:</Name>
          <br />
          <Field type={"password"}></Field>
          <br />
          <Button type="submit" value="Sign Up"></Button>
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
