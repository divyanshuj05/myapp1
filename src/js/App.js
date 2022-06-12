import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Search from './Search';
import Scroll from './Scroll';
class App extends Component {
    constructor() { 
        super()
        this.state = {
            robots : [] ,
            searchfield: ' '
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));}
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
   render()
   {
       const {robots, searchfield} =this.state;
    const filteredrobots = robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
        return !robots.length ?
        <h1>Loading</h1>:
         (
        <div className='tc'>
        <h1 >RoboFriends</h1>
        <Search Searchchange={this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredrobots} />
        </Scroll>
        </div>
    );
    }
}

export default App;