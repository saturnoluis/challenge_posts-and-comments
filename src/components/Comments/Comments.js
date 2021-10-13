import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestComments, selectRequested, selectComments, cleanComments } from '../../store/slice/comments';
import { selectLoading } from '../../store/slice/loading';
import Spinner from '../Spinner';

import './Comments.css';

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
    <>
      {loading 
        ? <Spinner />
        : <aside className="Comments">
            <span className="Comments__title">Comments</span>
            <ul className="Comments__list">
              {comments.map(({ id, name, email, body }) =>
                <li className="Comments__single" key={id}>
                  <p className="Comments__single__name">{name}</p>
                  <p className="Comments__single__body">"{body}"</p>
                  <p className="Comments__single__email">{email}</p>
                </li>
              )}
            </ul>
          </aside>
      }
    </>
  );
}

Comments.propTypes = {
  postId: PropTypes.number,
};