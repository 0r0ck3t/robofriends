import React, {Component} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
// import { robots }  from './Robots_n'; 
import './App.css'
import Scroll from '../Components/Scroll'

// const state = {
//                 robots: robots,
//                 searchfield: ''
//               };

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
                        // robots: robots,
                        robots: [],
                        searchfield: ''
                     };
        // console.log('constructor')
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json() })
                .then(users => { this.setState({ robots: users }) });
        // console.log('DidMount');
    }

    onSearchChange = (event) =>
    {
        this.setState({ searchfield : event.target.value });
        // const filterRobot = this.state.robots.filter(robot => {
        //                                                         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //                                                       });
        // console.log(filterRobot);
    }
    render()
    {
        // console.log('render');\
        const { robots, searchfield } = this.state;
        const filterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
          });
        return (!robots.length) ?
            <h1>Loading</h1> :
            (
                <div className = 'tc'>
                        <h1 className = 'f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}  />
                        <Scroll>
                        <CardList robots = {filterRobot}  />
                        </Scroll>
                        </div>     
            );
    }             
}
export default App;                  