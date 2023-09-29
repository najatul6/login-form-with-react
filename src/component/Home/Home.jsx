import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Home = () => {
    const posts = useLoaderData([])

    return (
        <div className="max-w-[1400px] mx-auto py-3 min-h-screen">
            <h2 className="text-center py-2">Post:{posts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 border">
                {
                    posts?.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Home;