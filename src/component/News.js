import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import Spinner from './Spinner'

export default class News extends Component {

	constructor(){
		super();
		this.state = {
			articles : [],
			loading: false,
			page: 1
		}
	}

	async componentDidMount(){
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9a8c6812c32430a862b6dfb4506a7fd&page=1&pageSize=${this.props.pageSize}`
		this.setState({ loading: true })
		let data = await fetch(url);
		let parseData = await data.json();
		console.log(parseData)
		this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
	}

	handlePrevClick = async () => { 
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9a8c6812c32430a862b6dfb4506a7fd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
		let data = await fetch(url);
		let parseData = await data.json();
		
		this.setState({ 
			page: this.state.page - 1,
			articles: parseData.articles,
			loading: false
		})
	}

	handleNextClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9a8c6812c32430a862b6dfb4506a7fd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
		this.setState({ loading: true })
		let data = await fetch(url);
		let parseData = await data.json();
		this.setState({ 
			articles: parseData.articles,
			page: this.state.page + 1,
			loading: false
		})
		
	}
  render() {
    return (
    <>
	  	{ this.state.loading ? 
					<Spinner /> :
			<>			
        <div className="container my-3">
					<h1 className ="text-center">
						Daily Dose
					</h1>
					<div className="row">
						{this.state.articles.map((article,id)=> <NewsItem article = {article} key={id} />)}
					</div>
        </div>
				<div className = "container d-flex justify-content-between">
					<button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
					<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
				</div>
			</>
  		}
    </>
    )
  }
}

News.propTypes = {
  country: PropTypes.string,
	pageSize: PropTypes.number
};
