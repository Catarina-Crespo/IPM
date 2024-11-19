import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonList, IonButton, IonIcon } from '@ionic/react';
import { mailOutline, locationOutline } from 'ionicons/icons'; // Import icons
import '../styles/Profile.css';

const Profile: React.FC = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <IonPage>
      <IonHeader>
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
            <img src="src/styles/Profile-PNG-File.png" alt="Profile" />
          </IonAvatar>
          <h2>Username</h2>
          <p>Bio or description goes here...</p>
        </div>
        
        <IonList>
          <IonItem>
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel>Email</IonLabel>
            <IonLabel slot="end">user@example.com</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={locationOutline} slot="start" />
            <IonLabel>Location</IonLabel>
            <IonLabel slot="end">City, Country</IonLabel>
          </IonItem>
        </IonList>
        
        <IonButton expand="block" color="primary">
          Edit Profile
        </IonButton>
        
        <IonButton expand="block" color="danger" onClick={handleLogout}>
          Log Out
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Profile;
