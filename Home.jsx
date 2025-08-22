import { Download, ArrowDown } from 'lucide-react'

const Home = () => {
  const handleDownloadResume = () => {
    // Convert Google Drive view link to direct download link
    const driveFileId = '1jIxkN23bf-C8zAE3sIEJb0l2FiR5B0ZA'
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`
    
    window.open(downloadUrl, '_blank')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Kirti Baliyan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold 
                         transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl
                         transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <a
              href="#about"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 
                         px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home