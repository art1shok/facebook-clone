import styled from 'styled-components';

export const HeaderBackground = styled.header`
 background-color: #4468b0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 24px;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  max-height: 24px;
  max-width: 24px;
`;

export const HeaderSearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  margin-right: 20px;
`;

export const HeaderSearchField = styled.input`
  width: 100%;
  max-width: 400px;
  margin-left: 8px;
  padding: 5px 25px 5px 7px;
  font-family: Arial, sans-serif;
  font-size: 10px;
  line-height: 12px;
  color: #1e2229;
  ::-webkit-input-placeholder {color:#1e2229;}
  ::-moz-placeholder          {color:#1e2229;}
  :-moz-placeholder           {color:#1e2229;}
  :-ms-input-placeholder      {color:#1e2229;}
`;

export const HeaderSearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  width: 100%;
  max-width: 14px;
  max-height: 14px;
  transform: translateY(-50%);
`;

export const HeaderRightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const HeaderProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderProfileImage = styled.img`
  width: 100%;
  max-width: 24px;
  max-height: 24px;
  border-radius: 50%;
  background-color: grey;
  margin-right: 7px;
`;

export const HeaderProfileName = styled.a`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  padding-right: 11px;
  margin-right: 11px;
  border-right: 2px solid #3d5d9e;
  cursor: pointer;
`;

export const HeaderHomePageLink = styled.a`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  margin-right: 12px;
  padding-right: 21px;
  border-right: 2px solid #3d5d9e;
  cursor: pointer;
`;

export const HeaderImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const HeaderFriendsLogo = styled.img`
  width: 100%;
  max-width: 23px;
  max-height: 18px;
  margin-right: 12px;
`;

export const HeaderMessengerLogo = styled.img`
  width: 100%;
  max-width: 20px;
  max-height: 20px;
  margin-right: 12px;
`;

export const HeaderNotificationsLogo = styled.img`
  width: 100%;
  max-width: 19px;
  max-height: 20px;
`;

export const HeaderHelpWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderHelpLogo = styled.img`
  width: 100%;
  max-width: 19px;
  max-height: 23px;
  margin-right: 16px;
`;

export const HeaderArrowLogo = styled.img`
  width: 100%;
  max-width: 10px;
  max-height: 6px;
`;
