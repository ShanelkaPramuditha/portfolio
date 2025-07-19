export function FullScreenLoader() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-50'>
      <div className='page-loader'>Loading</div>
    </div>
  );
}
