import React from 'react';
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderSearchField,
  HeaderRightSection,
  HeaderProfileImage,
  HeaderSearchIcon,
  HeaderProfileName,
  HeaderProfileWrapper,
  HeaderSearchContainer,
  HeaderHomePageLink,
  HeaderImagesWrapper,
  HeaderFriendsLogo,
  HeaderMessengerLogo,
  HeaderNotificationsLogo,
  HeaderHelpWrapper,
  HeaderArrowLogo,
  HeaderHelpLogo,
  HeaderBackground,
} from './Header.styles';
import logo from '../../assets/images/logo.png';
import search from '../../assets/images/searchIcon.png';
import profile from '../../assets/images/profile.svg';
import friends from '../../assets/images/friends.png';
import messenger from '../../assets/images/messenger.png';
import notifications from '../../assets/images/notifications.png';
import help from '../../assets/images/help.png';
import arrow from '../../assets/images/arrow-down.png';

const Header = () => (
  <HeaderBackground>
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo src={logo} alt="logo" />
      </HeaderLogoContainer>
      <HeaderSearchContainer>
        <HeaderSearchField
          name="search"
          type="text"
          placeholder="Facebook Page Clone"
        />
        <HeaderSearchIcon src={search} alt="search_icon" />
      </HeaderSearchContainer>
      <HeaderRightSection>
        <HeaderProfileWrapper>
          <HeaderProfileImage src={profile} alt="profile_icon" />
          <HeaderProfileName>Untitled</HeaderProfileName>
          <HeaderHomePageLink>Home</HeaderHomePageLink>
        </HeaderProfileWrapper>
        <HeaderImagesWrapper>
          <HeaderFriendsLogo src={friends} alt="friends" />
          <HeaderMessengerLogo src={messenger} alt="messenger" />
          <HeaderNotificationsLogo src={notifications} alt="notifications" />
        </HeaderImagesWrapper>

        <HeaderHelpWrapper>
          <HeaderHelpLogo src={help} />
          <HeaderArrowLogo src={arrow} />
        </HeaderHelpWrapper>
      </HeaderRightSection>
    </HeaderContainer>
  </HeaderBackground>
);

export default Header;
