import { Switch, Route } from 'react-router';

import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      <div className={style.main}>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <ProtectedRoute path="/home" component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
