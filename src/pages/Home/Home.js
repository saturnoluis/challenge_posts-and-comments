import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestFeed, selectRequested, selectFeed } from '../../store/slice/feed';
import { selectLoading } from '../../store/slice/loading';
import Feed from "../../components/Feed";
import Spinner from '../../components/Spinner';
import BackToTop from '../../components/BackToTop';

import './Home.css';

export default function Home () {
  const posts = useSelector(selectFeed);
  const requested = useSelector(selectRequested);
  const loading = useSelector(selectLoading('feed'));
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!requested) {
      dispatch(requestFeed());
    }
  }, [requested, dispatch]);

  return (
    <main className="Home" role="main">
      {loading
        ? <Spinner />
        : <>
            <h1 role="presentation" className="Home__title">Lorem Ipsum</h1>
            <Feed posts={posts} />
            <BackToTop />
          </> 
      }
    </main>
  );
}