import React from 'react';
class App extends React.Component{


  constructor(props){
    super(props);
    console.log('1.hello');
  }

  componentDidMount(){
    console.log('2.component rendered');
  }

  componentDidUpdate(){
    console.log('3.componentDidUpdate')
  }
  state = {
     count : 3,
  }

  add=()=>{
    // this.setState({count : this.state.count + 1});
    this.setState(current => ({
      count: current.count + 1,
    })
    );
    // console.log('add');
  }; 
  minus=()=>{
    //console.log('minus');
    this.setState({count : -1});

  };
  render(){
    console.log('render')
    return (
      <div>
        <h1> The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
