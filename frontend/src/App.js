//Hooks
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Modal from "./components/Modal";
import Navbar from './components/Navbar';
import { NotFound } from './components/Pages/NotFound';

//actions
import { restoreUser }from "./store/session";

//styles
import styles from './BasicStyles/App.module.css';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <BrowserRouter>
    <div className={styles.background}>
      {sessionUser && <Navbar />}
      <Modal />
      <Switch>
        <Route path="/welcome">
          <div>Hello</div>
        </Route>
        <Route path="/">
          <div>Hello</div>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
