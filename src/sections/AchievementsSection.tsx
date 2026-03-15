import { Card } from '../components/Card';
import { ImageStrip } from '../components/ImageStrip';
import { Section } from '../components/Section';
import type { Achievements } from '../lib/content';
import styles from './AchievementsSection.module.css';

export function AchievementsSection({ achievements }: { achievements: Achievements }) {
  return (
    <Section id="achievements" title="Achievements" subtitle={achievements.intro}>
      <div className={styles.grid}>
        {achievements.achievements?.map((a) => (
          <Card key={`${a.title}-${a.date ?? ''}`}>
            <div className={styles.card}>
              <div className={styles.titleRow}>
                <div className={styles.title}>{a.title}</div>
                {a.date ? <div className={styles.date}>{a.date}</div> : null}
              </div>
              {a.org ? <div className={styles.org}>{a.org}</div> : null}
              {a.description ? <p className={styles.desc}>{a.description}</p> : null}
              <ImageStrip images={a.images} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
