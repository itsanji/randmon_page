'use client';

import styles from './page.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        // Directly fetch README content from GitHub API
        const readmeResponse = await fetch(`https://api.github.com/repos/${githubInfo.username}/${githubInfo.username}/readme`);

        if (readmeResponse.ok) {
          const readmeData = await readmeResponse.json();

          // Decode the base64 content with proper UTF-8 handling
          const content = decodeURIComponent(escape(atob(readmeData.content)));
          setReadmeContent(content);
        } else {
          setReadmeContent('# Welcome to my GitHub Profile!\n\nThis is a placeholder for your GitHub profile README content.\n\n## About Me\n\nI am a developer passionate about learning and creating.\n\n## Skills\n\n- JavaScript/TypeScript\n- React\n- Next.js\n- And more...\n\n## Contact\n\nFeel free to reach out!');
        }
      } catch (error) {
        console.error('Error fetching README:', error);
        setReadmeContent('# Welcome to my GitHub Profile!\n\nUnable to load README content. Please check your GitHub profile repository.\n\n## About Me\n\nI am a developer passionate about learning and creating.\n\n## Skills\n\n- JavaScript/TypeScript\n- React\n- Next.js\n- And more...\n\n## Contact\n\nFeel free to reach out!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReadme();
  }, []);

  // Enhanced markdown to HTML converter
  const convertMarkdownToHtml = (markdown: string) => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Horizontal rules
      .replace(/^---$/gim, '<hr>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" style="max-width: 100%; height: auto;" />')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Line breaks
      .replace(/\n\n/gim, '</p><p>')
      .replace(/\n/gim, '<br>')
      // Wrap in paragraphs
      .replace(/^(?!<[h|p|a|code|strong|em|br|img|hr]).*$/gim, '<p>$&</p>')
      // Clean up empty paragraphs
      .replace(/<p><\/p>/gim, '')
      .replace(/<p><br><\/p>/gim, '<br>');
  };

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

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Column - Current Information */}
          <div className={styles.leftColumn}>
            <div className={styles.infoCard}>
              <a href="https://github.com/itsanji" target="_blank" rel="noopener noreferrer">
                <Image
                  src={githubInfo.avatar}
                  alt="itsanji avatar"
                  width={80}
                  height={80}
                  className={styles.avatar}
                />
              </a>
              <h2>GitHub: <a href="https://github.com/itsanji" target="_blank" rel="noopener noreferrer">@itsanji</a></h2>
              <p><b>Name:</b> {githubInfo.name}</p>
              <p><b>Location:</b> {githubInfo.location}</p>
              <p><b>Bio:</b> {githubInfo.bio}</p>
              <p><i>&quot;{githubInfo.quote}&quot;</i></p>
              <p><b>Followers:</b> {githubInfo.followers} &nbsp; <b>Following:</b> {githubInfo.following}</p>
              <h3>Pinned Repositories</h3>
              <ul className={styles.repoList}>
                {githubInfo.pinned.map(repo => (
                  <li key={repo.name}>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer"><b>{repo.name}</b></a> &mdash; <span>{repo.desc}</span> <span className={styles.lang}>({repo.lang})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - GitHub README Content */}
          <div className={styles.rightColumn}>
            <div className={styles.readmeCard}>
              <h2>GitHub Profile README</h2>
              {isLoading ? (
                <div className={styles.loading}>Loading README content...</div>
              ) : (
                <div
                  className={styles.readmeContent}
                  dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(readmeContent) }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
