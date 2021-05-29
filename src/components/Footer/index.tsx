import styles from './footer.module.scss';
import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com 💜 por &nbsp;
        <Link href="https://github.com/luisoliveira1003">
          <a target="_blank">Luis Oliveira</a>
        </Link>
      </p>
    </footer>
  );
}
