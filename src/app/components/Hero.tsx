import { motion } from 'motion/react';
import { Button } from '@mui/material';

// EDIT YOUR INFO HERE
const heroData = {
  name: "Sheeza Tariq",
  title: "UI/UX Designer • Web Developer • Business Analyst",
  subtitle: "Cybersecurity Expert • AI Integration Specialist",
  description: "Transforming ideas into elegant solutions through design, development, and security.",
  available: true
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heroData.available && (
            <div className="mb-6 inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              <span className="text-purple-200">Available for Hire</span>
            </div>
          )}

          <h1 className="mb-6">
            <span className="block text-white/60 text-xl mb-2">Hello, I'm</span>
            <span className="block text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {heroData.name}
            </span>
          </h1>

          <p className="text-2xl text-purple-200 mb-2">{heroData.title}</p>
          <p className="text-xl text-cyan-300 mb-6">{heroData.subtitle}</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">{heroData.description}</p>

          <div className="flex gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                '&:hover': { background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' }
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#a78bfa',
                color: '#a78bfa',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                '&:hover': { borderColor: '#a78bfa', background: 'rgba(167, 139, 250, 0.1)' }
              }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
