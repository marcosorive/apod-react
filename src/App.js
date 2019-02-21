import React, { Component } from 'react';
import {Apod} from './components/Apod';
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
			<div className="fluid-container my-3">
				<h1 className="text-center my-5 text-white">This is the Astronomic picture of the day for {this.state.date}</h1>
				<div className="row justify-content-center align-items-center my-5">
				<div className="border row col-sm-12 col-md-6 form-inline align-items-center justify-content-center py-2">
					<div class="form-group text-white col">Check another day!</div>
					<div class="colform-group mx-sm-3">
						<input type="date" class="form-control" onChange={this.handleDateInput}/>
					</div>
					<button class="col btn btn-primary" onClick={this.handleSubmit}>Search</button>
               		</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<Apod date={this.state.date}/>
				</div>
				
			</div>
		);
	}


	handleDateInput(event){
		this.setState({
			inputDate:event.target.value
		})
	}

	handleSubmit(){
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

