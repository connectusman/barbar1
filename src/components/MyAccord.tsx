

import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';



class MyAccord extends React.Component {
   
    componentDidMount(){
        let acc = document.getElementsByClassName("accordion") ;


        let i:any;
        for (i = 0; i < acc.length; i++) {
            
            acc[i].addEventListener("click", (e:Event) => {

               
                
                let my=e.target as HTMLElement;
                const currentlyActiveAccordionItemHeader = document.querySelector(".accordion.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==e.target) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       let temp=currentlyActiveAccordionItemHeader.nextElementSibling as HTMLElement;
       temp.style.maxHeight = "";
     }
                my.classList.toggle("active");
            let panel = my.nextElementSibling as HTMLElement;
            if (panel.style.maxHeight ==="") {
                panel.style.maxHeight = panel.scrollHeight + "px";
                
            } else {
                panel.style.maxHeight = "";
            }});
          
        }
    }
    
    render(){
    
    return (

  <IonApp>
      <IonContent>
      <button className="accordion">Section 1</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</IonContent>
  </IonApp>
);}
    }

    export default MyAccord;


