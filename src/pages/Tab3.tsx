import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../styles/Tab3.css';
import { add,bookmarksOutline,thumbsUpOutline, happyOutline } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';

const recommendations_plans = [
  {
    id: 1,
    name: 'Dresden',
    duration: '1 week',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Frauenkirche_Dresden_%28bei_Nacht%29.jpg/1920px-Frauenkirche_Dresden_%28bei_Nacht%29.jpg',
  },
  {
    id: 2,
    name: 'Sydney',
    duration: '4 days',
    image: 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2023/11/Design-sem-nome-2023-11-27T212503.248-740x415.jpg',
  },
  {
    id: 3,
    name: 'Rabat',
    duration: '2 weeks',
    image:
      'https://media.cntraveler.com/photos/6539350ab21d028793b1fb08/master/w_1600,c_limit/Rabat,%20Morocco_GettyImages-1051469760.jpg',
  },
  {
    id: 4,
    name: 'Moscow',
    duration: '5 days',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/432px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg',
  },
  {
    id: 5,
    name: 'London',
    duration: '3 days',
    image:
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRfYWyROpLXHuPfafAI7m1lSYmGMphsE6rB9HL4Sv0SfH91wIwJLHHQKbaDtYai8hqzBhPPqHUPszjhyU_wclD5YgK7dvDpVcjBSQbe8w',
  },
];

  
const Tab3: React.FC = () => {
  function handleCardClick(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
          <IonRow className="ion-justify-content-center" class="current-plan-card"> 
            <IonCol size="8">  
              <IonCard button={true} onClick={() => handleCardClick('Rome')}>
                <img alt="Silhouette of mountains" src="https://lp-cms-production.imgix.net/2022-04/Castel-SantAngelo-Rome-Italy-danny-lehman-GettyImages-522705902%20rfc.jpg?w=1500&h=640&auto=format&q=75"/>
                <IonCardHeader>
                  <div style={{ display: 'flex',  marginRight: '20px' }}>
                <IonCardTitle>Rome</IonCardTitle>    
                    <IonIcon style={{ display:'flex', fontSize: '22px',  marginLeft: '18px'}} src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"></IonIcon>
                  </div>
                </IonCardHeader>
                 <IonItem >
                      <IonButton
                        fill="clear"
                        size="small"
                        slot="end"
                        onClick={() => alert(`Details`)}
                      >
                        See More
                      </IonButton>
                    </IonItem>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>



        <IonToolbar>
          <div style={{ display: 'flex',  marginRight: '180px' }}>
            <IonTitle>
              Saved Plans
            </IonTitle>
            <IonIcon
              icon={bookmarksOutline}
              style={{ fontSize: '24px', color: '#5259c4' }}
            />
          </div>
        </IonToolbar>


        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>Venice</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <IonCard  className="current-plan-card " style={{ width: '200px', margin: '0 auto' }} button={true} onClick={() => handleCardClick('Venice')}>
                  <img alt="Silhouette of mountains" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Santa_Maria_della_Salute_%2850428075772%29.jpg/278px-Santa_Maria_della_Salute_%2850428075772%29.jpg"/>
                  <IonCardHeader>
                  <IonCardTitle>Venice</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>Tokyo</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <IonCard  className="current-plan-card " style={{width: '200px', margin: '0 auto' }} button={true} onClick={() => handleCardClick('Tokyo')}>
                  <img alt="Silhouette of mountains" src="https://www.hilton.com/im/en/NoHotel/19362066/shutterstock-666197236.jpg?impolicy=crop&cw=3500&ch=2333&gravity=NorthWest&xposition=0&yposition=0&rw=1536&rh=1024"/>
                  <IonCardHeader>
                  <IonCardTitle>Tokyo</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        
        <IonToolbar>
          <div style={{ display: 'flex',  marginRight: '120px' }}>
            <IonTitle>
              Recommendations
            </IonTitle>
            <IonIcon
              icon={happyOutline}  /*thumbsUpOutline */
              style={{ fontSize: '24px', color: '#5259c4' }}
            />
          </div>
        </IonToolbar>


        <IonGrid>
          <IonRow className="scrollable-row">
            {recommendations_plans.map((plan) => (
              <IonCol key={plan.id} className="saved-plan-card">
                <IonCard button={true} onClick={() => alert("Card clicked!")}>
                  <img
                    alt={plan.name}
                    src={plan.image}
                    style={{ width: '100%', height: '120px', objectFit: 'cover' }}
                  />
                  <IonCardHeader>
                    <IonCardTitle>{plan.name}</IonCardTitle>
                    <IonCardSubtitle>{plan.duration}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>



      <IonFab className="custom-button" vertical="bottom" horizontal="end" slot="fixed" >
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonLabel className="custom-position-label"> NEW TRIP</IonLabel>

      </IonContent>
    </IonPage>
  );
};


export default Tab3;