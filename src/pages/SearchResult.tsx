
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { home } from 'ionicons/icons';
import React from 'react';
import AppLogo from '../components/AppLogo';



const SearchResult: React.FC = () => (

  <IonApp>
    <AppLogo></AppLogo>
    <IonContent>
    
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="full">
          <IonLabel>
            <h1>Favorites Barbershops</h1>
            <p>nearby Paris</p>
          </IonLabel>
        </IonItem>
      <IonList  lines="inset">

      <IonCard>
        <img src="https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png" />
        <IonCardHeader>
        <IonCardTitle>Madison, WI</IonCardTitle>
          <IonRow>
              <IonCol><IonCardSubtitle>Destination</IonCardSubtitle></IonCol>
              <IonCol><IonCardSubtitle  className="ion-float-right">Destination</IonCardSubtitle></IonCol>
          </IonRow>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <img src="https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png" />
        <IonCardHeader>
        <IonCardTitle>Madison, WI</IonCardTitle>
          <IonRow>
              <IonCol><IonCardSubtitle>Destination</IonCardSubtitle></IonCol>
              <IonCol><IonCardSubtitle  className="ion-float-right">Destination</IonCardSubtitle></IonCol>
          </IonRow>
        </IonCardHeader>
      </IonCard>
        
      </IonList>
    
    </IonContent>
  </IonApp>
);


export default SearchResult;
