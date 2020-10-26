
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { home } from 'ionicons/icons';
import React from 'react';
import AppLogo from '../components/AppLogo';



const Home: React.FC = () => (

  <IonApp>
    <AppLogo></AppLogo>
    <IonContent>
    
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="full">
          <IonLabel>
            <h1>Favorites Barbershops</h1>
          </IonLabel>
        </IonItem>
      <IonList  lines="inset">

        <IonItem>
          <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>
            <h2>H2 Title Text</h2>
            <p>Button on right</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>
            <h2>H2 Title Text</h2>
            <p>Button on right</p>
          </IonLabel>
        </IonItem>
        
      </IonList>
    <IonItem className="dividerline-cen"></IonItem>
    
    <IonRow className="aligncenter"><IonButton >Make a booking</IonButton>
    </IonRow>
    </IonContent>
  </IonApp>
);


export default Home;
