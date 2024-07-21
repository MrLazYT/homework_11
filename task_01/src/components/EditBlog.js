import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ACTION_TYPES } from "./store/boilerPlate"

export default function EditBlog()
{
    const { id } = useParams();
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();
    const [blog, setBlog] = useState(blogs.find(blog => blog.id === +id));
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch({
            type: ACTION_TYPES.EDIT,
            payload: blog
        });

        navigate(`/${id}`);
    }

    const onTitleChangeHandler = (e) => {
        setBlog({
            ...blog,
            title: e.target.value
        })
    }

    const onContentChangeHandler = (e) => {
        setBlog({
            ...blog,
            content: e.target.value
        })
    }

    const onAuthorChangeHandler = (e) => {
        setBlog({
            ...blog,
            author: e.target.value
        })
    }

    const onPublishedAtChangeHandler = (e) => {
        setBlog({
            ...blog,
            published_at: e.target.value
        })
    }

    const onTopicChangeHandler = (e) => {
        setBlog({
            ...blog,
            topic: e.target.value
        })
    }

    return (
        <div className="container">
            <h1>Edit Blog</h1>

            <form onSubmit={onSubmitHandler}>
                <div className="input-container">
                    <label>Title:</label>
                    <input value={blog.title} onChange={onTitleChangeHandler}/>
                </div>

                <div className="input-container">
                    <label>Content:</label>
                    <textarea value={blog.content} onChange={onContentChangeHandler}/>
                </div>

                <div className="input-container">
                    <label>Author:</label>
                    <input value={blog.author} onChange={onAuthorChangeHandler}/>
                </div>

                <div className="input-container">
                    <label>Published At:</label>
                    <input type="date" value={blog.published_at} onChange={onPublishedAtChangeHandler}/>
                </div>

                <div className="input-container">
                    <label>Topic:</label>
                    <input value={blog.topic} onChange={onTopicChangeHandler}/>
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
    );
}