// import React from 'react';

import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog') 

  // Dummy data for blog posts (replace with your actual data)
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor Sit Amet',
      date: 'September 15, 2023',
      author: 'John Doe',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida felis at est varius, id feugiat ex vulputate...',
    },
    {
      id: 2,
      title: 'Vivamus Ultricies Nibh Vel',
      date: 'August 28, 2023',
      author: 'Jane Smith',
      content:
        'Vivamus ultricies nibh vel eros cursus, eu ullamcorper quam consequat. Sed vitae justo id est dictum vulputate...',
    },
    {
      id: 3,
      title: 'Vivamus Ultricies Nibh Vel',
      date: 'August 28, 2023',
      author: 'Jane Smith',
      content:
        'Vivamus ultricies nibh vel eros cursus, eu ullamcorper quam consequat. Sed vitae justo id est dictum vulputate...',
    },
    {
      id: 4,
      title: 'Vivamus Ultricies Nibh Vel',
      date: 'August 28, 2023',
      author: 'Jane Smith',
      content:
        'Vivamus ultricies nibh vel eros cursus, eu ullamcorper quam consequat. Sed vitae justo id est dictum vulputate...',
    },
    {
      id: 5,
      title: 'Vivamus Ultricies Nibh Vel',
      date: 'August 28, 2023',
      author: 'Jane Smith',
      content:
        'Vivamus ultricies nibh vel eros cursus, eu ullamcorper quam consequat. Sed vitae justo id est dictum vulputate...',
    },
    {
      id: 6,
      title: 'Vivamus Ultricies Nibh Vel',
      date: 'August 28, 2023',
      author: 'Jane Smith',
      content:
        'Vivamus ultricies nibh vel eros cursus, eu ullamcorper quam consequat. Sed vitae justo id est dictum vulputate...',
    },
    // Add more blog posts here...
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">
                Published on {post.date} by {post.author}
              </p>
              <p className="mt-4">{post.content}</p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-indigo-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
