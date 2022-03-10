import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonThumbnail, IonItem, IonLabel, IonList, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
// import playg from '../images/play-g.png';
import despa from '../images/despa.jpg';
import wheart from '../images/wheart.png';
import wplay from '../images/wplay.png';


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList className='fav-music-list'>
      <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    <IonItem>
      <IonThumbnail slot="start">
        <img src={despa} />
        <span><img src={wplay} /></span>
      </IonThumbnail>
      <IonLabel>
        <h3>Despacito<span>Album | Despacito</span></h3>
        <small>05:30</small>
      </IonLabel>
      <IonLabel className='play-icon'>
      <IonImg src={wheart}></IonImg>        
      </IonLabel>
    </IonItem>   
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
