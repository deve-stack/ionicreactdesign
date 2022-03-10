import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonImg, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '../theme/custom.css';
import bed from '../images/bed.png';
import musica from '../images/music-icon.png';
import bulb from '../images/bulb.png';
import alarmc from '../images/alarm-clock.png';
import meter from '../images/meter2.png';
import meteract from '../images/meter-act.png';




const Dashboard: React.FC = () => {
  return (
    <IonPage className='app-bg'>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>   

            <IonGrid>
            <IonRow className='meter'>        
                <IonCol size='12'>
                <div className='meter-area'>
                <IonImg src={meter}></IonImg>
                <div className='meter-action'>
                <IonImg src={meteract}></IonImg>  
                <span></span>                  
                <span></span>                  
                <span></span>                  
                    </div>
                </div>
                </IonCol>
            </IonRow>

            <IonRow className='dash-btns'>        
        <IonCol size='6'>
            <div className='dash-btn y-btn'>
            <IonImg src={bed}></IonImg>
            <IonLabel>Relaxation</IonLabel>
                </div>
        </IonCol>
        <IonCol size='6'>
            <div className='dash-btn g-btn'>
            <IonImg src={musica}></IonImg>
            <IonLabel>Sounds</IonLabel>
                </div>
        </IonCol>
        <IonCol size='6'>
            <div className='dash-btn r-btn'>
            <IonImg src={bulb}></IonImg>
            <IonLabel>Lights</IonLabel>
                </div>
        </IonCol>
        <IonCol size='6'>
            <div className='dash-btn lg-btn'>
            <IonImg src={alarmc}></IonImg>
            <IonLabel>Bed Times</IonLabel>
                </div>
        </IonCol>
      </IonRow>
  </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
