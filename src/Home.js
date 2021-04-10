import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
const [blogs, setBlogs] = useState([

    { "title": "Math cours",
            "author": "nadiasina",
            "body": "Lorem ipsum dolor sit niam illo beatae modi tempora expedita quaerat laboriosam reiciendis, blanditiis perferendis!",
            "id": 1,
            "page": "300pages"
            
        },
        { "title": "Maths Terminales",
            "author": "nadiasina",
            "body": "Lorem ipsum dolor sit ametconsectetur adipisicing elitatae modi tempora expedita quaerat laboriosam reiciendis, blanditiis perferendis!",
            "id": 1,
            "page": "200 pages"
           
        },
        { "title": "Maths 3em",
          "author": "nadiasina",
            "body": "Lorem ipsum doharum repellat dolorum reprehenderit lo beatae modi tempora expedita quaerat laboriosam reiciendis, blanditiis perferendis!",
            "id": 1,
            "page": "400pages"
           
        },
        { "title": "Maths Concours ENI",
          "author": "nico",
            "body": "Reussir Vos aux concour ENI Livre Maths",
            "id": 1,
            "page": "300pages"
            
        }

]);

const [isPending, setIsPending] = useState(true);

const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlog);
}
useEffect(() => {
    setTimeout(() => {
            setBlogs(blogs);
            setIsPending(false);
         
    }, 1000);
})

    return (
        <div className="home">
        { isPending && <div>Loading ... </div>}
        <BlogList  blogs={blogs} title='Preparer Vos avenir avec AJID Mada!' handleDelete={handleDelete}/>
       
        </div>
    );
}
export default Home;