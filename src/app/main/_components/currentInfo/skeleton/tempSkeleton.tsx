export default function TempSkeleton() {
  const styles /*tw*/ = {
    background: 'w-[100px] h-[38px] overflow-hidden rounded-md bg-gray-100 relative',
    line: 'h-full w-2/5 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-skeleton-shine pointer-events-none absolute',
  };

  return (
    <div className={styles.background}>
      <div className={styles.line} />
    </div>
  );
}
