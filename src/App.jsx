import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import RibbonBackground from './components/RibbonBackground.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import BlogAdminPage from './pages/BlogAdminPage.jsx'
import BlogPost from './components/BlogPost.jsx'

function App() {
  const [blogs, setBlogs] = React.useState([])

  React.useEffect(() => {
    const savedBlogs = localStorage.getItem('ugochi-blogs')
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs))
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-lilac-50 to-white relative overflow-hidden">
        <RibbonBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin/blog" element={<BlogAdminPage />} />
          <Route 
            path="/blog/:id" 
            element={<BlogPostWrapper blogs={blogs} />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

// Wrapper component to pass blogs to BlogPost
function BlogPostWrapper({ blogs }) {
  const blogId = window.location.pathname.split('/').pop()
  const blog = blogs.find(b => b.id === blogId)
  return <BlogPost blog={blog} />
}

export default App