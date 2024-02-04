import PropTypes from 'prop-types'

const Post = ({ post }) => {
    const { userId, title, body } = post;

    return (
        <div className="p-5">
            <div className="border h-full p-2 space-y-2 bg-blue-400 rounded-xl drop-shadow-2xl">
                <h2 className="text-lg font-medium text-green-600">Id No : {userId}</h2>
                <h2 className="text-lg font-medium text-white">Title : <span className='text-[#747]'>{title}</span></h2>
                <p className="text-white">Details : <span className="text-[#501fb0]">{body}</span></p>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;