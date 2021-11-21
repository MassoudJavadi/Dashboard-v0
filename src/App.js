
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userid">
              <User />
            </Route>
            <Route path="/newUser">
            <NewUser />
            </Route>

          </Switch>
          <Sidebar/>
        </div>
    </Router>
        
  
       
    
  );
}

export default App;
