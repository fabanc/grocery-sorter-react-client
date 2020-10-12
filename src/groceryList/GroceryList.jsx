import React from 'react';
import '../common/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryItem from './groceryItem'
import ListGroup from 'react-bootstrap/ListGroup'
import GrocerySorter from './GrocerySorter'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'reactstrap';

export default class GroceryList extends React.Component {

  state = {
      data: [],
      sorted:[],
      sortService: 'https://grocerysorterwebapp.azurewebsites.net/get_store_route'
  }

  setSelected = (index) => {
      let localData = this.state.data;
      let selectionValue = this.state.data[index].selected ? false : true
      localData[index].selected = selectionValue;
      this.setState({
        data: localData
      }, 
        ()=> console.log('Data Set')
      );    
  }

  filterGrocery = () => {
    return this.state.data.filter((element) => {
        return element.selected;
    }).map((element, index) => {
        return element.name
    })
  }

  sortGrocery = (labels) => {
    console.log('Sorted Request ...', labels);

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    
    let params = {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({labels: labels}),
        mode: 'cors'
    }

    fetch(this.state.sortService, params)
    .then(response => response.json())
    .then(data => this.processSortedData(data));
  }

  clickSort(){

    // Get the selected items from the list
    let labels = this.filterGrocery();
    console.log('Click Sort');
    if (labels.length === 0){ 
      console.log("No selected data !!!")
      return; 
    }
    
    console.log("Sort Click: ", labels);
    this.sortGrocery(labels);
    
  }

  processSortedData(data){
    console.log("Saving sorted data into state: ", data);
    this.setState({
      sorted:data
    })
  }

  render(){

    let selectionHandler = this.setSelected.bind(this)
    let sortClickHandler = this.clickSort.bind(this)
    
    return (
      <>
      <Container>
      <Row>
        <Col className="col-xs-12, text-center">
          <p className="text-primary" >Select your items and then click sort to get your sorted grocery list.</p>
        </Col>
      </Row>

      <Row>
        <Col className="col-xs-12, text-center">
          <p>
            <Button className="btn-lg" onClick={sortClickHandler}>Sort your grocery now!</Button>
          </p>
        </Col> 
      </Row>
      
      <Row>
        <Col className="col-xs-6, text-center">
            <div className="row, text-center">
              <p className="text-muted">Choose your products</p>
            </div>
            <ListGroup>
            {this.state.data.map((element, index)=>{
              return (<GroceryItem key={element.name} name={element.name} selected={element.selected} index={index} setSelected={selectionHandler} > Something </GroceryItem>)
            })}
            </ListGroup>
        </Col>
          
        <Col className="col-xs-6, text-center">
            <GrocerySorter labels={this.state.sorted}/>
        </Col>
        </Row>
      </Container>
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
