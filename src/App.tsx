import { useAsync } from './lib/useAsync';
import {
  loadAchievements,
  loadCertifications,
  loadInterests,
  loadProfile,
  loadProjects,
  loadSkills,
} from './lib/content';
import styles from './App.module.css';
import { Hero } from './sections/Hero';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { InterestsSection } from './sections/InterestsSection';

export default function App() {
  const profile = useAsync(loadProfile);
  const skills = useAsync(loadSkills);
  const projects = useAsync(loadProjects);
  const achievements = useAsync(loadAchievements);
  const certifications = useAsync(loadCertifications);
  const interests = useAsync(loadInterests);

  const anyError =
    profile.error || skills.error || projects.error || achievements.error || certifications.error || interests.error;

  return (
    <div className={styles.page}>
      <div className={styles.bg} />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>{profile.data?.name ?? 'Portfolio'}</div>
          <nav className={styles.nav}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#certifications">Learning</a>
            <a href="#interests">Interests</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {anyError ? (
          <div className={styles.error}>
            Failed to load data from <code>/data</code>. Run <code>npm run sync:data</code> and check the markdown.
            <pre>{String(anyError.message)}</pre>
          </div>
        ) : null}

        {profile.loading || !profile.data ? (
          <div className={styles.loading}>Loading…</div>
        ) : (
          <Hero profile={profile.data} />
        )}

        {skills.data ? <SkillsSection skills={skills.data} /> : null}
        {projects.data ? <ProjectsSection projects={projects.data} /> : null}
        {achievements.data ? <AchievementsSection achievements={achievements.data} /> : null}
        {certifications.data ? <CertificationsSection certifications={certifications.data} /> : null}
        {interests.data ? <InterestsSection interests={interests.data} /> : null}

        
      </main>
    </div>
  );
}
