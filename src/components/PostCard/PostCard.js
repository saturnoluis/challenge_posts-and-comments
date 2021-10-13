import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PostCard.css';

export default function PostCard({ id, title, body }) {
  return(
    <article className="PostCard">
      <Link to={`/post/${id}`} className="PostCard__title">
        {title}
      </Link>
      <p className="PostCard__body">
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