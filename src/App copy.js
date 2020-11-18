import React from 'react';
import PropTypes from 'prop-types'

function Food({name, picture, rating}) {
  //{ something } = props;
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name}/>
      <h4> {rating}</h4>
    </div>
  );
}

const foodILike = [
  { id : 1,
    name : 'kimchiii',
  image : 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
  , rating : 5,
  },{
    id : 2,
    name : '강아지',
    image : 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    , rating : 4,
  }
  
  ];


const renderFood =(dish)=><Food name={dish.name} picture={dish.image} rating={dish.rating}/>;

function App() {
  console.log(foodILike.map(renderFood));
  return (
  <div>
  <h1>Hello!</h1>
   {foodILike.map(dish=>(
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)
   )}
  </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

export default App;
