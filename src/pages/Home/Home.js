import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts, selectPosts } from '../../store/slice/feed';
import Feed from "../../components/Feed";

export default function Home () {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [posts, dispatch]);

  return (
    <main data-testid="Home" role="main">
      <Feed posts={posts} />
    </main>
  );
}