import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import SortedGroceryItem from './SortedGroceryItem'

export default function GrocerySorter(props) {

  return (
    <>
      <div className="row, text-center">
        <p className="text-muted">Sorted grocery list </p>
      </div>
      

      <ListGroup>
          {props.labels.map((element, index)=>{
              return ( <SortedGroceryItem  key={element} name={element}></SortedGroceryItem>)
          })}
      </ListGroup>
    </>
  );
}
