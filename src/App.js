import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {places_list} from './components/places_list'
import {emotion} from './components/places_list'

const ExpenseHistory = ({category, dayOfWeek, dollars_spent, place_type})=> <div> ------ I spent {dollars_spent} dollars on {category} at the {place_type} on {dayOfWeek} and I am {emotion} ------ </div>



const current_year = new Date().getFullYear();


const Body = ()=> <div>
  { places_list.map(place => <ExpenseHistory key={place.id} category={place.category} dayOfWeek={place.dayOfWeek} dollars_spent={place.dollars_spent} place_type={place.place_type}/>)}
</div>

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer current_year={current_year} />
    </div>
  );
}

export default App;
