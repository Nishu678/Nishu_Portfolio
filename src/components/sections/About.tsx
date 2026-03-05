import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { profile, skills } from '@/data/portfolio';

const categories = [
  { id: 'all', name: 'All', count: skills.length },
  { id: 'frontend', name: 'Frontend', count: skills.filter(s => s.category === 'frontend').length },
  { id: 'styling', name: 'Styling', count: skills.filter(s => s.category === 'styling').length },
  { id: 'tools', name: 'Tools', count: skills.filter(s => s.category === 'tools').length },
  { id: 'backend', name: 'Backend', count: skills.filter(s => s.category === 'backend').length },
  { id: 'design', name: 'Design', count: skills.filter(s => s.category === 'design').length },
  { id: 'other', name: 'Other', count: skills.filter(s => s.category === 'other').length },
];

const levelColors = {
  beginner: 'from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600',
  intermediate: 'from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40',
  advanced: 'from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40',
  expert: 'from-accent-100 to-accent-200 dark:from-accent-900/40 dark:to-accent-800/40',
};

export function About() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Section id="about" bgColor="muted">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {profile.bio}
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
              />
              <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat.name} <span className={`ml-1 px-2 py-0.5 rounded text-xs ${activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-600'}`}>{cat.count}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <div className="relative p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all">
                  {/* Animated Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: index * 0.1 }}
                    className="text-3xl mb-2"
                  >
                    {skill.icon || '🔧'}
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">
                    {skill.name}
                  </h3>

                  {/* Level Badge */}
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${levelColors[skill.level || 'intermediate']}`}>
                    {skill.level || 'intermediate'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No skills found</p>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Beginner', count: filteredSkills.filter(s => s.level === 'beginner').length, color: 'bg-gray-200 dark:bg-gray-700' },
            { label: 'Intermediate', count: filteredSkills.filter(s => s.level === 'intermediate').length, color: 'bg-blue-200 dark:bg-blue-900/40' },
            { label: 'Advanced', count: filteredSkills.filter(s => s.level === 'advanced').length, color: 'bg-primary-200 dark:bg-primary-900/40' },
            { label: 'Expert', count: filteredSkills.filter(s => s.level === 'expert').length, color: 'bg-accent-200 dark:bg-accent-900/40' },
          ].map(stat => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -2 }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.count}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Icon name="mapPin" size={18} />
            <span>{profile.location}</span>
          </div>
          {profile.availability && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium">Available</span>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
