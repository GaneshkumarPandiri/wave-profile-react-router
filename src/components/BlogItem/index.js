import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li className="list-blog-item">
      <div className="blog-item">
        <h1 className="title">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <hr />
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
