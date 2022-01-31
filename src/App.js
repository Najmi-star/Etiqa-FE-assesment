import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStudentComponent}></Route>
            <Route path="/student" component={ListStudentComponent}></Route>
            <Route path="/add-student/:action" component={AddStudentComponent}></Route>
            <Route path="/view-student/:id" component={ViewStudentComponent}></Route>
            <Route path="/update-student/:id" component={UpdateStudentComponent}></Route>
          </Switch>
        </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
