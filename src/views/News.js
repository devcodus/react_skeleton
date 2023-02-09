import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor() {
        console.log("I was constructed")
        super();
        this.state = {
            articles: [],
            inputText:''
        }
    }

    getNews = async (term='tesla') => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=ded6d028236e4013889099d3220e56e0`);
        // const res = await fetch('http://localhost:5000/api/posts ')
        const data = await res.json();
        const articles = data.articles;
        this.setState({ articles: articles })
    }

    componentDidMount() {
        //THIS BECOMES VERY HELPFUL WHEN DEALING W/ ASYNC FUNCTIONS 
        console.log(this.state.articles);
        this.getNews();
    }

    showArticles = () => {
        return this.state.articles.map((a, i) => <Article key={i} articleInfo={a} />)
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const term = e.target.input1.value 
        this.getNews(term)
    }

    render() {
        return (
            <div>
                <h1>Tesla News</h1>
                {/* SHOW ARTICLES HERE */}

                <form onSubmit={this.handleSubmit}>
                    <input placeholder='uncontrolled' name='input1'/>
                    <button type='submit'>Search</button>
                </form>
                
                <form>  
                    <input placeholder='controlled  ' />
                    <button>Search</button>
                </form>


                <div className='row'>

                    {this.state.articles.length === 0 ? <p>loading..</p> : this.showArticles()}

                </div>


            </div>
        )
    }
}
