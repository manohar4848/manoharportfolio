import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Red Hat Certified Enterprise Application Developer',
      issuer: 'Red Hat',
      year: '2024',
      color: 'from-red-600 to-red-700',
      link: 'https://www.credly.com/badges/95278ee0-3f78-4b37-9a61-7c32159df085/public_url',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      color: 'from-orange-500 to-orange-600',
      link: 'https://www.credly.com/badges/3f7af239-6914-4ada-9c4a-57d1324ee45c/public_url',
    },
    {
      title: 'Oracle Cloud Infrastructure Generative AI Professional',
      issuer: 'Oracle',
      year: '2024',
      color: 'from-red-500 to-orange-500',
      link: 'https://catalog-education.oracle.com/apex/f?p=1010:2:15510415416146::::P2_AUTHCODE,P2_AUTH_KEY,P2_ARG_INVALID_CNT:ow258189kS27V,BgLbJ258117lzWT2880XxXl,0',
    },
    {
      title: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      year: '2024',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://www.credly.com/badges/YOUR_BADGE_ID',
    },
    {
      title: 'Automation Anywhere Essentials (RPA)',
      issuer: 'Automation Anywhere',
      year: '2024',
      color: 'from-orange-600 to-yellow-500',
      link: 'https://automationanywhere.com/certifications/YOUR_LINK',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuously expanding expertise through industry-recognized certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              {/* Icon and Year */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Award className="text-white" size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  {cert.year}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{cert.issuer}</p>

              {/* Verified and Link */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle2 size={16} />
                  <span>Verified</span>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 text-sm hover:underline"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Professional Certifications
                </div>
              </div>

              <div className="w-px h-12 bg-slate-300" />

              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  2024
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Recent Achievements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
