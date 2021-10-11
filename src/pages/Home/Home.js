import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts, selectLoading, selectPosts } from '../../store/slice/feed';
import Feed from "../../components/Feed";

export default function Home () {
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [posts, dispatch]);

  return (
    <main data-testid="Home" role="main">
      {loading
        ? <h1>Loading...</h1>
        : <Feed posts={posts} />
      }
    </main>
  );
}