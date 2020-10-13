import React from 'react';
import {
  LeftProfileSection,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileName,
  ProfilePhoto,
  ProfileNickName,
  ProfileWrapper,
  ProfileNav,
  ProfileNavLink, RightProfileSection, ProfileBackgroundImage,
} from './Profile.styles';

import profile from '../../assets/images/profile.svg';
import backgroundProfileImage from '../../assets/images/profile.svg';

const Profile = () => (
  <ProfileContainer>
    <ProfileWrapper>
      <LeftProfileSection>
        <ProfilePhoto src={profile} />
        <ProfileInfoContainer>
          <ProfileName>Name</ProfileName>
          <ProfileNickName>@UserName</ProfileNickName>
        </ProfileInfoContainer>
        <ProfileNav>
          <ProfileNavLink to="/facebook-clone/profile">
            Home
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/friends">
            Friends
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/about">
            About
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/photos">
            Photos
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/reviews">
            Reviews
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/events">
            Events
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/posts">
            Posts
          </ProfileNavLink>
          <ProfileNavLink to="/facebook-clone/community">
            Community
          </ProfileNavLink>
        </ProfileNav>
      </LeftProfileSection>
      <RightProfileSection>
        <ProfileBackgroundImage />
        <ProfileInfoContainer>
          <ProfileName>Name</ProfileName>
          <ProfileNickName>@UserName</ProfileNickName>
        </ProfileInfoContainer>
      </RightProfileSection>
    </ProfileWrapper>
  </ProfileContainer>
);

export default Profile;
