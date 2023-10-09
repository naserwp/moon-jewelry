
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">404 - Not Found</h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
        <img
          src="/path-to-your-404-image.png"
          alt="404 Error"
          className="mt-8 mx-auto w-40 h-40"
        />
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
