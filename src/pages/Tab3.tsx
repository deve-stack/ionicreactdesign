import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonThumbnail, IonItem, IonLabel, IonList, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import playg from '../images/play-g.png'
import despa from '../images/despa.jpg'



const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>English Music</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList className='music-list'>
      <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={playg}></IonImg>        
      </IonLabel>
    </IonItem>
    </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
