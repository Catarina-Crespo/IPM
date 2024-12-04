import { useState } from 'react';
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { filterCircleOutline } from 'ionicons/icons';
import '../styles/Tab1.css';
import { useHistory } from 'react-router-dom';
import Filters from '../components/Filters';
import React from 'react';


const recommendations_plans = [
  {
    id: 1,
    name: 'Gelateria La Romana',
    image:
      'https://www.nit.pt/wp-content/uploads/2022/06/64a8a99f79952a3e6d48cb4c3f2465b6-754x394.jpg',
  },
  {
    id: 2,
    name: 'Ristorante Fiori',
    image: 'https://as2.ftcdn.net/v2/jpg/00/49/08/33/1000_F_49083321_RQBwih3JXSSk0BRk7JiagSWvxPbZVy7n.jpg',
  },
  {
    id: 3,
    name: 'Fontana di Trevi',
    image:
      'https://media.posterlounge.com/img/products/680000/677037/677037_poster.jpg',
  },
  {
    id: 4,
    name: 'Foro Romano',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Forum_Romanum_Rom.jpg/338px-Forum_Romanum_Rom.jpg',
  },
  {
    id: 5,
    name: 'Colosseum',
    image:'https://www.pportodosmuseus.pt/wp-content/uploads/2011/04/Coliseu_Roma_5.jpg',
  },
];

const CreatePlan: React.FC = () => {

  const history = useHistory(); // useHistory hook for navigation
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [SelectedOptionVisitor, setSelectedOptionVisitor] = useState<string | null>(null);
  const [SelectedOptionSchedule, setSelectedOptionScheduler] = useState<string | null>(null);


  const [interests, setInterests] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);


  const handleCheckboxChangeVisitor = (label: string) => {
    setSelectedOptionVisitor(SelectedOptionVisitor === label ? null : label);
  };
  const handleCheckboxChangeSchedule = (label: string) => {
    setSelectedOptionScheduler(SelectedOptionSchedule === label ? null : label);
  };
  
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Travel Plan</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem lines="none">
          <IonButton
            fill="clear"
            size="small"
            slot="end"
            onClick={() => setShowAlert(true)}
          >
            Skip
          </IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Confirm"
            message="Are you sure that you want to skip this part?"
            buttons={[
              {
                text: 'Yes',
                cssClass: 'alert-button-confirm',
                handler: () => {
                  // Action to perform when "Yes" is clicked
                  console.log('You clicked Yes');
                  history.push("/checkplan");
                }
              },
              {
                text: 'Cancel',
                cssClass: 'alert-button-cancel'
              },
            ]}
          />
        </IonItem>

        <IonItem> <IonLabel className='question-text'>What are you interested in?</IonLabel>        </IonItem>

        <IonList>
          <IonCheckbox slot="start" style={{padding: "5px 10px"}}>Sports</IonCheckbox>
          <IonCheckbox slot="start" style={{padding: "5px 10px"}}>Museums</IonCheckbox>
          <IonCheckbox slot="start" style={{padding: "5px 10px"}}>Nightlife</IonCheckbox>
          <IonCheckbox slot="start" style={{padding: "5px 10px"}}>Monuments</IonCheckbox>
          <IonCheckbox slot="start" style={{padding: "5px 10px"}}>Food</IonCheckbox>
          <IonCheckbox slot="start" style={{padding: "5px 10px"}}>Tours</IonCheckbox>
      </IonList>

      <IonItem> <IonLabel className='question-text'>What type of visitor are you?</IonLabel>        </IonItem>
      <IonList>
        {[
          'I like to take my time',
          'I see things quickly',
          'It depends',
        ].map((label, index) => (
          <IonItem key={index} lines="none">
            <IonCheckbox checked={SelectedOptionVisitor === label} 
                onIonChange={() => handleCheckboxChangeVisitor(label)} 
              slot="start"
              style={{
                '--border-radius': '100%',
              }}
            />
            <IonLabel>{label}</IonLabel>
          </IonItem>
        ))}
      </IonList>


      <IonItem> <IonLabel className='question-text'>Schedule Preference:</IonLabel>        </IonItem>
      <IonList>
        {[
          'Day',
          'Night',
          'Both',
        ].map((label, index) => (
          <IonItem key={index} lines="none">
            <IonCheckbox  checked={SelectedOptionSchedule === label} 
                onIonChange={() => handleCheckboxChangeSchedule(label)} 
              slot="start"
              style={{
                '--border-radius': '100%',
              }}
            />
            <IonLabel>{label}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      <IonItem> <IonLabel className='question-text'>Activity Type:</IonLabel>        </IonItem>
      <IonList>
        {[
          'Indoor',
          'Outdoor',
        ].map((label, index) => (
          <IonItem key={index} lines="none">
            <IonCheckbox 
              slot="start"
              style={{
                '--border-radius': '100%',
              }}
            />
            <IonLabel>{label}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      <IonItem> <IonLabel className='question-text'>Don't want to miss</IonLabel>        </IonItem>


      <Filters open={open} onClose={handleClose} />


      <IonToolbar>
          <div style={{ display: 'flex',  padding:"20px 10px"}}>
          <IonSearchbar animated={true} placeholder="Search Attraction.."></IonSearchbar>
          <IonButton size="small" onClick={handleOpen}>
            <IonIcon 
              icon={filterCircleOutline}
              style={{ fontSize: '30px' }}
            />
          </IonButton>
          </div>
        </IonToolbar>



    {/*} IF WE WANT IB LIST
        <IonList className="interests-list">
          <fieldset>
          <legend className="question-text">What are you interested in?</legend>
            {[
              'Sports',
              'Museums',
              'Food',
              'Monuments',
              'Nightlife',
              'Tours',
            ].map((interest) => (
              <IonItem key={interest}  lines="none">
                <IonLabel>{interest}</IonLabel>
                <IonCheckbox
                  slot="start"
                />
              </IonItem>
            ))}
          </fieldset>
        </IonList>   */}

<IonGrid>
  <IonRow className="scrollable-row">
    {recommendations_plans
      .filter((plan) => plan.id % 2 !== 0) // Filter for odd IDs
      .map((plan) => (
        <IonCol size="7" key={`odd-col-${plan.id}`}>
          <IonCard
            className="horizontal-card"
            button={true}
            key={`odd-${plan.id}`}
          >
            <img
              alt={plan.name}
              src={plan.image}
              style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            <IonCardHeader>
                <IonCardTitle>{plan.name}
                 <IonCheckbox 
                style={{ marginTop:"5px"}} alignment="start">  </IonCheckbox>              
                </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      ))}
  </IonRow>

  {/* Second Row: Cards with Even IDs */}
  <IonRow className="scrollable-row">
    {recommendations_plans
      .filter((plan) => plan.id % 2 === 0) // Filter for even IDs
      .map((plan) => (
        <IonCol size="7" key={`even-col-${plan.id}`}>
          <IonCard
            className="horizontal-card"
            button={true}
            key={`even-${plan.id}`}
          >
            <img
              alt={plan.name}
              src={plan.image}
              style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            <IonCardHeader>
               <IonCardTitle>{plan.name}
                 <IonCheckbox 
                  style={{ marginTop:"5px"}} alignment="start">  </IonCheckbox>              
               </IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      ))}
  </IonRow>
</IonGrid>




        <IonButton
          expand="block"
          className="save-button"
          onClick={() => history.push("/checkplan")}
        >
          Save Preferences
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreatePlan;
