import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { ACTION_TYPES } from "./store/boilerPlate";

export default function Blog()
{
    const { id } = useParams();
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();
    const blog = blogs.find(blog => blog.id === +id);
    const navigate = useNavigate();

    const editOnClick = () => {
        navigate(`/${id}/edit`);
    }

    const deleteOnClick = () => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: +id
        });

        navigate('/');
    }

    return (
        <div className="blog-container">
            <h1>{blog.title}</h1>

            <div className="button-container">
                <button onClick={editOnClick}>Edit blog</button>
                <button onClick={deleteOnClick}>Delete blog</button>
            </div>
            
            <div className="publishing-info">
                <p>Published by: {blog.author}</p>
                <p>Published at: {blog.published_at}</p>
            </div>

            <p className="blog-content">{blog.content}</p>
            <p className="blog-topic">{blog.topic}</p>
        </div>
    )
}