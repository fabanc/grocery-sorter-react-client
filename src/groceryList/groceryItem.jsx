import React from 'react';

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

  export default class GroceryItem extends React.Component{

    // constructor(props){
    //   super(props);
    // }
    
    // setSelected = () => {
    //   let selectionValue = this.props.selected ? false : true
    //   console.log('setting selected to ', selectionValue, " to ", this.props.name)
    //   this.setState({
    //     selected: selectionValue
    //   }, 
    //     ()=> console.log(this.props.selected)
    //   );
      
    // }

    getButtonText(){
      let text= this.props.selected ? "Remove" : "Add";
      return (<Button variant="primary" onClick={ () => this.props.setSelected(this.props.index)}>{text}</Button>)
    }

    render(){
      
      let mybutton = this.getButtonText();
      return(

            <ListGroup.Item><span className="buttonSpan">{this.props.name}</span>
              {mybutton}
            </ListGroup.Item>
      )
    }
  }