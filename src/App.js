import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import AllPosts from './components/AllPosts/AllPosts';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/allposts">
          <AllPosts></AllPosts>
        </Route>
        <Route path="/posts/:id">
          <SinglePost></SinglePost>
        </Route>
        <Route path="/">
         <Home></Home>
        </Route>
        <Route path="/*">
         
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
