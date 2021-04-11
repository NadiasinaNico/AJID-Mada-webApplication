import {useState} from "react";
import {useHistory} from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('nico');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const inscription = (e) => {
        e.preventDefault();
        const blog = {title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
          
            setIsPending(false);
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h1>Create New Article</h1>
            <form onSubmit={inscription}>
                <label> Blog Title:
                    <input  
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                     />   
                </label>
                <label>Blog Body</label>
                <textarea  
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog author</label>
                <select value={author}
                onChange={(e) =>setAuthor(e.target.value)}>
                    <option value="nadiasina">Nadiasina</option>
                    <option value="nico">Nico</option>
                </select>
               {!isPending && <button>Add Blog</button> } 
               {isPending && <button disabled>Adding Blog....</button> } 
            </form>
        </div>

    )
}
export default Create;