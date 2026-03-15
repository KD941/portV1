import styles from './ImageStrip.module.css';

export function ImageStrip(props: { images?: string[] }) {
  if (!props.images?.length) return null;
  return (
    <div className={styles.strip}>
      {props.images.map((src) => (
        <img key={src} className={styles.img} src={`/data/${src}`} alt="" loading="lazy" />
      ))}
    </div>
  );
}
