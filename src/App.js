import React, { Component } from 'react';
import UserInterface from './components/UserInterface'
import CreateUser from './components/CreateUser'
import './App.css';
  
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			editing: true,
			data: [{
			id: 1,
			fullname: 'Saúl',
			email: 'saul@saeko.io',
			phone: '+52 (771) 2310875',
			avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}, {
			id: 2,
			fullname: 'Saúl',
			email: 'saul@saeko.io',
			phone: '+52 (771) 2310875',
			avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}, {
			id: 3,
			fullname: 'Saúl',
			email: 'saul@saeko.io',
			phone: '+52 (771) 2310875',
			avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}, {
			id: 4,
			fullname: 'Saúl',
			email: 'saul@saeko.io',
			phone: '+52 (771) 2310875',
			avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}
		  ]
		}
		this.changeState = this.changeState.bind(this);
		this.createUser  = this.createUser.bind(this);
	}
	changeState (editing) {
		this.setState({ editing });
	}
	createUser (user, editing) {
		this.changeState(editing);
		let users = this.state.data
		let id = 0;
		users.map((item) => { if(item.id >= id) id = item.id+1});
		id = id;
		let fullname = user.fullname;
		let email = user.email;
		let phone = user.phone;
		let avatar = user.avatar;
		users.push({ id, fullname, email, phone, avatar });
		this.setState({
			data: users
		});
	}

	render () {
		return (
			<div className="wrapper">
				{
					this.state.editing
						? 	<CreateUser label="< Regresar" 
								onBack={this.changeState} 
								onCreateUser={this.createUser}
							/>
						: 	<UserInterface onBack={this.changeState}
								data={this.state.data}/>

				}
			</div>
		);
	}
}

export default App;
