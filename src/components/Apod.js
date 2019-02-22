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
			this.setState( {
				isLoaded:false,
				error:null,
				apod:null
			})
			this.getApod(this.props.date);
		}
	}

	async getApod(date){
		try{
			let response = await fetch("https://api.nasa.gov/planetary/apod?date="+date+"DEMO_KEY");
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
		let copyright = "Public domain";
		if(!isLoaded){
			return(
				<div className="row justify-content-center align-items-center">
				<div class="spinner-border text-primary" role="status">
					<span class="sr-only">Loading...</span>
				</div>
				</div>
			);
		}else if(error){
			return (
				<p>There's been an error, please try again later.</p>
			);
		}else{
			if(apod.copyright){
				copyright = apod.copyright;
			}
			return (
				<div className="border rounded-top shadow bg-white text-space">
					<h2 className="card-header text-center">{apod.title}</h2>
					<div className="row  align-items-center p-3 my-md-3">
						<div className="col-sm-12 col-md-6">
						<ApodMedia type={apod.media_type} source={apod.url} className="col-sm-12 col-md-6"/>
						</div>	
						<div className="col-sm-12 col-md-6 card-text my-md-3 py-3 text-justify">
							<p><strong>Credit & Copyright</strong>: {copyright}</p>
							<p><strong>Explanation</strong>: {apod.explanation}</p>
						</div>
					</div>
				</div>
			);
		}
	}
}

