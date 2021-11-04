import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import { Home } from './pages';
import { SigninPage } from './pages/signin';

export function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <main className={styles.contentWrapper}>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={SigninPage} />
        </main>
      </Switch>
    </Router>
  );
}
