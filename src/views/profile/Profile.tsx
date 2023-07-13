import { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import Preview from './components/Preview';
import bgImage from 'asets/images/profile/background/ondes-sonores-1024x576.jpg';
import userImage from 'asets/images/profile/users/default.png';
import PopupEditProfile from './components/PopupEditProfile';

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (displayName: string, photoURL: string) => {
    if(!user) return;
    setIsLoading(true);
    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => setPopupIsOpen(false))
      // eslint-disable-next-line no-console
      .catch((error) => console.error)
      .finally(() => setIsLoading(false));
  };


  return (
    <div>
      <Preview
        name={user?.displayName || 'Full Name'}
        image={user?.photoURL || userImage}
        bgImage={bgImage}
        handleEditProfile={() => setPopupIsOpen(true)}
        description={user?.email || ''}
      />
      <PopupEditProfile
        isOpen={popupIsOpen}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleClose={() => setPopupIsOpen(false)}
        avatar={user?.photoURL || userImage}
        name={user?.displayName || 'Full Name'}
      />
    </div>
  );
};

export default Profile;