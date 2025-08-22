import { GraduationCap, Briefcase, User } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Summary</h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a fresher and a last-year student, passionate about becoming a full stack developer. 
                  I love solving complex problems and turning ideas into reality through clean, 
                  efficient code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <GraduationCap className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-800">Bachelor of Computer Science</h4>
                    <p className="text-gray-600">IMS Engineering College • 2022-2026</p>
                    <p className="text-sm text-gray-500">GPA: 7.89</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Briefcase className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Frontend Developer</h4>
                    <p className="text-gray-600">CyberforeX & Associates • August 2025 - Present</p>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Web Developer</h4>
                    <p className="text-gray-600">CodSoft • 1 July 2025 - 31 July 2025</p>
                    <p className="text-sm text-gray-500">Developed and maintained web applications, completing 3 tasks during an internship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-4 bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Kirti Baliyan</h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About