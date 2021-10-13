import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import Spinner from '../Spinner';
import { selectLoading } from '../../store/slice/loading';
import { submitComment } from '../../store/slice/comments';

import './CommentsForm.css';

export default function CommentsForm ({ postId }) {
  const loading = useSelector(selectLoading('comments'));
  const submitting = useSelector(selectLoading('comment-submit'));
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [valid, setValid] = useState(true);

  const handle = callback => event => {
    callback(event.target.value);
  }

  const submit = event => {
    event.preventDefault();
    if(postId && name && email && body) {
      dispatch(submitComment({ postId, name, email, body }));
      
      setName('');
      setEmail('');
      setBody('');
      setValid(true);
      return;
    }

    setValid(false);
  }

  return (
    <>
    {loading
      ? null
      : <form className="CommentsForm" action="">
          <span className="CommentsForm__title">Leave your comment</span>
          <div className="CommentsForm__field">
            <label htmlFor="comment-name">Name:</label>
            <input
              name="comment-name"
              value={name}
              onChange={handle(setName)}
              type="text"
            />
          </div>
          <div className="CommentsForm__field">
            <label htmlFor="comment-email">Email:</label>
            <input
              name="comment-email"
              value={email}
              onChange={handle(setEmail)}
              type="email"
            />
          </div>
          <div className="CommentsForm__field">
            <label htmlFor="comment-body">Your comment:</label>
            <textarea
              name="comment-body"
              onChange={handle(setBody)}
              value={body}
            />
          </div>
          <p className="CommentsForm__error-msg">
            {valid ? null : '🛈 Please enter all fields before submitting.' }
          </p>
          <button
            className="CommentsForm__button"
            onClick={submit}
          >
              Submit
          </button>
          {submitting ? <Spinner /> : null}
        </form>
    }
    </>
  );
}

CommentsForm.propTypes = {
  postId: PropTypes.number.isRequired,
}