import React, { Component } from 'react';
import AddButton from './AddButton';

export default class UserInterface extends Component {
	constructor (props) {
	    super(props);

	    this.state = {
	      data: [{
	        id: 1,
	        first_name: 'Saúl',
	        last_name: 'Narvaez'}, {
	        id: 2,
	        first_name: 'Saúl',
	        last_name: 'Narvaez'}, {
	        id: 3,
	        first_name: 'Saúl',
	        last_name: 'Narvaez'}, {
	        id: 4,
	        first_name: 'Saúl',
	        last_name: 'Narvaez'}
	      ]
	    }
  	}

  	addUser = () => {
    let addUserData = this.state.data
    let id = addUserData[addUserData.length-1].id + 1

    addUserData.push({
              id,
              first_name:'Loquillo',
              last_name: 'el chido'});
    this.setState({
          data: addUserData})
    console.log('Hola');
  	}
  	
	render () {
    	return (
	    	<div>
		        <ul>
		          {
		            // !this.state.loading &&
		              this.state.data.map(item => (
		                <li key={item.id}>
		                  <p>name: {item.first_name} {item.last_name}</p>
		                  <p>id: {item.id}</p>
		                </li>
		              ))
		          }
		        </ul>
        		<AddButton 
          			onClick={this.addUser}
          			label="Añadir Usuario"
        		/>
      		</div>
	    );
	}
}