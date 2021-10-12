import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestComments, selectRequested, selectComments } from '../../store/slice/comments';
import { selectLoading } from '../../store/slice/loading';

export default function Comments ({ postId }) {
  const comments = useSelector(selectComments);
  const requested = useSelector(selectRequested);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!requested) {
      dispatch(requestComments(postId));
    }
  }, [postId, requested, dispatch])

  return (
    <aside className="Comments">
      {loading
        ? <h2>Loading comments...</h2>
        : <ul>
            {comments.map(({ id, name, email, body }) =>
              <li key={id}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{body}</p>
                <hr />
              </li>
            )}
          </ul>
      }
    </aside>
  );
}

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};