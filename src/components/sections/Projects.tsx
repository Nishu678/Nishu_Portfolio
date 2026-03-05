import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { projects } from '@/data/portfolio';

const categories = [
  { id: 'all', label: 'All', icon: 'grid' },
  { id: 'web', label: 'Web Apps', icon: 'globe' },
  { id: 'dashboard', label: 'Dashboards', icon: 'barChart' },
  { id: 'api', label: 'API Tools', icon: 'api' },
  { id: 'tool', label: 'Tools', icon: 'tool' },
];

const techColors: { [key: string]: string } = {
  'React.js': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700',
  'React': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700',
  'TanStack Router': 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700',
  'Tailwind CSS': 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-700',
  'shadcn/ui': 'bg-slate-50 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  'Axios': 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700',
  'REST APIs': 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-700',
  'Context API': 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
  'JavaScript': 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
  default: 'bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600',
};

function getTechColor(tech: string) {
  return techColors[tech] || techColors.default;
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Section id="projects" bgColor="muted">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Here are some of my recent projects, showcasing my skills in building modern web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Icon name={cat.icon as any} size={14} />
                {cat.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - 3 columns for compact layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                    {/* Fallback gradient if no image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />

                    {/* Category badge */}
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-medium capitalize shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-full bg-yellow-500/90 text-white text-xs font-medium flex items-center gap-1 shadow-sm">
                          <Icon name="star" size={8} />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Action buttons overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-1"
                        >
                          <Icon name="externalLink" size={12} />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-1"
                        >
                          <Icon name="github" size={12} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 space-y-2">
                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded text-xs font-medium border ${getTechColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
