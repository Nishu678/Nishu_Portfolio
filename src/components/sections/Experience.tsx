import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { experience } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function Experience() {
  return (
    <Section id="experience" bgColor="muted">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey in the tech industry, working with various technologies
            and amazing teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 mt-6 z-10 shadow-lg shadow-primary-500/50" />

                {/* Content */}
                <div className="flex-1 ml-8 md:ml-0">
                  <Card
                    variant="default"
                    hover
                    padding="lg"
                    className="relative"
                  >
                    {/* Current Position Badge */}
                    {item.current && (
                      <div className="absolute -top-3 -right-3">
                        <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow-md">
                          Current
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {item.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-primary-500 dark:text-primary-400">
                          {item.company}
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="flex items-center gap-1">
                          <Icon name="calendar" size={14} />
                          {item.duration}
                        </span>
                        {item.location && (
                          <>
                            <span className="text-gray-300 dark:text-gray-600">•</span>
                            <span className="flex items-center gap-1">
                              <Icon name="mapPin" size={14} />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
