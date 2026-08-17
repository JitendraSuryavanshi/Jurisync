import React, { useState } from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2, Building, Scale } from 'lucide-react';

interface FounderTeaserProps {
  onNavigateAbout: () => void;
  onOpenConsultation: () => void;
}

export const FounderTeaser: React.FC<FounderTeaserProps> = ({
  onNavigateAbout,
  onOpenConsultation,
}) => {
  const [imgError, setImgError] = useState(false);
  const founderImgUrl =
    'https://instagram.fdel42-1.fna.fbcdn.net/v/t51.82787-19/671112866_18440075656184226_764077122720833930_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fdel42-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gE5Jl5G5b40efoSHZo_ghLp7DObsUaNRN1LCrikA9VXlaWI-caAyKAgo-a9h_4ggyU&_nc_ohc=jfPNh4niHW0Q7kNvwEMf6Jv&_nc_gid=RHDy9AgPOaHfzcJoUbpAzQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQFf_512JHiIbqVTruc_KFY_DCqZyUu6CtLFdSeVrv9N9g&oe=6A88F58B&_nc_sid=7a9f4b';

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Founder Portrait Column */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center">
          <div className="relative group">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/50 bg-slate-800 flex items-center justify-center">
              {!imgError ? (
                <img
                  src={founderImgUrl}
                  alt="Hannu Goyal - Founder & CEO, Jurisync LLP"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-700 to-blue-950 flex flex-col items-center justify-center p-4 text-white">
                  <Scale className="w-12 h-12 text-amber-300 mb-1" />
                  <span className="font-serif font-bold text-lg">HG</span>
                  <span className="text-[10px] text-amber-200 uppercase tracking-widest font-sans font-semibold">
                    CS, LLB
                  </span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg text-[11px] font-extrabold shadow-md flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CS · LLB</span>
            </div>
          </div>

          <div className="mt-4 space-y-0.5">
            <h4 className="font-serif text-xl font-bold text-white">Hannu Goyal</h4>
            <p className="text-xs font-semibold text-amber-400">
              Company Secretary & Advocate (LLB)
            </p>
            <p className="text-[11px] text-slate-400">Founder & CEO, Jurisync LLP</p>
          </div>
        </div>

        {/* Story & Mission Column */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Leadership & Vision</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            "Compliance shouldn’t be a bureaucratic bottleneck. It should move at the speed of your ambition."
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Founded by <strong>Hannu Goyal (CS, LLB)</strong>, Jurisync LLP was established with a singular mission: to eliminate ambiguity, hidden surcharges, and sluggish turnaround from corporate and tax compliance in India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="flex items-start gap-2 text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Practicing CS oversight on every MoA, SPICe+ and ROC dossier.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Official LLP registered with ROC Haryana (LLPIN ACQ-7658).</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateAbout}
              id="founder-teaser-read-story-btn"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-1.5 active:scale-95"
            >
              <span>Read Full Founder Story & Mission</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenConsultation}
              id="founder-teaser-speak-btn"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              Request Corporate Legal Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
