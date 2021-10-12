import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestComments, selectRequested, selectComments, cleanComments } from '../../store/slice/comments';
import { selectLoading } from '../../store/slice/loading';
import Spinner from '../Spinner';

export default function Comments ({ postId }) {
  const comments = useSelector(selectComments);
  const requested = useSelector(selectRequested);
  const loading = useSelector(selectLoading('comments'));
  const dispatch = useDispatch();

  useEffect(() => {
    if(!requested && postId) {
      dispatch(requestComments(postId));
    }
  }, [postId, requested, dispatch])

  useEffect(() => {
    return () => dispatch(cleanComments());
  }, [postId, dispatch]);

  return (
    <aside className="Comments">
      {loading
        ? <Spinner />
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
  postId: PropTypes.number,
};