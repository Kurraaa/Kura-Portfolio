import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/proficon.jpg-modified.png"; //Ändern zu deinem Discord PF
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import discordDark from "../../assets/DarkDiscordIcon.svg";
import discordLight from "../../assets/discordlogowhite.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme == "light" ? sun : moon;
  const twitterIcon = theme == "light" ? twitterLight : twitterDark;
  const githubIcon = theme == "light" ? githubLight : githubDark;
  const discordserverIcon = theme == "light" ? discordDark : discordLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Porifile Pic from Discord"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Kura</h1>
        <h2>Hobby Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={discordserverIcon} alt="Discord Server Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hey ich bin Kura, ich spiele gerne mit sachen in der IT so wie
          Programieren oder in meinem Homelab neue Self Hostet Apps.
        </p>
        <a href="https://discord.com" target="_blank">
          <button className="hover">Arkosmos</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
