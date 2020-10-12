import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

  export default class SortedGroceryItem extends React.Component{

    render(){
      return(

            <ListGroup.Item><span className="buttonSpan">{this.props.name}</span>
            </ListGroup.Item>
      )
    }
  }