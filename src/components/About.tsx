import { Code2, Database, Server, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Experienced in building end-to-end web applications with modern frameworks',
    },
    {
      icon: Database,
      title: 'Database Expertise',
      description: 'Proficient in MySQL, Oracle, and MongoDB for efficient data management',
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description: 'Strong foundation in Java, Spring Boot, and Node.js for robust server-side solutions',
    },
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Oracle Certified Associate Java SE 8, demonstrating expertise in Java development',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            Enthusiastic and detail-oriented Software Developer with practical experience in building robust web applications,
            managing databases, and generating analytical reports. My hands-on experience includes creating Hospital Management
            Systems, Expense Management Systems, and Online Doctor Platforms.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I specialize in Java technologies including Core Java, JSP, Servlets, Spring Boot, and Hibernate, along with
            expertise in the MERN Stack. I'm passionate about solving complex problems with strong expertise in Data Structures
            and Algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
