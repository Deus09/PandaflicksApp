/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Theme variables */
import './theme/variables.css';

import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { checkmarkDoneCircleOutline, flameOutline, listOutline, sparklesOutline, timeOutline } from 'ionicons/icons';

import DiscoverPage from './pages/DiscoverPage';

setupIonicReact();

const App: React.FC = () => (
 <IonApp>
 <IonReactRouter>
 <IonTabs>
 <IonRouterOutlet>
 <Route exact path="/izlediklerim">
 <DiscoverPage />
 </Route>
 <Route exact path="/populer">
 <DiscoverPage />
 </Route>
 <Route exact path="/listeler">
 <DiscoverPage />
 </Route>
 <Route path="/dahasonra">
 <DiscoverPage />
 </Route>
 <Route path="/aionerisi">
 <DiscoverPage />
 </Route>

 <Route exact path="/">
 <Redirect to="/izlediklerim" />
 </Route>
 </IonRouterOutlet>

 <IonTabBar slot="bottom" className="bg-dark-surface">
 <IonTabButton tab="izlediklerim" href="/izlediklerim">
 <IonIcon aria-hidden="true" icon={checkmarkDoneCircleOutline} color="light" />
 <IonLabel className="text-dark-text-secondary">İzlediklerim</IonLabel>
 </IonTabButton>
 <IonTabButton tab="populer" href="/populer">
 <IonIcon aria-hidden="true" icon={flameOutline} color="light" />
 <IonLabel className="text-dark-text-secondary">Popüler</IonLabel>
 </IonTabButton>
 <IonTabButton tab="listeler" href="/listeler">
 <IonIcon aria-hidden="true" icon={listOutline} color="light" />
 <IonLabel className="text-dark-text-secondary">Listeler</IonLabel>
 </IonTabButton>
 <IonTabButton tab="dahasonra" href="/dahasonra">
 <IonIcon aria-hidden="true" icon={timeOutline} color="light" />
 <IonLabel className="text-dark-text-secondary">Daha Sonra</IonLabel>
 </IonTabButton>
 <IonTabButton tab="aionerisi" href="/aionerisi">
 <IonIcon aria-hidden="true" icon={sparklesOutline} color="light" />
 <IonLabel className="text-dark-text-secondary">AI Önerisi</IonLabel>
 </IonTabButton>
 </IonTabBar>
 </IonTabs>
 </IonReactRouter>
 </IonApp>
);

export default App;