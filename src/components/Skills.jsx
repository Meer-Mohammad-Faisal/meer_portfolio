import { Code2, Palette, Server, Database, Brain, Cloud, Wrench, BookOpen } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['C++', 'Java', 'JavaScript', 'Python'],
      color: 'blue',
    },
    {
      icon: Palette,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
      color: 'cyan',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
      color: 'green',
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Redis', 'Vector DB'],
      color: 'orange',
    },
    {
      icon: Brain,
      title: 'AI/ML & Data',
      skills: ['Machine Learning', 'Computer Vision', 'NLP', 'RAG', 'GenAI', 'NumPy', 'EDA', 'Feature Engineering'],
      color: 'violet',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['Oracle Cloud Infrastructure (OCI)', 'AWS EC2', 'AWS S3'],
      color: 'sky',
    },
    {
      icon: BookOpen,
      title: 'Core CS',
      skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'OOPs', 'Computer Networks'],
      color: 'emerald',
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git & GitHub', 'Postman', 'MLflow', 'VS Code', 'Jupyter Notebook'],
      color: 'slate',
    },
  ];

  const getColorClasses = (color, darkMode) => {
    const colors = {
      blue: {
        bg: darkMode ? 'bg-blue-600/20' : 'bg-blue-100',
        text: darkMode ? 'text-blue-400' : 'text-blue-600',
        border: darkMode ? 'border-blue-500/30' : 'border-blue-200',
      },
      cyan: {
        bg: darkMode ? 'bg-cyan-600/20' : 'bg-cyan-100',
        text: darkMode ? 'text-cyan-400' : 'text-cyan-600',
        border: darkMode ? 'border-cyan-500/30' : 'border-cyan-200',
      },
      green: {
        bg: darkMode ? 'bg-green-600/20' : 'bg-green-100',
        text: darkMode ? 'text-green-400' : 'text-green-600',
        border: darkMode ? 'border-green-500/30' : 'border-green-200',
      },
      orange: {
        bg: darkMode ? 'bg-orange-600/20' : 'bg-orange-100',
        text: darkMode ? 'text-orange-400' : 'text-orange-600',
        border: darkMode ? 'border-orange-500/30' : 'border-orange-200',
      },
      violet: {
        bg: darkMode ? 'bg-violet-600/20' : 'bg-violet-100',
        text: darkMode ? 'text-violet-400' : 'text-violet-600',
        border: darkMode ? 'border-violet-500/30' : 'border-violet-200',
      },
      sky: {
        bg: darkMode ? 'bg-sky-600/20' : 'bg-sky-100',
        text: darkMode ? 'text-sky-400' : 'text-sky-600',
        border: darkMode ? 'border-sky-500/30' : 'border-sky-200',
      },
      emerald: {
        bg: darkMode ? 'bg-emerald-600/20' : 'bg-emerald-100',
        text: darkMode ? 'text-emerald-400' : 'text-emerald-600',
        border: darkMode ? 'border-emerald-500/30' : 'border-emerald-200',
      },
      slate: {
        bg: darkMode ? 'bg-slate-600/20' : 'bg-slate-100',
        text: darkMode ? 'text-slate-400' : 'text-slate-600',
        border: darkMode ? 'border-slate-500/30' : 'border-slate-200',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-blue-500' : 'bg-blue-600'
            }`}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color, darkMode);
            return (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-900 hover:bg-gray-850'
                    : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses.bg}`}
                  >
                    <Icon size={20} className={colorClasses.text} />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        colorClasses.bg
                      } ${colorClasses.text} ${colorClasses.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
