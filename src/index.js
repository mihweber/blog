import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class AllPosts extends React.Component{
  render(){
    const content = this.props.posts.map((post) =>
      <div className="posts">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {content}
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
