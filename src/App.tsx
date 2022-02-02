import ReactPixel from 'react-facebook-pixel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import { Home } from './pages';
import { Cwb } from './pages/cwb';
import { ThankYouPage } from './pages/thankyou';

export function App() {
  ReactPixel.init('935971993835238', undefined, {
    debug: true,
    autoConfig: false,
  });
  ReactPixel.pageView();

  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <main className={styles.contentWrapper}>
          <Route path="/" exact component={Home} />
          <Route path="/cwb" exact component={Cwb} />
          <Route path="/cwb/thankyou" component={ThankYouPage} />
          <Route path="/thankyou" component={ThankYouPage} />
        </main>
      </Switch>
    </Router>
  );
}
