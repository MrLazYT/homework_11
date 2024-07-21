import { useSelector } from "react-redux";
import BlogBlock from "./BlogBlock";
import { useNavigate } from "react-router-dom";

export default function BlogList()
{
    const blogs = useSelector((state) => state);
    const navigate = useNavigate();

    const addBlogOnClick = () => {
        navigate('/add-blog');
    }

    return (
        <div>
            <h1>Blogs</h1>
            <div className="blogs-container">
                {blogs.map(blog => {
                    return (
                        <BlogBlock id={blog.id} title={blog.title} content={blog.content} author={blog.author} published_at={blog.published_at} topic={blog.topic}/>
                    )
                })}

                <button className="add-blog" onClick={addBlogOnClick}>Add Blog</button>
            </div>
        </div>
    );
}