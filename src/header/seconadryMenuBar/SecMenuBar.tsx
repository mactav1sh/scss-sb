interface IProps {
  links: {
    title: string;
    linkTo: string;
  }[];
}

const SecMenuBar = ({ links }: IProps) => {
  return (
    <nav className="menu-sec">
      <ul>
        {links.map((link) => (
          <li>
            <a href={`/${link.linkTo}`} className="menu--sec--link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SecMenuBar;
