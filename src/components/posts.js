import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from  '../actions/postActions';

const Posts = (props) =>  {
 useEffect(() => {
  props.fetchPosts()
  
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
 console.log(props)
 return (
  <>
  <h1>Posts</h1>
   {
    props.posts.map((item) => 
    <div key={item.id}>
     <h1>{item.title}</h1>
     <p>{item.body}</p>
    </div>
    )
    
   }
  </>
 )
}

const mapStateToProps = state => ({
 posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts)