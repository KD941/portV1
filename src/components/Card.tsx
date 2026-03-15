import type { ReactNode } from 'react';
import styles from './Card.module.css';

export function Card(props: { children: ReactNode; className?: string }) {
  return <div className={[styles.card, props.className].filter(Boolean).join(' ')}>{props.children}</div>;
}
