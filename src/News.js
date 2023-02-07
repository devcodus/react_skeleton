import React, { Component } from 'react'

export default class News extends Component {
    constructor(){
        console.log("I was constructed")
        super();
        this.state =  {
            articles: []
        }
    }

    getNews = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-07&sortBy=publishedAt&apiKey=ded6d028236e4013889099d3220e56e0');
        const data = await res.json();
        const articles = data.articles;
        this.setState({articles: articles})
    }

    componentDidMount(){
        //THIS BECOMES VERY HELPFUL WHEN DEALING W/ ASYNC FUNCTIONS 
        console.log(this.state.articles)
        setTimeout(this.getNews, 4000)
    }

    showArticles = () => {
        return this.state.articles.map(a =>  <div>{a.title}</div>)
    };

    render() {
        return (
            <div>
            <h1>Tesla News</h1>
            {/* SHOW ARTICLES HERE */}

            {this.state.articles.length===0?<p>loading..</p>:this.showArticles()}
         

            </div>
        )
    }
}
