import React from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import SortedGroceryItem from './SortedGroceryItem'

//simple use of hooks.  No effects (so no save or restore of the counter value)
export default function Counter(props) {

  const sortService = 'https://grocerysorterwebapp.azurewebsites.net/get_store_route'

  console.log(props)
  const [groceryList, setGroceryList] = React.useState(props.groceryList);
  const [sorted, setSorted] = React.useState(props.sorted);

  console.log(groceryList)

  function getSortedSelect(){
    console.log('Sorting')

    let selectedItems = filterGrocery();
    sortGrocery({labels: selectedItems});
    console.log('Input for sorting: ', selectedItems)
  }

  function filterGrocery(){
    return props.groceryList.filter((element) => {
        return element.selected;
    }).map((element, index) => {
        return element.name
    })
  }

  function processSortedData(data){
    console.log("Saving sorted data into state: ", data);
    setSorted(data)
  }

  function sortGrocery(labels){

    console.log('Sorted Request ...', labels);

    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    
    let params = {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(labels),
        mode: 'cors'
    }

    fetch(sortService, params)
    .then(response => response.json())
    .then(data => processSortedData(data));
  }

  return (
    <>
      <p className="text-muted">Sorted Grocery List </p>
      <Button onClick={getSortedSelect}>Sort</Button>

      <ListGroup>
          {sorted.map((element, index)=>{
              return ( <SortedGroceryItem  key={element} name={element}></SortedGroceryItem>)
          })}
      </ListGroup>
    </>
  );
}
