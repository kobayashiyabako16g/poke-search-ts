import LogoIcon from "@/assets/icons/logo.svg";

import styles from "./style.module.css";

type Props = {
  title: string;
  links: { label: string; url: string }[];
};

const Header = ({ title, links }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/" className={styles.title}>
          <img src={LogoIcon} alt="title" height={32} />
          <span>{title}</span>
        </a>
        <nav className={styles.nav}>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
