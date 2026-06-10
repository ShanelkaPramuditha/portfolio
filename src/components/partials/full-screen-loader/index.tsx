export function FullScreenLoader() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <div className='page-loader'>Loading</div>
    </div>
  );
}
