import MainMenuBar from './MainMenuBar';
import SecMenuBar from './seconadryMenuBar/SecMenuBar';

const secMenuLinks = [
  { title: 'LinkOne', linkTo: '/linkOne' },
  { title: 'LinkTwo', linkTo: '/linkTwo' },
  { title: 'LinkThree', linkTo: '/linkThree' },
  { title: 'LinkFour', linkTo: '/linkFour' },
];

const Header = () => {
  return (
    <header className="header">
      <SecMenuBar links={secMenuLinks} />
      <MainMenuBar />
    </header>
  );
};

export default Header;
