import { useRouteError, Link } from 'react-router';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.card}>
        <div className={styles.icon}>🛒</div>
        <h1 className={styles.code}>404</h1>
        <p className={styles.title}>Page Not Found</p>
        <p className={styles.message}>
          The page you are looking for might have been removed or the link is incorrect.
        </p>
        <Link to="/" className={styles.homeButton}>
          Back to Home
        </Link>
        {error && (
          <details className={styles.details}>
            <summary>Technical Details</summary>
            <pre>{error.statusText || error.message}</pre>
          </details>
        )}
      </div>
    </div>
  );
}