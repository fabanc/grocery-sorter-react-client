import React from 'react';
import logo from './logo.svg';
import './app.css';
import GroceryItem from '../groceryList/groceryItem'

export default class App extends React.Component {

  state = {
      data: []
  }


  render(){
    let elements = this.state.data;
    let elementsUI = this.state.data.map((element)=>{
        return (<GroceryItem name={element}> Something </GroceryItem>)
    })
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload. This is custom.
          </p>
          {this.state.data.map((element)=>{
        return (<GroceryItem name={element}> Something </GroceryItem>)
    })
    }
        </header>
      </div>
    );
  }


  setStoreData(data){
    this.setState({ data: data.data.points });
    console.log(data);
    console.log(this.state.data);
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch('https://grocerysorterapp.azurewebsites.net/get_store_info')
    .then(response => response.json())
    .then(data => this.setStoreData({ data }));
  }
}
