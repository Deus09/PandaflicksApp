import { IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon } from '@ionic/react';
import { settingsOutline, personCircleOutline } from 'ionicons/icons';

const Header: React.FC = () => {
 return (
 <IonHeader className="ion-no-border">
 <IonToolbar className="bg-dark-surface">
 <IonTitle className="font-sans text-h3 text-dark-text-primary">PandaFlicks</IonTitle>

 <IonButtons slot="end">
 <button className="p-2">
 <IonIcon icon={settingsOutline} className="text-2xl text-dark-text-secondary" />
 </button>
 <button className="p-2 mr-2">
 <IonIcon icon={personCircleOutline} className="text-2xl text-dark-text-secondary" />
 </button>
 </IonButtons>
 </IonToolbar>
 </IonHeader>
 );
};

export default Header;