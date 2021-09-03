import React, { Component } from 'react'
import Card from './Card'

export default class NewsItem extends Component {
		constructor(){
			super()
		}
	  render() {
		let { title, description, urlToImage} = this.props.article;
    return (
      <>
				<div className="col-md-4  my-3">
        	<Card title={title ? title : " "} description={description ? description : " "} url ={urlToImage ? urlToImage : "https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"} newsUrl={this.props.article.url}/>
				</div>
      </>
    )
  }
}
