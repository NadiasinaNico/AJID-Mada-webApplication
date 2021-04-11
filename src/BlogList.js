import { Link } from "react-router-dom";
const BlogList = ({blogs, title}) => {
    return (
        <div className="bloglist">
         <h1>{ title }</h1>
             {
            blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>{blog.page}</p>
                
                <Link to={`/blog/${blog.id}`}>voir corriger ...
                </Link>
                <p>Written by {blog.author}</p>
                <Link to={`/blog/${blog.id}`}>more ...
                </Link>
                </div>
            )) }
        </div>
    )

}
export default BlogList;