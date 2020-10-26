
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { render } from '@testing-library/react';
import { home, star, starOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect } from 'react-router-dom';
import AppLogo from '../components/AppLogo';
import MyAccord from '../components/MyAccord';



const SelectedShop: React.FC = () => (

  <IonApp>
    <AppLogo></AppLogo>
    <IonContent>
    
      <IonItem className="dividerline"></IonItem>
      
      <IonSegment >
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Enemies</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      <IonItem  lines="full">
          <IonLabel>
            <h1>Favorites Barbershops</h1>
            <p>nearby Paris</p>
            <IonRow>
              <IonCol><IonIcon  icon={star} /><IonIcon  icon={star} /><IonIcon  icon={star} /><IonIcon  icon={star} /><IonIcon  icon={starOutline} /></IonCol>
              <IonCol><p>113 feedbacks</p></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              </IonRow>
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


export default SelectedShop;
