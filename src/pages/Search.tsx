
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { home } from 'ionicons/icons';
import React from 'react';
import AppLogo from '../components/AppLogo';



const Search: React.FC = () => (

    <IonApp>
    <AppLogo></AppLogo>
    <IonContent>
    
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="full">
          <IonLabel>
            <h1>Favorites Barbershops</h1>
          </IonLabel>
        </IonItem>
        <IonSearchbar value="" onIonChange={e => {}}></IonSearchbar>
    
    </IonContent>
  </IonApp>
);


export default Search;
