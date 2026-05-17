import { motion } from 'motion/react';
import { Button } from '@mui/material';
import { Mail } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// EDIT YOUR CONTACT INFO HERE
const contactData = {
  email: 'sheezatariq6013@gmail.com',
  location: 'PAKISTAN ',
};

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_ov3p709';
    const TEMPLATE_ID = 'template_x62mgdh';
    const PUBLIC_KEY = 'kSvF54tAjjcvjuLVS';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
        },
      );
  };

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
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input type="text" name="from_name" required placeholder="Your Name" className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60" />
              <input type="email" name="reply_to" required placeholder="Your Email" className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60" />
              <textarea name="message" required placeholder="Your Message" rows={4} className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/60 resize-none"></textarea>
              <Button type="submit" disabled={isSubmitting} variant="contained" fullWidth sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: 1.5, textTransform: 'none', '&:hover': { background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' }, '&.Mui-disabled': { background: '#475569', color: '#94a3b8' } }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && <p className="text-green-400 text-center mt-2">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>}
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
