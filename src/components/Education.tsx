import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Gandhinagar Institute of Technology',
      university: 'Gujarat Technological University',
      period: 'August 2020 - May 2024',
      grade: 'CGPA: 8.09/10.0',
      icon: GraduationCap,
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Eklavya School of Science',
      period: 'July 2017 - March 2019',
      grade: 'Percentage: 74%',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <edu.icon className="text-white" size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <span className="px-4 py-1 bg-gray-800 text-white text-sm font-semibold rounded-full">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-lg text-gray-600 font-semibold mb-1">{edu.institution}</p>
                  {edu.university && (
                    <p className="text-gray-600 mb-2">{edu.university}</p>
                  )}
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
