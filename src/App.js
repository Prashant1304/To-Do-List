import React,{ Component } from 'react';
import './App.css';
import First from "./component/mainPage"

class App extends Component {
  render() {
  return (
    <div className="App">
      <div><h1>To Do List</h1>
      <p>click on task name if it is completed </p>
      </div>
      <div>
        <First/>
      </div>
    </div>
  );
  }
}

export default App;
