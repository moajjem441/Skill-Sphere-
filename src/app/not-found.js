import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="text-center bg-base-100 shadow-2xl rounded-3xl p-10 max-w-md w-full">

        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-primary">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">
          Page Not Found
        </h2>


        {/* Description */}
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="btn btn-primary w-full rounded-full"
          >
            Return Home
          </Link>
        </div>

      </div>

    </div>
  );
}