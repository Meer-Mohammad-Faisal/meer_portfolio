import { useState } from 'react';
import { Mail, Github, Linkedin, Code2, Award, Send, CheckCircle } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formElement = e.target;
      const formDataToSend = new FormData(formElement);

      const senderEmail = formDataToSend.get('email');

      formDataToSend.append('_subject', 'New message from Portfolio');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      if (typeof senderEmail === 'string' && senderEmail.trim()) {
        formDataToSend.append('_replyto', senderEmail.trim());
      }

      const response = await fetch('https://formsubmit.co/ajax/fmd35585@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        await response.json().catch(() => null);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (err) {
      setError('Failed to send email. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Meer-Mohammad-Faisal',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/meer-faisal/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/Meerfaisal/',
      label: 'LeetCode',
      color: 'hover:text-orange-400',
    },
    {
      icon: Award,
      href: 'https://www.geeksforgeeks.org/user/fmd350g0i',
      label: 'GeeksforGeeks',
      color: 'hover:text-green-400',
    },
    {
      icon: Mail,
      href: 'mailto:fmd35585@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
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
            Let's build something impactful together. I'm always open to discussing new projects, opportunities, and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } border`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } border`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  } border`}
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 ${
                  isSubmitted
                    ? 'bg-green-600 cursor-not-allowed'
                    : isLoading
                    ? 'bg-blue-500 cursor-wait'
                    : darkMode
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : isLoading ? (
                  <>
                    <Send size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </form>
          </div>

          <div className="space-y-8">
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
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all transform hover:scale-105 ${
                        darkMode
                          ? 'bg-gray-800 hover:bg-gray-750'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          darkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}
                      >
                        <Icon
                          size={24}
                          className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} ${
                            link.color
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {link.label}
                        </p>
                        <p
                          className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {link.label === 'Email'
                            ? 'fmd35585@gmail.com'
                            : `@${link.label.toLowerCase()}`}
                        </p>
                      </div>
                    </a>
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
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Current Status
              </h3>
              <div className="space-y-3">
                <div
                  className={`flex items-center gap-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Open to opportunities</span>
                </div>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Actively seeking Software Engineering roles and internships. Available for freelance projects and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
