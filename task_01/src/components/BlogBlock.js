import { useNavigate } from "react-router-dom";

export default function BlogBlock({ id, title, content, author, published_at, topic })
{
    const navigate = useNavigate();

    const blockOnClick = () => {
        navigate(`/${id}`);
    }

    return (
        <div onClick={blockOnClick} className="blog-block">
            <h2>{title}</h2>
            <p className="blog-content">{content.substring(0, 97)}...</p>

            <div className="publishing-info">
                <p>{author}</p>
                <p>{published_at}</p>
            </div>

            <p className="blog-topic">{topic}</p>
        </div>
    );
}