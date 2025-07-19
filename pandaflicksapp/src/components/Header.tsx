// src/components/Header.tsx

import { IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon } from '@ionic/react';
import { settingsOutline, personCircleOutline } from 'ionicons/icons';
// Adım 1'de oluşturduğumuz CSS dosyasını import ediyoruz
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar className="bg-dark-surface">
        
        <IonTitle className="text-h3">
          <span role="img" aria-label="panda" style={{ marginRight: '8px' }}>🐼</span>
          PandaFlicks
        </IonTitle>
        
        <IonButtons slot="end">
          {/* Stilleri className ile uyguluyoruz */}
          <button className={styles.header_button}>
            <IonIcon icon={settingsOutline} className={styles.header_icon} />
          </button>
          <button className={styles.header_button}>
            <IonIcon icon={personCircleOutline} className={styles.header_icon} />
          </button>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;