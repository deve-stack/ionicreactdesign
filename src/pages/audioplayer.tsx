import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonIcon, IonImg, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '../theme/custom.css';
import meteract from '../images/meter-act.png';
import musicposter from '../images/music-poster.png';
import shuffle from '../images/shuffle.png';
import next from '../images/next.png';
import play from '../images/play.png';
import prev from '../images/prev.png';
import repeat from '../images/repeat.png';
import fav from '../images/fav.png';
import menu from '../images/menu.png';

const Audioplayer: React.FC = () => {
  return (
    <IonPage className='app-bg'>
      <IonHeader>
        <IonToolbar className='m-player'>
        <IonButton slot='start'><IonImg src={menu}></IonImg></IonButton>
          <IonTitle class="ion-text-center a-player"><span>Now Playing</span>Dashboard</IonTitle>
        <IonButton slot='end'><IonImg src={fav}></IonImg></IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>   
                <div className='musiic-player'>
                <div className='musiic-detail'>
                <IonImg src={musicposter}></IonImg>
                <h3>Despacito<span>Album | Despacito</span></h3>
                </div>
                <div className='player-detail'>                 
                <IonProgressBar value={0.5}></IonProgressBar><br />
                <div className='player-action'>                 
                <span><IonImg src={shuffle}></IonImg> </span>                 
                <span><IonImg src={prev}></IonImg> </span>                 
                <span><IonImg src={play} className="play"></IonImg> </span>                 
                <span><IonImg src={next}></IonImg> </span>                 
                <span><IonImg src={repeat}></IonImg> </span>                 
                    </div>
                </div>
                </div>
      </IonContent>
    </IonPage>
  );
};

export default Audioplayer;
