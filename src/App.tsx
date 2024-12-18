import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { earthOutline, ellipse, home, personCircleOutline, square, triangle } from 'ionicons/icons';
import CreatePlan from './pages/CreatePlan';
import Tab2 from './pages/Tab2';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile'; 
import Prices from './pages/Prices'; 
import Login from './pages/Login';
import CheckPlan from './pages/CheckPlanPage';
import CreateTrip from './pages/CreateTripPage';


import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './styles/variables.css';
import FindAccomodation from './pages/FindAccomodation';
import Discover from './pages/Discover';
import './styles/general.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/findaccomodation">
            <FindAccomodation />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/createtrip">
            <CreateTrip />
          </Route>
          <Route exact path="/checkplan">
            <CheckPlan />
          </Route>
          <Route exact path="/createplan">
            <CreatePlan />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/prices">
            <Prices /> {/* Route for Prices page */}
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/discover">
            <IonIcon aria-hidden="true" icon={earthOutline} />
            <IonLabel>Discover</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/homepage">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Homepage</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;