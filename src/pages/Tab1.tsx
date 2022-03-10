import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonImg, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '../theme/custom.css';
import despa from '../images/despa.jpg';
import sia from '../images/sia.jpg';

const Tab1: React.FC = () => {
  return (
    <IonPage className='app-bg'>
      <IonHeader className='home'>
        <IonToolbar>
          <IonTitle>Tab 165</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-no-padding">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello John!</IonTitle>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /> */}
              <h1 color="secondary">Hello John!</h1>
            <IonSearchbar></IonSearchbar>

            <IonGrid class="ion-no-padding">
            <IonRow>
        <IonCol size='12' class="ion-no-padding">
          <h2 className='feature-heading'>Trending Songs <span>See all</span></h2>
          <ul className='song-alide'>
            <li>
              <IonImg src={despa}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
            <li>
            <IonImg src={sia}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
            <li>
            <IonImg src={despa}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
            <li>
            <IonImg src={sia}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
          </ul>
        </IonCol>
        <IonCol size='12' class="ion-no-padding">
          <h2 className='feature-heading'>English Songs <span>See all</span></h2>
          <ul className='song-alide'>
            <li>
              <IonImg src={despa}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
            <li>
            <IonImg src={sia}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
            <li>
            <IonImg src={despa}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
            <li>
            <IonImg src={sia}></IonImg>
              <IonLabel>Despacito <span>Album | Despacito</span></IonLabel>
            </li>
          </ul>
        </IonCol>
      </IonRow>
  </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
