import React from 'react';

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

  export default class GroceryItem extends React.Component{

    getButtonText(){
      let text= this.props.selected ? "Remove" : "Add";
      return (<Button variant="primary" className="btn-sm" onClick={ () => this.props.setSelected(this.props.index)}>{text}</Button>)
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