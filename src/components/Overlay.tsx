import { MotionValue, motion, useTransform } from 'framer-motion';

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // 0% -> opacity 1, 10% -> opacity 0
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // 30%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // 60%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center p-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl mix-blend-difference">
          POOVANNARAAJAN.<br />
          <span className="text-gray-300">CS & AI Developer.</span>
        </h1>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-lg drop-shadow-2xl mix-blend-difference">
          I build scalable, impactful solutions.
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-lg drop-shadow-2xl mix-blend-difference">
          Exploring ML, Gen AI & Full-Stack.
        </h2>
      </motion.div>
    </div>
  );
}
