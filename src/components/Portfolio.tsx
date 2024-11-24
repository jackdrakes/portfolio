"use client"
import { useTheme } from 'next-themes';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Mail, } from 'lucide-react';

const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const mounted = true
  

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#1A1A10] text-stone-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="bg-[#1A1A10]  shadow-md ">
        <nav className="container mx-auto flex justify-between px-6 py-4">
          <motion.h1 
            className="text-2xl font-bold   "
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25}}
            whileHover={{scale: 1.05}}
          >
            Saran M
          </motion.h1>
          <div className='flex gap-4 px-4 p-1 '>
            <motion.a 
              href={process.env.BLOG_URL}
              className="text-gray-350  hover:text-gray-100"
              whileTap={{ scale: 1.1 }}
            >
              blogs
            </motion.a>

            <motion.a 
              href="mailto:saran332003@gmail.com" 
              className="text-gray-350  hover:text-gray-100"
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
            {mounted && (<motion.div
              className="rounded-full bg-gray-200 dark:bg-gray-700"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* {theme === 'light' ? <Moon size={24} className='text-black' /> : <Sun size={24} className='text-white' />} */}
            </motion.div>)} 
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <motion.section className="mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl font-bold mb-4"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.05 }}
          >
            Welcome to My Portfolio
          </motion.h2>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
              I&apos;m a B.Tech graduate in AI and Data Science, currently working as an AI/ML Engineer. I also support our React and iOS teams and recently completed a freelance project using FastAPI and Python. I’m passionate about learning new technologies and am currently exploring Rust and Anchor. Outside of work, I enjoy reading and staying active with push-ups. 

          </motion.p>
          <motion.p 
            className="text-lg font-semibold mt-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className='text-pink-500'>My motto: </span><span className='text-green-400'>&quot;One at a time & one more time.&quot;</span>
          </motion.p>
        </motion.section>



        {/* EXPERIENCE */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <motion.div 
            className="bg-[#282828]  p-6 rounded-lg shadow-md"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.05,}}
          >
            <h3 className="text-xl font-semibold mb-2">Clanizon</h3>
            <p className="text-gray-200 justify-between flex mb-2">AI/ML Engineer <span>02-2024 - present</span></p>
            <p className='text-gray-200'>Compared different LLM model</p>
          </motion.div>
        </motion.section>

        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A brief description about yourself, your skills, and your passion for development.
          </motion.p>
        </motion.section>


        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants }
          >
            <motion.div 
              className=" bg-[#282828] p-6 rounded-lg shadow-md"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Description of project 1</p>
            </motion.div>
            <motion.div 
              className=" bg-[#282828] p-6 rounded-lg shadow-md"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05,}}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Description of project 2</p>
            </motion.div>
          </motion.div>
        </motion.section>

       

        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <motion.div 
            className="flex space-x-4"
            variants={containerVariants}
          >
            <motion.a 
              href="#" 
              className="text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <GitHub size={24} /> */}
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.1, rotate: -180 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <Linkedin size={24} /> */}
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.1, rotate: -180 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <Twitter size={24} /> */}
            </motion.a>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default Portfolio;