import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const savedBlogs = localStorage.getItem('ugochi-blogs')
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs))
    }
  }, [])

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-lilac-500 bg-clip-text text-transparent mb-6">
            My Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, virtual assistance, and more.
          </p>
          {/* Remove the public admin button */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-pink-500 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span>{blog.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}

          {blogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No blog posts yet</h3>
              <p className="text-gray-600 mb-6">Check back soon for amazing content!</p>
              {/* Remove the public admin creation button */}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Blog