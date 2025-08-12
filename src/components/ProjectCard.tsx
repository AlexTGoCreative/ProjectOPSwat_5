import type { ProjectCardProps } from '../types';

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  return (
    <div className="card group hover:transform hover:scale-105 transition-all duration-300 overflow-hidden">
      {image && (
        <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 font-light leading-relaxed line-clamp-3">
          {description || 'No description available'}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-slate-800 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 text-white dark:text-slate-800 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View Project
          <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
