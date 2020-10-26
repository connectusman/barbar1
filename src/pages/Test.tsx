
import { IonApp, IonAvatar, IonButton, IonCheckbox, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRange, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { checkmarkCircle, closeCircle, home, informationCircle, navigate, shuffle, star } from 'ionicons/icons';
import React from 'react';
import MyAccord from '../components/MyAccord';



const Test: React.FC = () => (
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ItemExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- Default Item --*/}
        <MyAccord></MyAccord>
      </IonContent>
    </IonPage>
  
);


export default Test;
