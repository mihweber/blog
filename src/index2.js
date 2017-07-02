import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class Title extends React.Component{
  render(){
    return <h2>{this.props.title}</h2>;
  }
}

class Content extends React.Component{
  render(){
    return <p>{this.props.content}</p>;
  }
}


class AllPosts extends React.Component{
  render(){
    var titlepost = [];
    var contentpost = [];
    var eachpost = this.props.posts.forEach(function(post){
      titlepost.push(<Title title={post.title} />);
      contentpost.push(<Content content={post.content} />);
      <div>
        {titlepost}
        {contentpost}
      </div>
    })
    return(
      <div>
        {eachpost}
      </div>
    );
  }
}

var POSTS = [
  {title: 'Welcome',
   content: 'This is my first post!'
  },
  {title: 'Mama mia',
   content: 'Yep'
  }
]

ReactDOM.render(
  <AllPosts posts={POSTS} />,
	document.getElementById('root')
);
registerServiceWorker();
