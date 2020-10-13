import React from 'react';
import {
  LoginPageContainer,
  LoginPageFormContainer,
  LoginPageInput,
  LoginPageLink,
  LoginPageNewAccountButton,
  LoginPageSubmitButton,
  LoginPageText,
  LoginPageTextContainer,
  LoginPageTitle,
  LoginPageWrapper,
} from './LoginPage.styles';

const LoginPage = () => (
  <LoginPageContainer>
    <LoginPageWrapper>
      <LoginPageTextContainer>
        <LoginPageTitle>facebook</LoginPageTitle>
        <LoginPageText>
          Connect with friends and the world around you on Facebook.
        </LoginPageText>
      </LoginPageTextContainer>
      <LoginPageFormContainer>
        <LoginPageInput type="input" placeholder="Email or Phone Number" />
        <LoginPageInput type="input" placeholder="Password" />

        <LoginPageSubmitButton>Log In</LoginPageSubmitButton>
        <LoginPageLink>Forgot password?</LoginPageLink>
        <LoginPageNewAccountButton>
          Create New Account
        </LoginPageNewAccountButton>
      </LoginPageFormContainer>
    </LoginPageWrapper>
  </LoginPageContainer>
);

export default LoginPage;
