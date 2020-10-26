import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

import {chatbox, home, search, person} from 'ionicons/icons';
import Test from './pages/Test';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import SelectedShop from './pages/SelectedShop';
import HaircutList from './pages/HaircutList';

const App: React.FC = () => (
  <IonApp >
    <IonReactRouter>
    <IonTabs>
      
    
    <IonTabBar className="ion-padding" slot="bottom">
    
      <IonTabButton tab="home">
        <IonIcon icon={home} />
      </IonTabButton>

      <IonTabButton tab="search">
        <IonIcon icon={search} />
      </IonTabButton>

      <IonTabButton tab="chat">
        <IonIcon icon={chatbox} />
      </IonTabButton>

      <IonTabButton tab="account">
        <IonIcon icon={person}/>
      </IonTabButton>
    </IonTabBar>
    
    <IonRouterOutlet>
    <Route path="/haircuts" component={HaircutList} exact={true} />
    <Route path="/selectedshop" component={SelectedShop} exact={true} />
    <Route path="/searchr" component={SearchResult} exact={true} />
    <Route path="/search" component={Search} exact={true} />
    <Route path="/test" component={Test} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
      
  </IonTabs>
  
      
    </IonReactRouter>
  </IonApp>
);

export default App;
