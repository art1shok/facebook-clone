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
  ProfileNavLink,
} from './Profile.styles';

import profile from '../../assets/images/profile.svg';

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
          <ProfileNavLink>
            Home
          </ProfileNavLink>

        </ProfileNav>
      </LeftProfileSection>
    </ProfileWrapper>
  </ProfileContainer>
);

export default Profile;
