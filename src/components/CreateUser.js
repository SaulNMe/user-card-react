import React, {Component} from 'react';

export default class CreateUser extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			fullname: "",
			email: "",
			phone: "",
			avatar: ""
		}
	}

	handleChange (event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render(){		
		return(
			<div className="create-user">
				<button className="back-to-card" onClick={() => this.props.onBack(false)}>
					{this.props.label}			
				</button>
				<h1>Crea un usuario</h1>
				<br/>
				<div className="form-user">
					<form onSubmit={() => this.props.onCreateUser(this.state, false)}>
						<p className="text-input">Full Name</p>
						<input className="input-user" placeholder="Saúl Narvaez"type="text" onChange={this.handleChange} name='fullname'/>
						<p className="text-input">Correo Electrónico o institucional</p>
						<input className="input-user" placeholder="saul@saeko.io"type="text" onChange={this.handleChange} name='email'/>
						<p className="text-input">Phone</p>
						<input className="input-user" placeholder="+52 (771) 214 5899"type="text" onChange={this.handleChange} name='phone'/>
						<p className="text-input">Url de la imagen</p>
						<input className="input-user" placeholder="http//luas/loquillo.jpg"type="text" onChange={this.handleChange} name='avatar'/>
						<br/>
						<button className="save-user"type="submit">Guardar</button>
					</form>
				</div>
			</div>

			) 
	}
}