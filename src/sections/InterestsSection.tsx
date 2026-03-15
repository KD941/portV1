import { Card } from '../components/Card';
import { ImageStrip } from '../components/ImageStrip';
import { Section } from '../components/Section';
import type { Interests } from '../lib/content';
import styles from './InterestsSection.module.css';

export function InterestsSection({ interests }: { interests: Interests }) {
  return (
    <Section id="interests" title="Interests" subtitle={interests.intro}>
      <div className={styles.grid}>
        {interests.interests?.map((i) => (
          <Card key={i.title}>
            <div className={styles.card}>
              <div className={styles.title}>{i.title}</div>
              {i.description ? <p className={styles.desc}>{i.description}</p> : null}
              <ImageStrip images={i.images} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
