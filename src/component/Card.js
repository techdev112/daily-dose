import React, { Component } from 'react'

export default class Card extends Component {
	
  render() {
		let {title, description ,url, newsUrl} = this.props;
    return (			
      <>
				<div className="card">
					<img src={url} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title.slice(0,45)}...</h5>
						<p className="card-text">{description.slice(0,100)}...</p>
						<a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
					</div>
				</div>								
      </>
    )
  }
}
