import PropTypes from 'prop-types'

const Post = ({ post }) => {
    const { userId, title, body } = post;

    return (
        <div className="px-5">
            <div className="h-full px-3 py-2 space-y-2 bg-[#319cf4] rounded-xl shadow-2xl shadow-black">
                <h2 className="text-lg font-bold text-white capitalize ">Id No : <span className='text-[#bd1a0e88]'>{userId}</span></h2>
                <h2 className="text-lg font-bold text-white capitalize">Title : <span className='text-[#4534ff]'>{title}</span></h2>
                <p className="text-white capitalize font-bold">Details : <span className="text-[#3ad4ff]">{body}</span></p>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;