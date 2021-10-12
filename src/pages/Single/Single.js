import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cleanSingle, requestSingle, selectRequested, selectSingle } from '../../store/slice/single';
import { selectLoading } from '../../store/slice/loading';
import Comments from '../../components/Comments';
import Spinner from '../../components/Spinner';

export default function Single ({ match }) {
  const { id } = match.params;

  const single = useSelector(selectSingle);
  const requested = useSelector(selectRequested);
  const loading = useSelector(selectLoading('single'));
  const dispatch = useDispatch();

  useEffect(() => {
    if(!requested) {
      dispatch(requestSingle(Number.parseInt(id)));
    }
  }, [id, requested, dispatch])

  useEffect(() => {
    return () => dispatch(cleanSingle());
  }, [dispatch]);

  return (
    <main data-testid="Single" role="main">
      {loading
        ? <Spinner />
        : <>
            <h1>{single.title}</h1>
            <p>{single.body}</p>
            <hr />
            <Comments postId={single.id} />
          </>
      }
    </main>
  );
}

Single.propTypes = {
  match: PropTypes.object.isRequired,
};