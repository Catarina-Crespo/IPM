import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonIcon,
  IonInput,
  IonModal,
} from '@ionic/react';
import { mailOutline, locationOutline } from 'ionicons/icons';
import '../styles/Profile.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
  const history = useHistory(); 

  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [username, setUsername] = useState('Username');
  const [email, setEmail] = useState('user@example.com');
  const [location, setLocation] = useState('Rome, Italy'); 

  const handleLogout = () => {
    history.push('/login');
  };

  const handleSave = () => {
    setIsEditModalOpen(false);
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
          <h2>{username}</h2>
          <p>Bio or description goes here...</p>
        </div>

        <IonList className="profile_list">
          <IonItem className="profile_item">
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel>Email</IonLabel>
            <IonLabel slot="end">{email}</IonLabel>
          </IonItem>
          <IonItem className="profile_item">
            <IonIcon icon={locationOutline} slot="start" />
            <IonLabel>Location</IonLabel>
            <IonLabel slot="end">{location}</IonLabel>
          </IonItem>
        </IonList>

        <IonButton
          expand="block"
          color="primary"
          className="primBtn"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit Profile
        </IonButton>

        <IonButton
          expand="block"
          color="danger"
          onClick={handleLogout}
          className="dangerBtn"
        >
          Log Out
        </IonButton>

        <IonModal isOpen={isEditModalOpen} onDidDismiss={() => setIsEditModalOpen(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Profile</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => setIsEditModalOpen(false)}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="edit-profile-form">
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Location</IonLabel>
                <IonInput
                  value={location}
                  onIonChange={(e) => setLocation(e.detail.value!)}
                />
              </IonItem>
              <IonButton expand="block" color="primary" onClick={handleSave}>
                Save Changes
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
