import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PostCard({ id, title, body }) {
  return(
    <article data-testid="PostCard">
      <Link to={`/post/${id}`}>
        <h1>{title}</h1>
      </Link>
      <p>
        {body}
      </p>
    </article>
  );
}

PostCard.defaultProps = {
  title: '',
  body: '',
};

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};