import React, { Component } from 'react';
export class ApodMedia extends Component {

    render(){
        if(this.props.type ==="image"){
            return(<img src={this.props.source} className="card-img-top" alt="apod-media"></img>)
        }else{
            return(
                <iframe width="560" height="560" title="apod video"
                    src={this.props.source}
                    className="card-img-top"
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            )
        }
    }
}