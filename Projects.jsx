import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Travel Website',
      description: 'A full-stack travel website allowing users to browse destinations, book trips, and manage reservations. Features include interactive maps, user reviews, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80', // Keep the image for now, or suggest a travel-related one
      techStack: ['React', 'Express.js', 'PostgreSQL', 'Mapbox API'],
      githubLink: 'https://github.com/k08irti/Major_Project1', // Updated link
    },
    {
      title: 'Spotify Clone',
      description: 'A front-end clone of the Spotify web player interface, demonstrating responsive design and interactive UI elements using pure HTML and CSS.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop&q=80', // New image for Spotify clone
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/k08irti/Mini-project', // Updated link
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&q=80',
      techStack: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubLink: 'https://github.com/k08irti/ReactMiniProject', // Updated link
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Removed date display */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects