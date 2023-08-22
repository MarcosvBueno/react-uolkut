import React from 'react';
import { ProfileHeader, UserProfile } from './style';

interface UserProfileHeaderProps {
  name: string;
  status: string;
  buttonContent: string;
  handleButton?: () => void;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  name,
  status,
  buttonContent,
  handleButton,
}) => {

  return (
    <ProfileHeader>
      <UserProfile>
        <img src='https://i.imgur.com/jguCgC7.png' alt="" />
        <h2>{name}</h2>
        <p>{status}</p>
      </UserProfile>
      <button onClick={handleButton}>{buttonContent}</button>
    </ProfileHeader>
  );
};

export default UserProfileHeader;
