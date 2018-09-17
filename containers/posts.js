import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import posts from '../actions/posts'
import Post from '../components/post'
import img from '../assets/loader.gif';

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.posts()
  }

  render() {
    var loading = this.props.post.postList.length ? null : <img src={img} id='loader2'/>
    var postList = []

    if (this.props.post.postList) {
      this.props.post.postList.forEach((item, i) => {
        postList.push(<Post key={i} title={item.title} body={item.body} />)
      })
    }

    return (
      <div className='post_holder'>
        {loading}
        {postList}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    post: state.postList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    posts: () => dispatch(posts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch)
