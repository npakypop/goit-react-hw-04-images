import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEsc);
  }

  closeEsc = event => {
    if (event.code === 'Escape') {
      this.props.setModalImg('');
    }
  };

  overlayCLick = event => {
    if (event.target === event.currentTarget) {
      this.props.setModalImg('');
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.Overlay} onClick={this.overlayCLick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  setModalImg: PropTypes.func.isRequired,
};
