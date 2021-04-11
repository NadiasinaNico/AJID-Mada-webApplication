import './App.css';
import react from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetail from './BlogDetail';
import Contact from './Contact';
import Service from './Service';
import Inscription from './Inscription';
import Login from './login';
import Ajidmada from './ajidmada';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
   <div className="content">
   <Switch>
   <Route exact path="/">
   <Home />
   </Route>
   <Route path="/create">
     <Create />
   </Route>
   <Route path="/blog/:id">
     <BlogDetail />
   </Route>
   <Route path="/service">
     <Service />
   </Route>
   <Route path="/contact">
     <Contact />
   </Route>
   <Route path="/inscrire">
     <Inscription />
   </Route>
   <Route path="/login">
     <Login />
   </Route>
   <Route path="/ajidmada">
     <Ajidmada />
   </Route>
   <Route path="*">
     <NotFound />
   </Route>
   </Switch>
   
</div>
   </div>
   </Router>
  );
}
export default App;
