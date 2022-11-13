import { useState } from 'react';
import './SearchBar.scss';
import { BiSearch } from 'react-icons/bi';
// interface IProps {}

const SearchBar = () => {
  const [text, setText] = useState<string>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="searchBar">
      <p className="searchBar__heading">user list</p>
      <form onSubmit={handleSubmit}>
        <div className="searchBar__textInput__wrapper">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="search user"
            type="text"
            className="searchBar__textInput"
          />
          <button className="searchBar__button" type="submit">
            <BiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
