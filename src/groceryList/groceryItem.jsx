import React from 'react';

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

  export default class GroceryItem extends React.Component{
    render(){

      return(

            <ListGroup.Item>{this.props.name}
              <Button variant="primary" onClick={(e)=> console.log(this.props.name)}>Add</Button>
            </ListGroup.Item>
      )
    }
  }