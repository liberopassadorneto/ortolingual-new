import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import { Home } from './pages';
import { ThankYouPage } from './pages/thankyou';

export function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <main className={styles.contentWrapper}>
          <Route path='/' exact component={Home} />
          {/* <Route path='/signin' component={SigninPage} /> */}
          <Route path='/thankyou' component={ThankYouPage} />
        </main>
      </Switch>
    </Router>
  );
}
