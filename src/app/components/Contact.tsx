import { motion } from 'motion/react';
import { Button } from '@mui/material';
import { Mail } from 'lucide-react';

// EDIT YOUR CONTACT INFO HERE
const contactData = {
  email: 'sheezatariq6013@gmail.com',
  location: 'PAKISTAN ',

  
};

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 mb-8 text-center">
            <a href={`mailto:${contactData.email}`} className="inline-flex items-center gap-3 text-white/80 hover:text-purple-400 text-lg">
              <Mail className="w-5 h-5" />
              <span>{contactData.email}</span>
            </a>
            <p className="text-white/60 mt-4">{contactData.location}</p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60" />
              <input type="email" placeholder="Your Email" className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60 resize-none"></textarea>
              <Button variant="contained" fullWidth sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: 1.5, textTransform: 'none', '&:hover': { background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' } }}>
                Send Message
              </Button>
            </form>
          </div>

          <div className="text-center text-white/60 mt-8">
            <p>© 2026 Sheeza Tariq. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
