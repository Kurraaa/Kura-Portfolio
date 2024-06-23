import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Kura. <br />
        All rights reserved <br />
        All Icons Are From Icons8.de /.com
      </p>
    </section>
  );
}

export default Footer;
