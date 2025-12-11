import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0tMTggMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="text-6xl font-bold text-white"> <img src="/profile/images/Jaykumar Vaghasiya.jpg" /> </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Jaykumar Vaghasiya
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-gray-100 animate-slide-up animation-delay-200">
          Software Developer
        </p>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-50 leading-relaxed animate-slide-up animation-delay-400">
          Enthusiastic developer with 1.7 years of experience specializing in Java, Spring Boot, React.js, and the MERN stack
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-600">
          <a
            href="mailto:vaghasiyajay2002@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="/profile/pdfs/Jaykumar Vaghasiya - Resume.pdf"
            download="Jaykumar_Vaghasiya_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href="https://github.com/jaymjvaghasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 border border-white/30"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jay-vaghasiya-32b58328a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 border border-white/30"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-100 animate-slide-up animation-delay-800">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Ahmedabad</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+91 9875244000</span>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-white/70" />
        </button>
      </div>
    </section>
  );
}
