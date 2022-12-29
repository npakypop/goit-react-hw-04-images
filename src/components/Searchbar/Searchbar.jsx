import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  inputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handelSubmit = event => {
    event.preventDefault();
    //================================================
    if (this.state.searchValue === '') {
      alert('Please type somthing in field');
      return;
    }
    // после сабмита формы происходит ресет поля формы,  в стейт:квери остается запрос и при повторном сабмите без ввода в поле запроса онФормСабмит записывает в стейт пустой массив но при этом в квери стейта остается предыдущий запрос и немного все ломается. Я так и не разобрался как правильнее переписать квери так как в таком случает инпутЧендж не срабатывает. Решил убрать ресет формы и оставлять запрос в поле, тогда при попытке сделать сабмит пустой строки ее надо будет стереть , сработает инпутчендж и запишет пустою строку в квери
    //============================================
    this.props.onFormSubmit(this.state.searchValue);
    // event.target.reset();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handelSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormIut}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
