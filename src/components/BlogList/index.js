import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(blogItem => (
        <BlogItem blogItem={blogItem} key={blogItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
