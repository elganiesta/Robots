import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    onHoverCard = (event) => {
        const thing = event.target;
        thing.classList.add('animated', 'pulse');
        setTimeout(function () {
            thing.classList.remove('animated', 'pulse');
        },1000)
    }

    render() {
        const filtredRobots = this.state.robots.filter( robot => {
            return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='text-center'>
                <h1>RoboFriends</h1>
                <div className='row justify-content-center'> 
                    <SearchBox searchChange={this.onSearchChange} />
                </div>
                <div className='row justify-content-center'>
                    <CardList robots={filtredRobots} animations={this.onHoverCard} />
                </div>
                
            </div>  
        )
    }
    
}

export default App;