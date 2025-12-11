import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Shree Infotech',
      period: 'September 2024 - Present',
      description: [
        'Worked on Spring MVC and Spring Boot projects, developing dynamic web applications',
        'Gained practical experience in creating interactive web pages for enhanced user engagement',
        'Managed user sessions effectively to ensure security and seamless navigation',
      ],
      current: true,
    },
    {
      title: 'Software Engineer Intern',
      company: 'Arth Infosoft Pvt. Ltd.',
      period: 'January 2024 - May 2024',
      description: [
        'Developed a Hospital Administration Management Web App using the MERN stack',
        'Built and integrated user, doctor, receptionist, and admin modules',
        'Gained hands-on experience in MongoDB, Express.js, React.js, and Node.js',
        'Improved knowledge of RESTful APIs, database management, and authentication mechanisms',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-400"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-5 top-0 w-6 h-6 bg-gray-800 rounded-full border-4 border-white shadow-md"></div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-gray-800 font-semibold flex items-center gap-2">
                        <Briefcase size={18} />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">
                      Current Position
                    </span>
                  )}

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
