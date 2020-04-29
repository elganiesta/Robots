import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}) )
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
                <Scroll>
                    <div className='row justify-content-center'>
                        <CardList robots={filtredRobots} animations={this.onHoverCard} />
                    </div>
                </Scroll>
            </div>  
        )
    }
    
}

export default App;