import emailjs from 'emailjs-com';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('⚠️ Please fill in all fields.');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        'service_j3kypav', // 🔹 Replace with your EmailJS Service ID
        'template_15xwo5u', // 🔹 Replace with your EmailJS Template ID
        formData,
        'qdci8LhetUg7GXgks' // 🔹 Replace with your EmailJS Public Key
      );

      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('❌ Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bmanohar178@gmail.com',
      link: 'mailto:bmanohar178@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9392646887',
      link: 'tel:+919392646887',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhimavaram, Andhra Pradesh, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/b-manohar-384ba328a/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/manohar4848',
      color: 'hover:text-slate-800',
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:bmanohar178@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : <><Send size={20} /> Send Message</>}
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center text-sm text-slate-700">{status}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            © {new Date().getFullYear()} Bokka Manohar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
