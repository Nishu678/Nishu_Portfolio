import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Icon } from '@/components/ui/Icon';
import { profile, socialLinks } from '@/data/portfolio';
import { isValidEmail } from '@/utils/helpers';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Section id="contact" bgColor="muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out. I'm always open
            to discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Main Content - Single Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Side - Contact Info (2 cols) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 p-8 text-gray-900 dark:text-white relative overflow-hidden border-r border-gray-300 dark:border-gray-700">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }} />
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 dark:bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/10 dark:bg-white/5 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
                <p className="text-gray-600 dark:text-white/90 mb-8">
                  I'd love to hear from you. Whether you have a question, want to start a project,
                  or simply want to connect.
                </p>

              {/* Contact Details */}
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-100 dark:bg-white/20 text-primary-600 dark:text-white flex items-center justify-center">
                    <Icon name="email" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-white/70">Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-white/80 transition-colors text-sm"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-100 dark:bg-white/20 text-primary-600 dark:text-white flex items-center justify-center">
                    <Icon name="phone" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-white/70">Phone</div>
                    <a
                      href="tel:+919812454366"
                      className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-white/80 transition-colors text-sm"
                    >
                      +91 9812454366
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-100 dark:bg-white/20 text-primary-600 dark:text-white flex items-center justify-center">
                    <Icon name="mapPin" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-white/70">Location</div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{profile.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <div className="text-xs text-gray-500 dark:text-white/70 mb-3">Follow Me</div>
                <div className="flex gap-2">
                  {socialLinks.slice(0, 4).map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-9 h-9 rounded-lg bg-white dark:bg-white/20 hover:bg-gray-50 dark:hover:bg-white/30 text-gray-700 dark:text-white border border-gray-200 dark:border-0 flex items-center justify-center transition-all shadow-sm"
                      aria-label={social.ariaLabel}
                    >
                      <Icon name={social.icon} size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              {profile.resumeUrl && (
                <div className="mt-8">
                  <Button
                    variant="secondary"
                    onClick={() => window.open(profile.resumeUrl, '_blank')}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white border-0 dark:bg-white/20 dark:hover:bg-white/30"
                  >
                    <Icon name="download" size={16} className="mr-2" />
                    Download Resume
                  </Button>
                </div>
              )}

              {/* Availability Badge */}
              {profile.availability && (
                <div className="mt-5 p-2.5 rounded-lg bg-primary-50 dark:bg-white/10">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 dark:bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500 dark:bg-white" />
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">Available for opportunities</span>
                  </div>
                </div>
              )}
              </div>
            </div>

            {/* Right Side - Contact Form (3 cols) */}
            <div className="lg:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <Input
                    label="Your Name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={errors.name}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Input
                    label="Your Email"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={errors.email}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Input
                    label="Subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange('subject')}
                    error={errors.subject}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    label="Your Message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    error={errors.message}
                    placeholder="Tell me about your project or inquiry..."
                    rows={4}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  disabled={submitStatus === 'success'}
                  className="mt-6"
                >
                  {submitStatus === 'success' ? (
                    <>
                      <Icon name="check" size={20} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Icon name="send" size={20} />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-center"
                  >
                    Thank you for reaching out! I'll get back to you soon.
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-center"
                  >
                    Oops! Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
