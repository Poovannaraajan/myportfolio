import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech - Computer Science (CORE)',
    institution: 'Vellore Institute of Technology (Vellore)',
    location: 'Tamil Nadu, India',
    period: 'August 2023 - Present',
    score: 'CGPA: 8.57'
  },
  {
    degree: 'High School Diploma (PCM)',
    institution: 'Shrishti Vidyashram CBSE Higher Secondary',
    location: 'Vellore, Tamil Nadu, India',
    period: 'June 2021 - April 2023',
    score: 'Score: 92.2%'
  }
];

export default function Education() {
  return (
    <div className="bg-black py-24 px-8 md:px-24 relative z-20 border-t border-white/5">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">Education</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">{edu.degree}</h3>
                <p className="text-gray-400 text-lg mt-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-2 border border-white/10">
                  {edu.period}
                </span>
                <p className="text-blue-400 font-semibold">{edu.score}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
