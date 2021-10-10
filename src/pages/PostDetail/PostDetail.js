import PropTypes from 'prop-types';

export default function PostDetail ({ match }) {
  const { id } = match.params;

  return (
    <main data-testid="PostDetail" role="main">
      post detail #{id}
    </main>
  );
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
};