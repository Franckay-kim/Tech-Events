import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './Components/EventList';
import AddEventForm from './Components/AddEventForm';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import './Styles.css';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/register">
                        <RegistrationForm />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/add-event">
                        <AddEventForm />
                    </Route>
                    <Route path="/">
                        <EventList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
