import React, { Component } from 'react';

export default class AddButton extends Component {
	constructor(props){
    	super(props);
	}
	
  	render(){
    	return <button className="addButton" onClick={this.props.onClick}>{this.props.label}</button>
  	}
}