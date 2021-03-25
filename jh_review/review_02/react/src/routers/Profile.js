import React from 'react';

// 프로필에서 사용 할 데이터
const profileData = {
  jikim: {
    name: 'ji hyung',
    description:
      'Student @ Boston College'
  },
  jisung: {
    name: 'ji sung',
    description: 'Student @ AOF'
  }
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div> User Not Exist </div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
