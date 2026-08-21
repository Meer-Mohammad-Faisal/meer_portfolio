import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';

const certs = [
  'Oracle Cloud Infrastructure (OCI) Generative AI Professional',
  'OCI AI Foundation Associate',
];

const Certifications = () => {
  return (
    <AnimatedSection id="certifications" className="z-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Certifications" title="Selected certifications" copy="Relevant cloud and Generative AI certifications." />

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {certs.map((c) => (
            <SpotlightCard key={c} className="p-4">
              <p className="text-sm font-semibold text-white">{c}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certifications;
