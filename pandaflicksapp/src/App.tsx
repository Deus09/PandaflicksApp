// src/App.tsx - Nihai ve Düzeltilmiş Versiyon

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables - Bizim anayasamızın uygulandığı yer */
import './theme/variables.css';

/* Gerekli Ionic ve React Router bileşenleri */
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* TEK BİR YERDE TOPLANMIŞ TÜM İKONLAR */
import { 
  checkmarkDoneCircleOutline, 
  flameOutline, 
  listOutline, 
  sparklesOutline, 
  addCircleOutline 
} from 'ionicons/icons';

/* Sayfalarımız */
import DiscoverPage from './pages/DiscoverPage';
// Not: Diğer sayfaları ileride oluşturacağız.

// Ionic React'i başlat
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Şimdilik tüm yolları aynı sayfaya yönlendiriyoruz ki uygulama çalışsın */}
          <Route exact path="/izlediklerim" component={DiscoverPage} />
          <Route exact path="/populer" component={DiscoverPage} />
          <Route exact path="/ekle" component={DiscoverPage} />
          <Route exact path="/listeler" component={DiscoverPage} />
          <Route exact path="/aionerisi" component={DiscoverPage} />
          
          {/* Uygulama ilk açıldığında /izlediklerim sayfasına yönlendir */}
          <Route exact path="/" render={() => <Redirect to="/izlediklerim" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" style={{'--color-selected': '#F97316', '--color': '#94A3B8'}}>
          <IonTabButton tab="izlediklerim" href="/izlediklerim">
            <IonIcon aria-hidden="true" icon={checkmarkDoneCircleOutline} />
            <IonLabel>İzlediklerim</IonLabel>
          </IonTabButton>

          <IonTabButton tab="populer" href="/populer">
            <IonIcon aria-hidden="true" icon={flameOutline} />
            <IonLabel>Popüler</IonLabel>
          </IonTabButton>

          {/* ÖZEL FİLM EKLE BUTONU */}
          <IonTabButton tab="ekle" href="/ekle">
            <IonIcon aria-hidden="true" icon={addCircleOutline} className="text-4xl text-primary" />
          </IonTabButton>

          <IonTabButton tab="listeler" href="/listeler">
            <IonIcon aria-hidden="true" icon={listOutline} />
            <IonLabel>Listeler</IonLabel>
          </IonTabButton>

          <IonTabButton tab="aionerisi" href="/aionerisi">
            <IonIcon aria-hidden="true" icon={sparklesOutline} />
            <IonLabel>AI Önerisi</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;