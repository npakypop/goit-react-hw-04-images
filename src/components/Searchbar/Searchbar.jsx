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
    this.props.onFormSubmit(this.state.searchValue);
    event.target.reset();
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
