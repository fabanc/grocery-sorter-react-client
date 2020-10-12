import React from 'react';
import { Container } from 'reactstrap';
import './app.css';
import '../groceryList/GroceryList';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../common/Menu';
import MyRouting from '../common/MyRouting';

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>  
      <Menu />
        <Container>
          <MyRouting />
        </Container>
      </BrowserRouter>
    );
  }
}

