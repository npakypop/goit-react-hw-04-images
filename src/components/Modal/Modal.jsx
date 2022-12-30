import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ setModalImg, largeImageURL }) => {
  useEffect(() => {
    const closeEsc = event => {
      if (event.code === 'Escape') {
        setModalImg('');
      }
    };
    window.addEventListener('keydown', closeEsc);
    return () => window.removeEventListener('keydown', closeEsc);
  }, [setModalImg]);

  const overlayCLick = event => {
    if (event.target === event.currentTarget) {
      setModalImg('');
    }
  };

  return (
    <div className={css.Overlay} onClick={overlayCLick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  setModalImg: PropTypes.func.isRequired,
};
