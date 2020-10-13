import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  background: #f0f2f5;
`;

export const LoginPageWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const LoginPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginPageTitle = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 50px;
  line-height: 54px;
  color: #1877f2;
`;

export const LoginPageText = styled.p`
  
  font-family: Arial, sans-serif;
  font-size: 24px;
  line-height: 28px;
`;

export const LoginPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 24px;
  width: 100%;
  max-width: 396px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, .1),
    0 8px 16px rgba(0, 0, 0, .1);
`;

export const LoginPageInput = styled.input`
  padding: 14px 16px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 364px;
  font-family: Arial, sans-serif;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  color: #1d2129;
  
`;

export const LoginPageSubmitButton = styled.button`
  margin-bottom: 16px;  
  padding: 12px 16px;
  width: 100%;
  max-width: 364px;
  font-family: Arial, sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  
  cursor: pointer;
`;

export const LoginPageLink = styled.a`
  position: relative;
  margin-bottom: 46px;
  font-family: Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #1877f2;
  cursor: pointer;
  
  &::before {
    position: absolute;
    top: 38px;
    left: 50%;
    content: '';
    transform: translateX(-50%);
    height: 1px;
    width: 364px;
    background: #dadde1;
  }
`;

export const LoginPageNewAccountButton = styled.button`
  padding: 16px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  background: #42b72a;
  color: #fff;
  border-radius: 6px;
`;
