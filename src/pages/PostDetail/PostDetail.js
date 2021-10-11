import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestSingle, selectRequested, selectSingle } from '../../store/slice/single';
import { selectLoading } from '../../store/slice/loading';

export default function PostDetail ({ match }) {
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
    <main data-testid="PostDetail" role="main">
      {loading
        ? <h1>Loading...</h1>
        : <h1>post detail #{single.id}</h1>
      }
    </main>
  );
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
};