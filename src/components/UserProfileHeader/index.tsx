import React from 'react';
import { ProfileHeader, UserProfile } from './style';
import gabriel from '../../assets/img/gabriel.svg';
interface UserProfileHeaderProps {
  name: string;
  status: string;
  buttonContent: string;
  imageUser?: string;
  handleButton?: () => void;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  name,
  status,
  buttonContent,
  handleButton,
  imageUser
}) => {

  return (
    <ProfileHeader>
      <UserProfile>
        <img src={gabriel} alt="" />
        <h2>{name}</h2>
        <p>{status}</p>
      </UserProfile>
      <button onClick={handleButton}>{buttonContent}</button>
    </ProfileHeader>
  );
};

export default UserProfileHeader;
