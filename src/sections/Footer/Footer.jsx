import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>
            © 2025 Insaf Lashari. <br />
            All rights reserved.
        </p>
    </section>
  );
}

export default Footer;