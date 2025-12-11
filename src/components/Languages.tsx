import { Globe } from 'lucide-react';

export default function Languages() {
  const languages = [
    {
      name: 'Gujarati',
      proficiency: 'Fluent',
      level: 'fluent',
      percentage: 95,
    },
    {
      name: 'Hindi',
      proficiency: 'Professional',
      level: 'professional',
      percentage: 85,
    },
    {
      name: 'English',
      proficiency: 'Professional',
      level: 'professional',
      percentage: 85,
    },
  ];

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'fluent':
        return 'from-green-400 to-green-600';
      case 'professional':
        return 'from-blue-400 to-blue-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Languages</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                    <Globe className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{lang.name}</h3>
                    <p className="text-sm text-gray-600">{lang.proficiency}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Proficiency</span>
                    <span className="font-semibold text-gray-900">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getProficiencyColor(lang.level)} transition-all duration-500`}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    {lang.level === 'fluent' ? 'Native Speaker' : 'Professional Level'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multilingual Communication</h3>
                <p className="text-gray-700">
                  Strong ability to communicate effectively across multiple languages, enabling collaboration with diverse teams and clients. Fluent in Gujarati, with professional proficiency in both Hindi and English for technical and business communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
