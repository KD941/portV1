import { Card } from '../components/Card';
import { ImageStrip } from '../components/ImageStrip';
import { Section } from '../components/Section';
import type { Skills } from '../lib/content';
import styles from './SkillsSection.module.css';

export function SkillsSection({ skills }: { skills: Skills }) {
  return (
    <Section id="skills" title="Skills" subtitle={skills.intro}>
      <div className={styles.grid}>
        {skills.sections?.map((sec) => (
          <Card key={sec.title}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>{sec.title}</div>
              <div className={styles.pills}>
                {sec.items?.map((it) => (
                  <span key={it.label} className={styles.pill}>
                    {it.label}
                  </span>
                ))}
              </div>
              <ImageStrip images={sec.images} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
