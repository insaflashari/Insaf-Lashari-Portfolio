import styles from "./TopBannerStyles.module.css";
import topBanner from "../../assets/top-banner.png";

function TopBanner() {
  return (
    <div className={styles.bannerContainer}>
      <img src={topBanner} alt="Cool top banner" className={styles.bannerImage} />
      <div className={styles.typingGlow}>Hello World!</div>
    </div>
  );
}

export default TopBanner;
