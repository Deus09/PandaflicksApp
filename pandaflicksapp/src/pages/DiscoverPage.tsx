import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const DiscoverPage: React.FC = () => {
  return (
    <IonPage className="bg-dark-background">
      <Header />
      <IonContent fullscreen>
        <div className="p-4">
          <h1 className="font-sans text-display text-dark-text-primary">Discover</h1>
          <p className="font-sans text-body text-dark-text-secondary mt-2">Popular movies will be listed here.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverPage;