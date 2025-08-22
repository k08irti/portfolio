import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/k08irti', // Updated link
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kirti-baliyan-49b88b239/', // Updated link
      icon: <Linkedin size={20} />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kirtibaliyan',
      icon: <Twitter size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:kirtibaliyan21@gmail.com',
      icon: <Mail size={20} />
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Kirti Baliyan</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, 
              functional web applications that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors transform hover:scale-105"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 kirtibaliyan21@gmail.com</p>
              <p>📍 Ghaziabad, Uttar Pradesh, India</p>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center gap-2">
              © 2024 Kirti Baliyan. Made with <Heart size={16} className="text-red-500" /> and lots of coffee.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer