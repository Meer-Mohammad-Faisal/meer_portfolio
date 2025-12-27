import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = ({ darkMode }) => {
  return (
    <section
      id="education"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Education
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-blue-500' : 'bg-blue-600'
            }`}
          />
        </div>

        <div
          className={`p-8 rounded-2xl transition-all transform hover:scale-105 ${
            darkMode
              ? 'bg-gray-800 hover:bg-gray-750'
              : 'bg-gray-50 hover:bg-white hover:shadow-xl'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                darkMode ? 'bg-blue-600/20' : 'bg-blue-100'
              }`}
            >
              <GraduationCap size={32} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            </div>

            <div className="flex-1">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Bachelor of Technology in Computer Science Engineering (AI & ML)
              </h3>

              <p
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Technocrats Institute of Technology, Bhopal
              </p>

              <div className="space-y-2">
                <div
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Calendar size={18} />
                  <span>4th Year (Final Year)</span>
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <MapPin size={18} />
                  <span>Bhopal, Madhya Pradesh</span>
                </div>
              </div>

              <div
                className={`mt-6 pt-6 border-t ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <h4
                  className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Specialization Focus:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Data Structures & Algorithms',
                    'Software Engineering',
                    'Database Systems',
                    'Computer Networks',
                  ].map((subject, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
