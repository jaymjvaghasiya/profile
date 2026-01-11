import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Expense Manager',
      description: 'A comprehensive Spring Boot-based application for tracking and managing financial transactions with detailed reporting capabilities.',
      features: [
        'User authentication with Spring Security',
        'JasperReports integration for expense reports',
        'Interactive data visualization using Chart.js',
        'Hibernate and MySQL for data management',
      ],
      technologies: ['Spring Boot', 'Spring MVC', 'Hibernate', 'MySQL', 'JasperReports', 'Chart.js'],
      github: 'expense-manager',
    },
    {
      title: 'Employee Management System',
      description: 'A full-stack MERN application for efficiently managing employee data, roles, and departments with real-time updates.',
      features: [
        'CRUD operations with real-time updates',
        'JWT authentication and bcrypt.js security',
        'Role-based access control',
        'Responsive design with React Router',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'employee-app',
      site: 'https://emp-frontend-9nwe.onrender.com/'
    },
    {
      title: 'Hospital Administration System',
      description: 'A comprehensive hospital management solution with modules for patients, doctors, receptionists, and administrators.',
      features: [
        'RESTful APIs for managing patient records',
        'Appointment and billing management',
        'Multiple user role modules',
        'MongoDB-based backend with React.js frontend',
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mongoose', 'REST API'],
      github: 'hospital-administration-system',
    },
    {
      title: 'ATM Management System',
      description: 'A secure ATM simulation system with a graphical user interface and comprehensive transaction management.',
      features: [
        'PIN-based authentication for security',
        'Cash withdrawal, deposit, and balance inquiry',
        'Transaction history tracking',
        'Java Swing GUI for seamless user experience',
      ],
      technologies: ['Java', 'Swing', 'JDBC', 'MySQL', 'OOP Concepts'],
      github: 'atmmanagementsystem',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  {project.github && (
                    <a
                      href={`https://github.com/jaymjvaghasiya/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-600 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  )}
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project?.site ? (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
                  >
                    View Demo
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <a
                    href={`https://github.com/jaymjvaghasiya/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
