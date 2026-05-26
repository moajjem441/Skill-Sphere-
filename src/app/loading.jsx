export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center">
      <span className="loading loading-dots loading-lg text-primary"></span>
      <p className="mt-3 text-gray-500">Loading please wait...</p>
    </div>
  );
}