import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
      <div className="container-width section-padding">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-12">
            <div className="relative w-56 h-56 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full transform rotate-6"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-600 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Alexandru Tulbure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Alexandru Tulbure
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light">
              Full Stack Developer & Software Engineer
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-12 font-light">
              Passionate about creating innovative web applications and solving complex problems through code. 
              Specialized in React, TypeScript, and modern web technologies. Always eager to learn new skills 
              and contribute to meaningful projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to="/projects"
                className="btn-primary inline-flex items-center"
              >
                View My Work
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact"
                className="btn-secondary inline-flex items-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Frontend Development</h3>
            <p className="text-slate-600 dark:text-slate-400 font-light">React, TypeScript, Tailwind CSS, Next.js</p>
          </div>
          
          <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-emerald-700 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Backend Development</h3>
            <p className="text-slate-600 dark:text-slate-400 font-light">Node.js, Express, Python, Databases</p>
          </div>
          
          <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900 dark:to-violet-800 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-violet-700 dark:text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">DevOps & Tools</h3>
            <p className="text-slate-600 dark:text-slate-400 font-light">Git, Docker, CI/CD, Cloud Platforms</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">Professional Experience</h2>
          <div className="card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Software Engineer</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light">OPSwat • Timisoara, Romania</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">Part-time • 2025 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
