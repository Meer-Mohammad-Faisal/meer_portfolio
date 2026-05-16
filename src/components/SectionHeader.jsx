const SectionHeader = ({ eyebrow, title, copy, align = 'center' }) => {
  const isLeft = align === 'left';

  return (
    <div className={`mx-auto mb-12 max-w-3xl ${isLeft ? 'mx-0 text-left' : 'text-center'}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{copy}</p> : null}
    </div>
  );
};

export default SectionHeader;
