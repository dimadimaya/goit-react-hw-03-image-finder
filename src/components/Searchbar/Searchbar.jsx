import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return toast('Please enter a valid request');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <input
            value={this.state.query}
            onChange={this.handleNameChange}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.SearchFormButton}>
            <SearchIcon />
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
