import { profile, socials } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-300">{profile.name}</p>
          <p className="mt-1">{profile.role}</p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p>Copyright {new Date().getFullYear()} Meer Mohammad Faisal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
