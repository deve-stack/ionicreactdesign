import { IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonLabel, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import despa from '../images/despa.jpg';
import searchAlbum from '../images/search-album.png';
import searchAlbum2 from '../images/search-album2.png';
import searchAlbum3 from '../images/search-album3.png';
import searchAlbum4 from '../images/search-album4.png';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle className='header-title'><span>Now Playing</span>Despacito</IonTitle> */}
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid class="ion-no-padding search-grid">
            <IonRow className='search-poster'>
        <IonCol size='6'>
            <IonImg src={searchAlbum}></IonImg>
            <IonLabel>English</IonLabel>
          </IonCol>
          <IonCol size='6'>
            <IonImg src={searchAlbum2}></IonImg>
            <IonLabel>Hip Hop</IonLabel>
          </IonCol>
          <IonCol size='6'>
            <IonImg src={searchAlbum3}></IonImg>
            <IonLabel>Album</IonLabel>
          </IonCol>
          <IonCol size='6'>
            <IonImg src={searchAlbum4}></IonImg>
            <IonLabel>Artist</IonLabel>
          </IonCol>
          </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
