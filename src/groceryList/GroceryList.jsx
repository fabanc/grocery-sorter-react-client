import React from 'react';
import '../common/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryItem from './groceryItem'
import ListGroup from 'react-bootstrap/ListGroup'
import GrocerySorter from './GrocerySorter'

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

    let selectionHandler = this.setSelected.bind(this)
    
    return (
      <>
      <div className="row">
      <p className="text-primary" >Select your items and then click sort to get your sorted grocery list.</p>
      </div>
      
      <div className="row">
        {/* <div className="App"> */}

          <div className="col-xs-6">
            <div className="row, text-center">
              <p className="text-muted">Choose your products</p>
            </div>
            <ListGroup>
            {this.state.data.map((element, index)=>{
              return (<GroceryItem key={element.name} name={element.name} selected={element.selected} index={index} setSelected={selectionHandler} > Something </GroceryItem>)
            })}
            </ListGroup>
          </div>
          
          <div className="col-xs-6, half-width">
            <GrocerySorter groceryList={this.state.data} sorted={[]}/>
          </div>
        {/* </div> */}
      </div>
      </>
    );
  }

  setStoreData(data){
    let points = data.data.points.filter((currentValue, index)=> {
        return index !== data.data.starts[0] && index !== data.data.ends[0] 
    })

    let point_data = points.map((element, index) => {
          return {name: element, selected: false, odindex: index}
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