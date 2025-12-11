import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vaghasiyajay2002@gmail.com',
      href: 'mailto:vaghasiyajay2002@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9875244000',
      href: 'tel:+919875244000',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jaymjvaghasiya',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jay-vaghasiya-32b58328a',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-100">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105"
                >
                  <link.icon size={20} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:vaghasiyajay2002@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <Send size={24} />
              Send Me an Email
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-gray-100">
          <p>&copy; 2024 Jaykumar Vaghasiya. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
