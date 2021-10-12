import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestSingle, selectRequested, selectSingle } from '../../store/slice/single';
import { selectLoading } from '../../store/slice/loading';
import Comments from '../../components/Comments';

export default function Single ({ match }) {
  const { id } = match.params;

  const single = useSelector(selectSingle);
  const requested = useSelector(selectRequested);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!requested) {
      dispatch(requestSingle(id));
    }
  }, [id, requested, dispatch])

  return (
    <main data-testid="Single" role="main">
      {loading
        ? <h1>Loading...</h1>
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