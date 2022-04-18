import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Next.js - News App</h1>
        <h3>My favourite and latest news articles</h3>
      </div>
      <div className={styles.main}>
        <h3>Credentials</h3>
        <img
          src="https://pbs.twimg.com/profile_images/1345080486385901568/r-Et9x5E_400x400.jpg"
          width={150}
          height={150}
        ></img>
        <h4>PortEXE - Software Engineer</h4>
      </div>
    </div>
  );
}
