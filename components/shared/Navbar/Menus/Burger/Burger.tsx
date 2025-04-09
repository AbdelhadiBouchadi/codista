import styles from './style.module.scss';
import { VscMenu } from 'react-icons/vsc';

interface BurgerProps {
  openMenu: () => void;
}

const Burger = ({ openMenu }: BurgerProps) => {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className={styles.button}
    >
      <VscMenu />
    </div>
  );
};

export default Burger;
