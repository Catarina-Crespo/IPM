import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonList, IonButton, IonIcon } from '@ionic/react';
import { mailOutline, locationOutline } from 'ionicons/icons'; // Import icons
import '../styles/Profile.css';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {

  const history = useHistory(); // useHistory hook for navigation

  const handleLogout = () => {
    history.push("/login");
    console.log("User logged out");
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="profile-header">
          <IonAvatar className="profile-avatar">
            <img src="src/img/profile.png" alt="Profile" />
          </IonAvatar>
          <h2>Username</h2>
          <p>Bio or description goes here...</p>
        </div>
        
        <IonList className='profile_list'>
          <IonItem className='profile_item'>
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel>Email</IonLabel>
            <IonLabel slot="end">user@example.com</IonLabel>
          </IonItem>
          <IonItem className='profile_item'>
            <IonIcon icon={locationOutline} slot="start" />
            <IonLabel>Location</IonLabel>
            <IonLabel slot="end">City, Country</IonLabel>
          </IonItem>
        </IonList>
        
        <IonButton expand="block" color="primary" className='primBtn'>
          Edit Profile
        </IonButton>
        
        <IonButton expand="block" color="danger" onClick={handleLogout} className='dangerBtn'>
          Log Out
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Profile;
