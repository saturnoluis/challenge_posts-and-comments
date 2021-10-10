import PropTypes from 'prop-types';

export default function PostCard({ id, title, body }) {
  return(
    <article data-testid="PostCard">
      <h1>{title}</h1>
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