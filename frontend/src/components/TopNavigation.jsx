import {
  FaSearch,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const TopNavigation = () => {
  return (
    <div className="flex">
      <ThemeIcon />
      <Search />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

const Search = () => (
  <div className='search flex'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);

export default TopNavigation;
