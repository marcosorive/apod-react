import React, { Component } from 'react';
import {Apod} from './components/Apod';
import {DatePicker} from './components/DatePicker';
export class App extends Component {

	constructor(props){
		super(props);
		this.getTodayDate = this.getTodayDate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDateInput = this.handleDateInput.bind(this);
		this.state={
			inputDate:null,
			date:this.getTodayDate()
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-center mt-5 text-white">Astronomic picture of the day</h1>
				<h3 className="text-center mb-3 text-white">{this.state.date}</h3>
				{/* <div className="row"> */}
					<Apod date={this.state.date}/>
					<DatePicker handleSubmit={this.handleSubmit} handleDateInput={this.handleDateInput}/>
				{/* </div> */}
			</div>
		);
	}


	handleDateInput(event){
		this.setState({
			inputDate:event.target.value
		})
	}

	handleSubmit(){
		console.log("Llamdo!")
		if(this.state.inputDate === null){

		}else{
			this.setState({
				date:this.state.inputDate
			})
		}
		
	}

  	getTodayDate(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

		return  yyyy+'-'+mm + '-' + dd;
	}
}

