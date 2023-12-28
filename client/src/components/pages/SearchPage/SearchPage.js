import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchPhrase}`);
  };
  return (
    <form
      className="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2"
      onSubmit={handleSubmit}
    >
      <i className="fas fa-search" aria-hidden="true"></i>
      <input
        type="search"
        placeholder="Search..."
        value={searchPhrase}
        onChange={(event) => setSearchPhrase(event.target.value)}
        aria-label="Search"
        className={styles.inputSearch}
      />
    </form>
  );
};

export default SearchPage;
