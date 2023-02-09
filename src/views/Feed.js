import React, { Component } from 'react'
import Post from '../components/Post';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  };


  showPosts = () => {
    return this.state.posts.map(p => <Post key={p.id} postInfo={p} />)
  };

  getPosts = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/posts`);
    // , {
    //   mode: 'cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000'
    //   }
    // });
    const data = await res.json();
    console.log(data)
    if (data.status === 'ok') {
      this.setState({posts:data.posts})
    }
  }

  componentDidMount = () => {
    this.getPosts();
  }

  render() {
    return (
      <div>
        {this.showPosts()}
      </div>



    )
  }
}


// getPosts = async () =>{
//   const res = await fetch(`http://localhost:5000/api/posts`);;
//   const data = await res.json();
//   console.log(data)
//   if (DataTransfer.status ==='ok'){
//     // this.setState
//   }
// }
