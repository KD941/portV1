import ReactMarkdown from 'react-markdown';
import { Card } from '../components/Card';
import styles from './Hero.module.css';
import type { Profile } from '../lib/content';

export function Hero({ profile }: { profile: Profile }) {
  return (
    <div className={styles.wrap}>
      <Card>
        <div className={styles.hero}>
          <div className={styles.avatarWrap}>
            {profile.avatar ? (
              <img className={styles.avatar} src={`/data/${profile.avatar}`} alt={`${profile.name} profile`} />
            ) : (
              <div className={styles.avatarPlaceholder} />
            )}
          </div>

          <div className={styles.main}>
            <div className={styles.metaTop}>
              {profile.location ? <div className={styles.location}>{profile.location}</div> : null}
              <h1 className={styles.name}>{profile.name}</h1>
              {profile.headline ? <div className={styles.headline}>{profile.headline}</div> : null}
            </div>

            <div className={styles.bio}>
              <ReactMarkdown>{profile.bioMd}</ReactMarkdown>
            </div>

            {profile.links?.length ? (
              <div className={styles.links}>
                {profile.links.map((l) => (
                  <a key={l.url} className={styles.link} href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
}
