import { useSelector } from 'react-redux';
import { selectLoading } from '../../store/slice/loading';
import './BackToTop.css';

export default function BackToTop () {
  const loading = useSelector(selectLoading('comments'));

  const scrollTop = event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {loading
        ? null
        : <div className="BackToTop" role="presentation">
            <button className="BackToTop__button" onClick={scrollTop}>
              <i className="BackToTop__icon">↑</i>
              BACK<br/>TO TOP
            </button>
          </div>
      }
    </>
  );
}