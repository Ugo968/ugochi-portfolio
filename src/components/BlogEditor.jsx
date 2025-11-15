import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogEditor = ({ blog, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    readTime: '5 min read',
    date: new Date().toISOString().split('T')[0]
  })
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        readTime: blog.readTime || '5 min read',
        date: blog.date || new Date().toISOString().split('T')[0]
      })
    }
  }, [blog])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.excerpt || !formData.content) {
      alert('Please fill in all fields')
      return
    }
    onSave(formData)
  }

  const calculateReadTime = (content) => {
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-lilac-500 bg-clip-text text-transparent mb-4">
            {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
        </motion.div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setPreview(false)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              !preview 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setPreview(true)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              preview 
                ? 'bg-lilac-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Preview
          </button>
        </div>

        {!preview ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Brief description of your blog post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content (Markdown Supported)
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={(e) => {
                  handleChange(e)
                  setFormData(prev => ({
                    ...prev,
                    readTime: calculateReadTime(e.target.value)
                  }))
                }}
                rows="15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono"
                placeholder="Write your blog content here... You can use Markdown!"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-lilac-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {blog ? 'Update Blog Post' : 'Publish Blog Post'}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{formData.title}</h1>
              <div className="flex items-center text-gray-600 mb-8">
                <span>{new Date(formData.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{formData.readTime}</span>
              </div>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {formData.content}
              </ReactMarkdown>
            </article>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogEditor