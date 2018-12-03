import React, { Component } from 'react';
import AddButton from './AddButton';

export default class UserInterface extends Component {
	constructor (props) {
		super(props);
	}
	
	render () {
		return (
			<div className="container">
				{
				// !this.state.loading &&
				this.props.data.map((item) => (
					<div className="user-card" key={item.id}>
						<img className="avatar" src={item.avatar}/>
						<p>{item.fullname}</p>
						<p>email: {item.email}</p>
						<p>phone: {item.phone}</p>
					</div>
				  ))
				}
				<AddButton 
					onUserForm={() => this.props.onBack(true)}
					label="Añadir Usuario"
				/>
			</div>
		);
	}
}