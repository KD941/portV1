import { Card } from '../components/Card';
import { ImageStrip } from '../components/ImageStrip';
import { Section } from '../components/Section';
import type { Projects } from '../lib/content';
import styles from './ProjectsSection.module.css';

export function ProjectsSection({ projects }: { projects: Projects }) {
  return (
    <Section id="projects" title="Projects" subtitle={projects.intro}>
      <div className={styles.list}>
        {projects.projects?.map((p) => (
          <Card key={p.name}>
            <div className={styles.card}>
              <div className={styles.top}>
                <div>
                  <div className={styles.name}>{p.name}</div>
                  {p.tagline ? <div className={styles.tagline}>{p.tagline}</div> : null}
                </div>
                {p.links?.length ? (
                  <div className={styles.links}>
                    {p.links.map((l) => (
                      <a key={l.url} className={styles.link} href={l.url} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              {p.description ? <p className={styles.desc}>{p.description}</p> : null}

              {p.tech?.length ? (
                <div className={styles.tech}>
                  {p.tech.map((t) => (
                    <span key={t} className={styles.techPill}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <ImageStrip images={p.images} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
