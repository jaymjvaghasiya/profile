import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      name: 'Oracle Certified Associate, Java SE 8',
      issuer: 'Oracle',
      description: 'Demonstrates strong foundation in modern Java development practices',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=80C97EAD4247BF076B2CE4D9DDC5EFCB40A64B61BE035998E1D89C22C10FB9DC',
      icon: '☕',
    },
    {
      name: 'React JS',
      issuer: 'Certification Authority',
      description: 'Proficiency in React JS',
      link: 'https://certopus.com/c/efe247d6955146c3b1754004c3473192',
      icon: '⚛️',
    },
    {
      name: 'SQL Database Management',
      issuer: 'Certification Authority',
      description: 'Expert knowledge in SQL and database management',
      link: 'https://certopus.com/c/b674b1af15a04e48959f11cf5138ebf1',
      icon: '🗄️',
    },
    {
      name: 'Data Structures & Algorithms',
      issuer: 'Certification Authority',
      description: 'Strong foundation in DSA problem-solving',
      link: 'https://certopus.com/c/b674b1af15a04e48959f11cf5138ebf1',
      icon: '🧮',
    },
    {
      name: 'Mongo DB',
      issuer: 'Certification Authority',
      description: 'Strong foundation in Mongo DB Database',
      link: 'https://certopus.com/c/9eef64591f1c41c7ba34757376af95c4',
      icon: '🍃',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
              onClick={() => window.open(cert.link, '_blank')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                  {cert.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>

                <Award className="text-yellow-500 flex-shrink-0" size={24} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
