import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages'));

function App() {
  return (
    <Suspense fallback={
      <Loader />
    }>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  </Suspense>
  );
}

export default App;
