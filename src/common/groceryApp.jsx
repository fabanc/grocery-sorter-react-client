import React from 'react';
import logo from './logo.svg';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryItem from '../groceryList/groceryItem'
import ListGroup from 'react-bootstrap/ListGroup'

export default class App extends React.Component {

  state = {
      data: [],
  }

  // constructor(props){
  //   this.selectionHandler = this.setSelected.bind(this);
  // }

  addItem(item){
    console.log(item)
  }

  setSelected = (index) => {
      console.log('Selected Index: ', index)
      let localData = this.state.data;
      let selectionValue = this.state.data[index].selected ? false : true
      console.log('setting selected to ', selectionValue, " for ", localData[index].name)
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
        console.log("Print element");
        return (<GroceryItem name={element}/>)
    })

    let selectionHandler = this.setSelected.bind(this)


    return (
      <div className="App">
        {
          <header className="App-header">Welcome to your Westboro Store grocery sorted </header>}
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
    console.log("Start: ", data.data.starts[0])
    console.log("End: ", data.data.ends[0])
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
