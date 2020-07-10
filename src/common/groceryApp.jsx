import React from 'react';
import logo from './logo.svg';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryItem from '../groceryList/groceryItem'
import ListGroup from 'react-bootstrap/ListGroup'

export default class App extends React.Component {

  state = {
      data: []
  }

  addItem(item){
    console.log(item)
  }

  render(){
    let elements = this.state.data;
    let elementsUI = this.state.data.map((element)=>{
        console.log("Print element");
        return (<GroceryItem name={element}/>)
    })
    return (
      <div className="App">
        {/* <header className="App-header">    
        </header> */}
        <div class="half-width">
          <ListGroup>
          {this.state.data.map((element)=>{
            return (<GroceryItem key={element} name={element} addClick={() => this.addItem(element)}> Something </GroceryItem>)
          })}
          </ListGroup>
        </div>
      </div>


    );
  }


  setStoreData(data){
    let points = data.data.points.filter((currentValue, index)=> {
        return index !== data.data.starts[0] && data.data.ends[0] 
    })
    this.setState({ data: points });
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch('https://grocerysorterapp.azurewebsites.net/get_store_info')
    .then(response => response.json())
    .then(data => this.setStoreData({ data }));
  }
}
