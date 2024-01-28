import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return <div>User Profile Page for User ID: {userId}</div>;
};

export default UserProfile;
