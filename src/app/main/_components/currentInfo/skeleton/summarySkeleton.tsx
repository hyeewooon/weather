export default function SummarySkeleton() {
  const styles /*tw*/ = {
    container: 'flex flex-col items-end',
    background: 'h-[24px] overflow-hidden rounded-md bg-gray-100 relative',
    line: 'h-full w-2/5 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-skeleton-shine pointer-events-none absolute',
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.background} w-[150px]`}>
        <div className={styles.line} />
      </div>
      <div className={`${styles.background} w-[200px]`}>
        <div className={styles.line} />
      </div>
    </div>
  );
}
