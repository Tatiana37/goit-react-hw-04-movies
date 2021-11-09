import { useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {toast} from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';
import pathToSprite from "../../images/sprite.svg";


export default function Searchbar({ onSubmit}) {
  
  const [searchValue, setSearchValue] = useState('');

  const history = useHistory();
  const location = useLocation();

    const handleSearchChange = e => {
      setSearchValue(e.target.value.toLowerCase())
      
    }

    const handleSearchSubmit = e => {
    e.preventDefault();
    if(searchValue.trim() === ''){
      toast.error('Please, enter the search query!', {
        position: toast.POSITION.TOP_LEFT,
        theme: "colored",
      })
      return;
      }
      history.push({ ...location, search: `?query=${searchValue}` });
      onSubmit(searchValue);
      setSearchValue('');
    }

        return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleSearchSubmit}>
              <button type="submit" className={s.SearchFormButton}>
                <svg className={s.icon}>
                  <use href={pathToSprite + '#icon-search'}></use>
                </svg>
    </button>

    <input
      className={s.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
      onChange={handleSearchChange}
      value={searchValue}
    />
  </form>
</header>
    )
    }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

