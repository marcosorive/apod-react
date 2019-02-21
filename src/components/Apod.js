import React, { Component } from 'react';
import {ApodMedia} from './ApodMedia';
export class Apod extends Component {

	constructor(props){
		super(props);
		this.state = {
			isLoaded:false,
			error:null,
			apod:null
		}
	}

	async componentDidMount(){
		this.getApod(this.props.date);
	}

	async componentDidUpdate(prevProps){
		if(this.props.date !== prevProps.date){
			this.state = {
				isLoaded:false,
				error:null,
				apod:null
			}
			this.getApod(this.props.date);
		}
	}

	async getApod(date){
		try{
			let response = await fetch("https://api.nasa.gov/planetary/apod?date="+date+"&api_key=");
			if(await response.ok){
				response = await response.json()
				this.setState({
					isLoaded:true,
					apod:response,
				})
			}else{
				throw new Error();
			}
		}catch(e){
			this.setState({
				isLoaded:true,
				error:e.message
			})
		}
	}

	render() {
		let {isLoaded,error,apod} = this.state;
		if(!isLoaded){
			return(
				<div class="spinner-border text-primary" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			);
		}else if(error){
			return (
				<p>There's been an error, please try again later.</p>
			);
		}else{
			return (
				<div className="card col-sm-12 col-md-6">
				<ApodMedia type={apod.media_type} source={apod.url} className="card-img-top"/>
				<div class="card-body">
					<h5 class="card-title">{apod.title}</h5>
					<p class="card-text">{apod.explanation}</p>
					<button class="btn btn-primary">Go somewhere</button>
				</div>
			</div>
			);
		}
	}
}

