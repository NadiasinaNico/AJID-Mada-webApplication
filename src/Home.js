
import BlogList from './BlogList';
import useEffech from './useEffech';
const Home = () => {
 const {data: blogs, isPending, error } = useEffech('http://localhost:8000/blogs');
    return (
        <div className="home">
        { error && <div>{ error } </div> }
        { isPending && <div>Loading ... </div>}
        {blogs && <BlogList  blogs={blogs} title='Preparer Vos avenir avec AJID Mada!'/>}
        </div>
    );
}
export default Home;