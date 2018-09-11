import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import posts from '../actions/posts'
import Post from '../components/post';

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.posts()
  }

  render() {
    var loading = this.props.post.postList ? null : 'Loading...';
    var postList = [];
    
    if(this.props.post.postList){
      this.props.post.postList.forEach((item,i)=>{
        postList.push(<Post key={i} title={item.title} body={item.body}/>)
      })
    }
    console.log('postList',postList);

    return (
      <div>
        {loading}
        {postList}
      </div>
    )
  }
}


export default connect(
  ({postList }) => ({
    post: postList
  }),
  {  posts }
)(UserSearch)
