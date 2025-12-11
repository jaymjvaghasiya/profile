export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'PL/SQL', 'C', 'C++'],
    },
    {
      category: 'Frameworks & Technologies',
      skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'React.js', 'Node.js', 'JSP & Servlets', 'JDBC', 'JasperReports'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'Oracle', 'MongoDB'],
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Other Skills',
      skills: ['GitHub', 'Postman', 'JWT', 'REST API', 'Data Structures & Algorithms', 'OOP'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
