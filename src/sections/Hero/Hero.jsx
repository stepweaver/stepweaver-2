import styles from './HeroStyles.module.css';
import heroImg from '../../assets/anon.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/weaver-resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile Picture of Stephen Weaver'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Stephen
          <br />
          Weaver
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href='https://twitter.com/stepweaver1' target='_blank'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/stepweaver' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/stephen-weaver-6221b760/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='linkedin icon' />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for creating modern web applications and solving problems. I'm always looking to level up my skills, excited to work on
          new projects and collaborate with other creators.
        </p>
        <a href={Resume} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
