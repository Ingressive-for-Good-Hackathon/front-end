
import Access from './Access';
import './App.css';
import Form from './Form';
import Form2 from './Form2';
import Question from './Question';
import Verification from './Verification';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Expression from './Expression';



function App() {
  return (

    // <div className="App">
    //   <Form />
    //   <Form2 />
    //   <Question />
    //   <Verification />
    //   <Access />
    // </div>


    <Router>
      <div className="App">
       <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/Form2">
            <Form2 />
          </Route>
          <Route path="/Question">
            <Question />
          </Route>
          <Route path="/Verification">
            <Verification />
          </Route>
          <Route path="/Access">
            <Access />
          </Route>
          <Route path="/Expression">
            <Expression />
          </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
