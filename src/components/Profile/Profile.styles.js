import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProfileContainer = styled.div`
  background-color: #e9ebee;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
`;

export const LeftProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  margin: 0 auto;
`;

export const ProfilePhoto = styled.img`
  width: 100%;
  max-width: 180px;
  max-height: 180px;
  border: 5px solid #fff;
  border-radius: 50%;
  background-color: grey;
  margin-bottom: 22px;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const ProfileName = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 20px;
  line-height: 24px;
  
  padding-left: 6px;
  margin-bottom: 12px;
`;

export const ProfileNickName = styled.p`
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: #90949c;
  padding-left: 3px;
`;

export const ProfileNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const ProfileNavLink = styled(NavLink)`
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #1e2229;
  text-decoration: none;
  padding: 8px 90px 8px 8px;
  margin-bottom: 2px;
    
  &.active {
    font-weight: bold;
    border: 1px solid #dddfe2;
    background-color: #fff;
  }
`;

export const RightProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileBackgroundImage = styled.img`
  max-width: 1090px;
  width: 100%;
  height: 100%;
  max-height: 312px;
  background: linear-gradient(90deg, rgba(130,130,135,1) 31%, rgba(2,0,36,1) 62%);
`;
