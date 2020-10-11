import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about';
import GroceryList from '../groceryList/GroceryList';
import Home from '../home/home';

export default function MyRouting({ location }) {
    console.log("Location: ", location)
    return (
      <>
        {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
        <Switch location={location}>
          <Route path='/' exact component={Home} />
          <Route path='/groceryList' exact component={GroceryList}/>
          <Route path='/about' component={About} />
        </Switch>
        {/* </React.Suspense> */}
      </>
    );
  }
  