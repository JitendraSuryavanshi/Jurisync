import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-10',
  variant = 'auto',
  showTagline = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const logoUrl = 'https://www.jurisync.in/__l5e/assets-v1/1fa82cef-73d3-4d90-b370-930fc4daf982/jurisync-logo.png';

  return (
    <div className="flex items-center gap-3">
      {!imgError ? (
        <img
          src={logoUrl}
          alt="Jurisync Logo"
          onError={() => setImgError(true)}
          className={`${className} object-contain transition-transform duration-200 hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-amber-700 flex items-center justify-center text-amber-400 font-serif font-bold text-xl shadow-md border border-amber-500/30">
            J
          </div>
          <div>
            <div className="font-serif font-bold text-xl tracking-tight text-slate-900 flex items-center gap-1">
              <span>JURISYNC</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 font-sans font-semibold border border-amber-500/20">
                ONLINE
              </span>
            </div>
          </div>
        </div>
      )}

      {showTagline && (
        <div className="hidden lg:block border-l border-slate-200 pl-3">
          <p className="text-[11px] font-medium text-slate-500 leading-tight">
            Compliance that moves at the
            <br />
            <span className="text-slate-800 font-semibold">speed of your business.</span>
          </p>
        </div>
      )}
    </div>
  );
};
