import React, { Component } from 'react';
import AddButton from './AddButton';

export default class UserInterface extends Component {
	constructor (props) {
	    super(props);

	    this.state = {
	      data: [{
	        id: 1,
	        first_name: 'Saúl',
	        mail: 'saul@saeko.io',
	    	phone: '+52 (771) 2310875',
	    	avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}, {
	        id: 2,
	        first_name: 'Saúl',
	        mail: 'saul@saeko.io',
	    	phone: '+52 (771) 2310875',
	    	avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}, {
	        id: 3,
	        first_name: 'Saúl',
	        mail: 'saul@saeko.io',
	    	phone: '+52 (771) 2310875',
	    	avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}, {
	        id: 4,
	        first_name: 'Saúl',
	        mail: 'saul@saeko.io',
	    	phone: '+52 (771) 2310875',
	    	avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'}
	      ]
	    }
  	}

  	addUser = () => {
    let addUserData = this.state.data
    let id = addUserData[addUserData.length-1].id + 1

    addUserData.push({
            id,
          	first_name:'Loquillo',
          	mail: 'amrs232@hotmail.com',
          	phone: '+52 (771) 2310875',
    	  	avatar: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4ZrVLdVKeijzurndz/people-emotion-and-facial-expression-concept-face-of-happy-smiling-young-man_hkvtvlv3_thumbnail-full05.png'});
    this.setState({
          data: addUserData})
    console.log('Hola');
  	}
  	
	render () {
    	return (
	    	<div className="container">
	          	{
	            // !this.state.loading &&
	            this.state.data.map(item => (
					<div className="user-card">
	                	<img src={item.avatar}/>
	                  	<p>name: {item.first_name} {item.mail}</p>
	                  	<p>id: {item.id}</p>
					</div>

	              ))
	          	}
        		<AddButton 
          			onClick={this.addUser}
          			label="Añadir Usuario"
        		/>
      		</div>
	    );
	}
}