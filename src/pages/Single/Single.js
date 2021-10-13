import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cleanSingle, requestSingle, selectRequested, selectSingle } from '../../store/slice/single';
import { selectLoading } from '../../store/slice/loading';
import CommentsForm from '../../components/CommentsForm';
import BackToTop from '../../components/BackToTop';
import Comments from '../../components/Comments';
import Spinner from '../../components/Spinner';

import './Single.css';

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
    <main className="Single" role="main">
      {loading
        ? <Spinner />
        : <>
            <article className="Single__post">
              <Link className="Single__go-back" to="/">⮘ BACK</Link>
              <h1 className="Single__title">{single.title}</h1>
              <p className="Single__body">{single.body}</p>
              <div className="Single__hero">
                <img src={`https://picsum.photos/id/${id}/240/240`} alt={single.title} />
              </div>
            </article>
            <Comments postId={single.id} />
            <CommentsForm />
            <BackToTop />
          </>
      }
    </main>
  );
}

Single.propTypes = {
  match: PropTypes.object.isRequired,
};