import React from 'react';
import '../common/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryItem from './groceryItem'
import ListGroup from 'react-bootstrap/ListGroup'
import { BrowserRouter } from 'react-router-dom';
import Menu from '../common/Menu';
import MyRouting from '../common/MyRouting';

export default class GroceryList extends React.Component {

  state = {
      data: [],
  }

  addItem(item){
    console.log(item)
  }

  setSelected = (index) => {
      let localData = this.state.data;
      let selectionValue = this.state.data[index].selected ? false : true
      localData[index].selected = selectionValue;
      this.setState({
        data: localData
      }, 
        ()=> console.log(this.props.selected)
      );    
  }


  render(){
    let elements = this.state.data;
    let elementsUI = this.state.data.map((element)=>{
        return (<GroceryItem name={element}/>)
    })

    let selectionHandler = this.setSelected.bind(this)

    
    return (
      <div className="App">
        <div class="half-width">
          <h3>Choose your products</h3>
          <ListGroup>
          {this.state.data.map((element, index)=>{
            return (<GroceryItem key={element.name} name={element.name} selected={element.selected} index={index} setSelected={selectionHandler} > Something </GroceryItem>)
          })}
          </ListGroup>
        </div>
      </div>
    );
  }

  setStoreData(data){
    let points = data.data.points.filter((currentValue, index)=> {
        return index !== data.data.starts[0] && index !== data.data.ends[0] 
    })

    let point_data = points.map((element, index) => {
        {
          return {name: element, selected: false, odindex: index}
        }
    });

    point_data.sort(function(a,b){
      if(a.name > b.name) return 1;
      if(a.name < b.name) return -1;
      return 0
    })

    console.log(points)

    this.setState({ data: point_data });
  }

  componentDidMount() {
    console.log("Component did mount");
    fetch('https://grocerysorterwebapp.azurewebsites.net/get_store_info')
    .then(response => response.json())
    .then(data => this.setStoreData({ data }));
  }
}
