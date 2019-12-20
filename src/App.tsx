import * as React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import SearchBar from "./components/searchBar";
import ResultList from "./components/resultList";

const App: React.FC = () => {
    return (
         <div>
          <Router>
               <SearchBar />
             <Switch>
                 {/*<Route exact path="/" component={ResultList} />*/}
             </Switch>
          </Router>
         </div>
  );
}
export default App;
