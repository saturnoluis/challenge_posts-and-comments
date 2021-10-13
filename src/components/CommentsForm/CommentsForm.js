import { useSelector } from 'react-redux';
import { selectLoading } from '../../store/slice/loading';
import './CommentsForm.css';

export default function CommentsForm () {
  const loading = useSelector(selectLoading('comments'));
  return (
    <>
    {loading
      ? null
      : <form className="CommentsForm" action="">
          <span className="CommentsForm__title">Leave your comment</span>
          <div className="CommentsForm__field">
            <label htmlFor="comment-name">Name:</label>
            <input name="comment-name" type="text" />
          </div>
          <div className="CommentsForm__field">
            <label htmlFor="comment-email">Email:</label>
            <input name="comment-email" type="email" />
          </div>
          <div className="CommentsForm__field">
            <label htmlFor="comment-body">Your comment:</label>
            <textarea name="comment-body" type="text" />
          </div>
          <button className="CommentsForm__button">Submit</button>
        </form>
    }
    </>
  );
}