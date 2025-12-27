import { Code, Brain, Lightbulb, Trophy } from 'lucide-react';

const About = ({ darkMode }) => {
  const highlights = [
    {
      icon: Code,
      title: '450+ Problems Solved',
      description: 'Strong DSA foundation across LeetCode & GeeksforGeeks',
    },
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Hands-on experience with ML, NLP, and GenAI projects',
    },
    {
      icon: Lightbulb,
      title: 'Learn by Building',
      description: 'Translating concepts into production-ready applications',
    },
    {
      icon: Trophy,
      title: 'OCI Certified',
      description: 'Oracle Cloud Infrastructure Generative AI Professional',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-blue-500' : 'bg-blue-600'
            }`}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I'm a 4th-year Computer Science Engineering student at Technocrats Institute of Technology, Bhopal, specializing in Artificial Intelligence and Machine Learning. My journey in software development is driven by a passion for creating impactful solutions that bridge theory and real-world applications.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              With a strong foundation in Data Structures and Algorithms, having solved over 450 problems, I approach software development with a problem-solver's mindset. I believe in learning by doing, which has led me to build multiple full-stack applications, AI-powered systems, and machine learning models.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Currently, I'm actively preparing for Software Engineering roles, focusing on building scalable systems, exploring cloud technologies, and deepening my understanding of system design. My interests span Full-Stack Development, AI/ML, Cloud Computing, and creating efficient, maintainable code architectures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-750'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
