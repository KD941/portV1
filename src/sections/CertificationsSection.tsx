import { Card } from '../components/Card';
import { ImageStrip } from '../components/ImageStrip';
import { Section } from '../components/Section';
import type { Certifications } from '../lib/content';
import styles from './CertificationsSection.module.css';

export function CertificationsSection({ certifications }: { certifications: Certifications }) {
  return (
    <Section id="certifications" title="Certifications & Learning" subtitle={certifications.intro}>
      <div className={styles.list}>
        {certifications.items?.map((c) => (
          <Card key={`${c.title}-${c.date ?? ''}`}>
            <div className={styles.card}>
              <div className={styles.row}>
                <div>
                  <div className={styles.title}>{c.title}</div>
                  {c.issuer ? <div className={styles.issuer}>{c.issuer}</div> : null}
                </div>
                <div className={styles.right}>
                  {c.date ? <div className={styles.date}>{c.date}</div> : null}
                  {c.credentialUrl ? (
                    <a className={styles.cred} href={c.credentialUrl} target="_blank" rel="noreferrer">
                      Credential
                    </a>
                  ) : null}
                </div>
              </div>
              <ImageStrip images={c.images} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
