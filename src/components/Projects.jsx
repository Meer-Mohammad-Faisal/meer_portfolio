import { Code, Sparkles, MessageSquare, BarChart3, Hand } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      icon: Code,
      title: 'AI-Powered LeetCode Assistant',
      description: 'Intelligent coding companion that provides AI-based problem explanations, code generation, optimization suggestions, and submission tracking to enhance problem-solving skills.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'OpenAI API'],
      features: [
        'AI-based problem explanation',
        'Code generation & optimization',
        'Smart submission tracking',
        'Performance analytics',
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: MessageSquare,
      title: 'FaisGPT – Conversational AI',
      description: 'Context-aware conversational AI system built with advanced NLP and GenAI capabilities, featuring prompt-driven architecture for intelligent responses.',
      tech: ['Python', 'NLP', 'GenAI', 'Transformers'],
      features: [
        'Context-aware conversations',
        'Natural language understanding',
        'Prompt-driven responses',
        'Multi-turn dialogue management',
      ],
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      icon: BarChart3,
      title: 'Machine Learning Projects',
      description: 'End-to-end ML projects covering the complete lifecycle from data exploration to model deployment, including predictive models for real-world applications.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'House Price Prediction',
        'Heart Attack Risk Analysis',
        'Comprehensive EDA & Feature Engineering',
        'Model training & evaluation',
      ],
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: Hand,
      title: 'Hand Mouse Control',
      description: 'Computer vision application that enables hands-free computer control using finger gestures. Replaces traditional mouse with intuitive hand movements for clicks, scrolling, and drag-drop.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      features: [
        'Gesture-based cursor control',
        'Left & right click detection',
        'Drag and drop functionality',
        'Scroll gestures',
      ],
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'Full-Stack Web Applications',
      description: 'Modern, scalable web applications built with the MERN stack, featuring responsive design, real-time updates, and robust backend architecture.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: [
        'RESTful API design',
        'Authentication & authorization',
        'Real-time data updates',
        'Responsive UI/UX',
      ],
      gradient: 'from-pink-600 to-rose-600',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded-full mb-4 ${
              darkMode ? 'bg-blue-500' : 'bg-blue-600'
            }`}
          />
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A collection of projects showcasing my expertise in full-stack development, AI/ML, and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-750'
                    : 'bg-gray-50 hover:bg-white shadow-lg'
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${project.gradient}`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4
                      className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`text-sm flex items-start gap-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <span className={`text-xs mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            ▸
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4
                      className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
