import PropTypes from 'prop-types';
import PostCard from '../PostCard';

export default function Feed ({ posts }) {
  return (
    <ul data-testid="Feed">
      {posts.map(({ id, title, body }) =>
        <li key={id}>
          <PostCard id={id} title={title} body={body} />
        </li>
      )}
    </ul>
  );
}

Feed.defaultProps = {
  posts: [],
};

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }))
};