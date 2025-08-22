import { useState, useEffect } from 'react'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-blue-600" size={24} />,
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
      ]
    },
    {
      title: 'Backend',
      icon: <Database className="text-green-600" size={24} />,
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 78 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Code className="text-purple-600" size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Smartphone className="text-orange-600" size={24} />,
      skills: [
        { name: 'Problem Solving', level: 92 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Project Management', level: 80 },
      ]
    }
  ]

  const SkillBar = ({ skill, index }) => (
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-100 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills