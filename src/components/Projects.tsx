import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Semantic Search System', 
    category: 'AI & Backend', 
    tech: 'FastAPI, ChromaDB, Docker',
    description: 'Built a lightweight semantic search system featuring GMM-based fuzzy clustering, a custom cluster-aware semantic cache, and a FastAPI service.',
    link: 'https://github.com/Poovannaraajan/semantic-search-20newsgroups'
  },
  { 
    id: 2, 
    title: 'RAG PDF Chatbot', 
    category: 'Generative AI', 
    tech: 'Streamlit, LangChain, FAISS',
    description: 'Streamlit-based chatbot using RAG with FAISS vector indexing and Groq’s LLAMA 3 model. Enabled document uploads and semantic Q/A.',
    link: 'https://github.com/Poovannaraajan/RAG-PDF-CHATBOT'
  },
  { 
    id: 3, 
    title: 'Problem Solving & DSA', 
    category: 'Algorithms', 
    tech: 'Python, C++, Leetcode (100+)',
    description: 'Solved 100+ Problems on Leetcode. Achieved Gold level in Python on HackerRank.'
  },
  { 
    id: 4, 
    title: 'IBM CEP Certification', 
    category: 'Credentials', 
    tech: 'Gen AI using IBM WatsonX',
    description: 'Certified in Generative AI technologies utilizing the IBM WatsonX platform.'
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black py-24 px-8 md:px-24 relative z-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">Selected Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative h-80 rounded-3xl p-8 overflow-hidden flex flex-col justify-end bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:-translate-y-2 ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {/* Subtle gradient hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Inner shadow for extra glassmorphism effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,0.05)' }} />

            <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p className="text-gray-400 text-sm mb-2 font-medium tracking-wide uppercase">{project.category}</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">{project.title}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                <div className="overflow-hidden">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2 mb-4">
                    {project.description}
                  </p>
                  <p className="text-blue-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Custom nano banana style element - fun subtle decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
