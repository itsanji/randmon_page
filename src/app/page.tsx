import styles from './page.module.css';
import Image from 'next/image';

const githubInfo = {
  username: 'itsanji',
  name: 'Anji',
  location: 'Tokyo, Japan',
  bio: 'Learning hard',
  quote: 'This world is cruel and merciless But its also very beautiful',
  followers: 6,
  following: 13,
  avatar: 'https://avatars.githubusercontent.com/u/76773625?v=4',
  pinned: [
    {
      name: 'quick-markdown-note',
      desc: 'Cross Platform Markdown Quick Note app',
      lang: 'TypeScript',
      url: 'https://github.com/itsanji/quick-markdown-note',
    },
    {
      name: 'emac-movement-for-windows',
      desc: 'Auto Hotkey Config for Emac Key Binding',
      lang: 'AutoHotkey',
      url: 'https://github.com/itsanji/emac-movement-for-windows',
    },
    {
      name: 'netflix_clone',
      desc: 'netflix front-end clone with the movie database API',
      lang: 'TypeScript',
      url: 'https://github.com/itsanji/netflix_clone',
    },
    {
      name: 'rn_todo_serverless',
      desc: 'React Native Todo App that store content in Expo SecureStore. Todo that done will auto deleted in next day',
      lang: 'TypeScript',
      url: 'https://github.com/itsanji/rn_todo_serverless',
    },
    {
      name: 'kanji-app-main',
      desc: 'Kanji - Hán Việt Flip Card written in JQuery',
      lang: 'JavaScript',
      url: 'https://github.com/itsanji/kanji-app-main',
    },
    {
      name: 'react-ts-template-for-bun',
      desc: 'React@18.x with Typescript works for blazing fast Bun',
      lang: 'TypeScript',
      url: 'https://github.com/itsanji/react-ts-template-for-bun',
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className={styles['wavy-background']}>
        <svg viewBox="0 0 2880 320" width="150%" height="200" preserveAspectRatio="none">
          <path
            className={styles.wave1}
            fill="#ffffff"
            fillOpacity="0.6"
            d="M0,224L96,197.3C192,171,384,117,576,117.3C768,117,960,171,1152,186.7C1344,203,1536,181,1728,154.7C1920,128,2112,96,2304,117.3C2496,139,2688,213,2784,250.7L2880,288L2880,320L2784,320C2688,320,2496,320,2304,320C2112,320,1920,320,1728,320C1536,320,1344,320,1152,320C960,320,768,320,576,320C384,320,192,320,96,320L0,320Z"
          />
          <path
            className={styles.wave2}
            fill="#90caf9"
            fillOpacity="0.5"
            d="M0,256L120,240C240,224,480,192,720,186.7C960,181,1200,203,1440,197.3C1680,192,1920,160,2160,149.3C2400,139,2640,149,2760,154.7L2880,160L2880,320L2760,320C2640,320,2400,320,2160,320C1920,320,1680,320,1440,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1>Welcome!</h1>
        <p>The port is opened and working. 🚀</p>
        <p>ポートが正しく転送されている🚀</p>
        <div style={{ marginTop: 40, background: 'rgba(255,255,255,0.8)', borderRadius: 16, padding: 24, maxWidth: 600, boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
          <a href="https://github.com/itsanji" target="_blank" rel="noopener noreferrer">
            <Image
              src={githubInfo.avatar}
              alt="itsanji avatar"
              width={80}
              height={80}
              style={{ borderRadius: '50%', margin: '0 auto 16px auto', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            />
          </a>
          <h2>GitHub: <a href="https://github.com/itsanji" target="_blank" rel="noopener noreferrer">@itsanji</a></h2>
          <p><b>Name:</b> {githubInfo.name}</p>
          <p><b>Location:</b> {githubInfo.location}</p>
          <p><b>Bio:</b> {githubInfo.bio}</p>
          <p><i>&quot;{githubInfo.quote}&quot;</i></p>
          <p><b>Followers:</b> {githubInfo.followers} &nbsp; <b>Following:</b> {githubInfo.following}</p>
          <h3>Pinned Repositories</h3>
          <ul style={{ paddingLeft: 20 }}>
            {githubInfo.pinned.map(repo => (
              <li key={repo.name} style={{ marginBottom: 8 }}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer"><b>{repo.name}</b></a> &mdash; <span>{repo.desc}</span> <span style={{ fontSize: 12, color: '#1976d2' }}>({repo.lang})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
