import { useState } from 'react';
import { CheckCircle2, Mail, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { profile, socials } from '../data/portfolio';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const payload = new FormData(event.currentTarget);
    payload.append('_subject', 'New message from portfolio');
    payload.append('_captcha', 'false');
    payload.append('_template', 'table');
    payload.append('_replyto', formData.email);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');

      setStatus('sent');
      setFormData(initialForm);
      window.setTimeout(() => setStatus('idle'), 3500);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <AnimatedSection id="contact" className="z-10 pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something impactful together."
          copy="Open to software engineering roles, internships, freelance builds, and meaningful AI product conversations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SpotlightCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-field"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="form-field"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-300">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Tell me what you want to build."
                  className="form-field resize-none"
                />
              </label>

              <button type="submit" disabled={status === 'sending' || status === 'sent'} className="btn-primary w-full justify-center">
                {status === 'sent' ? (
                  <>
                    Message sent
                    <CheckCircle2 size={18} />
                  </>
                ) : (
                  <>
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                    <Send size={18} />
                  </>
                )}
              </button>

              {status === 'error' ? (
                <p className="rounded-2xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                  The form service did not respond. You can still email me directly at {profile.email}.
                </p>
              ) : null}
            </form>
          </SpotlightCard>

          <div className="grid gap-6">
            <SpotlightCard className="p-6 sm:p-8">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100 ring-1 ring-cyan-300/20">
                <Mail size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Direct contact</h3>
              <p className="mt-3 leading-7 text-slate-400">Fastest way to reach me for roles, collaborations, or project discussions.</p>
              <a href={`mailto:${profile.email}`} className="mt-5 inline-flex text-lg font-semibold text-cyan-100 hover:text-white">
                {profile.email}
              </a>
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">Social links</h3>
              <div className="mt-5 grid gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-slate-300 transition hover:border-cyan-300/25 hover:text-white">
                    <Icon size={19} />
                    {label}
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
