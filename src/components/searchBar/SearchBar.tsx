import { useState } from 'react';
import './SearchBar.scss';
import { BiSearch } from 'react-icons/bi';
import TextInput from '../textInput/textInput';
// interface IProps {}

const SearchBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className="searchBar">
      <p className="heading">user list</p>
      <form onSubmit={handleSubmit}>
        <div className="textInput__wrapper">
          <TextInput placeholder="search here" onChange={handleChange} />
          <button className="btn" type="submit">
            <BiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
