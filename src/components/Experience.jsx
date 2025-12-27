import { Briefcase, Award, Code } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const experience = {
    role: 'Backend Developer Intern',
    company: 'Tech Company',
    duration: 'Recent',
    responsibilities: [
      'Developed backend services using Node.js for scalable applications',
      'Designed scalable MongoDB schemas for efficient data management',
      'Implemented authentication & authorization using Firebase',
      'Optimized API performance and reliability',
      'Collaborated with frontend and blockchain teams',
      'Deployed services on AWS EC2',
      'Managed file storage via AWS S3',
      'Conducted testing, debugging, and optimization',
    ],
  };

  const achievements = [
    {
      icon: Award,
      title: 'Oracle Cloud Infrastructure (OCI) Generative AI Professional',
      description: 'Certified in OCI GenAI technologies and cloud infrastructure',
    },
    {
      icon: Code,
      title: '450+ DSA Problems Solved',
      description: 'Strong problem-solving track record on LeetCode & GeeksforGeeks',
    },
    {
      icon: Briefcase,
      title: 'Multiple Production Projects',
      description: 'Built and deployed full-stack and AI-powered applications',
    },
  ];

  const dsaStats = [
    { category: 'Arrays', level: 90 },
    { category: 'Two Pointer', level: 85 },
    { category: 'Sliding Window', level: 80 },
    { category: 'Trees', level: 85 },
    { category: 'Graphs', level: 80 },
    { category: 'Dynamic Programming', level: 75 },
    { category: 'Bit Manipulation', level: 70 },
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Experience & Achievements
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-blue-500' : 'bg-blue-600'
            }`}
          />
        </div>

        <div className="space-y-12">
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  darkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}
              >
                <Briefcase size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-bold mb-1 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {experience.role}
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {experience.company} • {experience.duration}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4
                className={`font-semibold text-lg mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Key Responsibilities:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <span className={`text-sm mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      ✓
                    </span>
                    <span className="text-sm">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                      darkMode
                        ? 'bg-gray-900 hover:bg-gray-850'
                        : 'bg-white hover:shadow-lg'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        darkMode ? 'bg-green-600/20' : 'bg-green-100'
                      }`}
                    >
                      <Icon size={24} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                    </div>
                    <h4
                      className={`font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {achievement.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              DSA & Problem Solving
            </h3>
            <p
              className={`text-lg mb-6 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              450+ problems solved with strong proficiency in:
            </p>
            <div className="space-y-4">
              {dsaStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {stat.category}
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      {stat.level}%
                    </span>
                  </div>
                  <div
                    className={`h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-1000"
                      style={{ width: `${stat.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
