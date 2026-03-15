import type { ReactNode } from 'react';
import styles from './Section.module.css';

export function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={props.id} className={styles.section}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.subtitle ? <p className={styles.subtitle}>{props.subtitle}</p> : null}
      </div>
      <div className={styles.body}>{props.children}</div>
    </section>
  );
}
