import React, { useState } from 'react';
import { Calculator, Check, ShieldCheck, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingCalculatorProps {
  onOpenConsultation: (service?: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenConsultation }) => {
  const [entityType, setEntityType] = useState<'pvt' | 'llp' | 'opc' | 'prop'>('pvt');
  const [includeGST, setIncludeGST] = useState(true);
  const [includeTrademark, setIncludeTrademark] = useState(true);
  const [includeMSME, setIncludeMSME] = useState(true);
  const [includeAnnualROC, setIncludeAnnualROC] = useState(false);

  const basePricing = {
    pvt: { name: 'Private Limited Company', profFee: 6999, stampDuty: 1500, nameFee: 1000, minDays: '5-7 Days' },
    llp: { name: 'Limited Liability Partnership', profFee: 5999, stampDuty: 1000, nameFee: 500, minDays: '5-7 Days' },
    opc: { name: 'One Person Company (OPC)', profFee: 5499, stampDuty: 1200, nameFee: 1000, minDays: '5-7 Days' },
    prop: { name: 'Sole Proprietorship Setup', profFee: 1999, stampDuty: 0, nameFee: 0, minDays: '2-3 Days' },
  };

  const selectedBase = basePricing[entityType];

  let totalProf = selectedBase.profFee;
  let totalGovt = selectedBase.stampDuty + selectedBase.nameFee;

  if (includeGST) {
    totalProf += 799;
  }
  if (includeTrademark) {
    totalProf += 1999;
    totalGovt += 4500; // MSME subsidized rate
  }
  if (includeMSME) {
    totalProf += 499;
  }
  if (includeAnnualROC && (entityType === 'pvt' || entityType === 'opc')) {
    totalProf += 4499;
    totalGovt += 800;
  }

  const grandTotal = totalProf + totalGovt;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Quotation Tool</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
            Calculate Your Total Incorporation & Compliance Cost
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            100% transparent fee calculation — no hidden legal drafting fees or surprise surcharges.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Practicing CS Certified Pricing</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Config Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Entity Structure */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              1. Select Proposed Business Structure:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'pvt', label: 'Private Limited', sub: 'Funding & Startups' },
                { id: 'llp', label: 'LLP Partnership', sub: 'Low Annual Compliances' },
                { id: 'opc', label: 'One Person Co.', sub: '100% Solo Ownership' },
                { id: 'prop', label: 'Proprietorship', sub: 'Small Local Traders' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setEntityType(item.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    entityType === item.id
                      ? 'border-amber-600 bg-amber-50/70 text-slate-900 shadow-sm ring-1 ring-amber-600'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  <p className="text-xs font-bold">{item.label}</p>
                  <p className="text-[11px] text-slate-500">{item.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Essential Registrations & Protection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              2. Add Essential Statutory Registrations:
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeGST}
                    onChange={(e) => setIncludeGST(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-800">GST Registration (15-Digit GSTIN)</p>
                    <p className="text-[11px] text-slate-500">Essential for B2B billing, inter-state sales & ITC claims</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800">+ ₹799</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeTrademark}
                    onChange={(e) => setIncludeTrademark(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-800">Trademark Filing (™ Protection in 24 Hours)</p>
                    <p className="text-[11px] text-slate-500">Protects brand name & unlocks Amazon Brand Registry</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800">+ ₹1,999</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeMSME}
                    onChange={(e) => setIncludeMSME(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-slate-800">MSME Udyam Certificate</p>
                    <p className="text-[11px] text-slate-500">Unlocks 50% govt TM discount & collateral-free loans</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800">+ ₹499</span>
              </label>

              {(entityType === 'pvt' || entityType === 'opc') && (
                <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeAnnualROC}
                      onChange={(e) => setIncludeAnnualROC(e.target.checked)}
                      className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-800">1st Year Annual ROC Secretarial Filings</p>
                      <p className="text-[11px] text-slate-500">Form AOC-4, MGT-7A, DIR-3 KYC for all directors</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-800">+ ₹4,499</span>
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Right Live Itemized Invoice Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-blue-950 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Instant Itemized Breakdown
              </span>
              <span className="text-[11px] text-slate-400">{selectedBase.minDays}</span>
            </div>

            {/* Line items */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-300">{selectedBase.name} (Professional Fee)</span>
                <span className="font-semibold text-white">₹{selectedBase.profFee.toLocaleString('en-IN')}</span>
              </div>

              {includeGST && (
                <div className="flex justify-between">
                  <span className="text-slate-300">GST Registration Setup</span>
                  <span className="font-semibold text-white">₹799</span>
                </div>
              )}

              {includeTrademark && (
                <div className="flex justify-between">
                  <span className="text-slate-300">Trademark Filing (Form TM-A)</span>
                  <span className="font-semibold text-white">₹1,999</span>
                </div>
              )}

              {includeMSME && (
                <div className="flex justify-between">
                  <span className="text-slate-300">MSME Udyam Registration</span>
                  <span className="font-semibold text-white">₹499</span>
                </div>
              )}

              {includeAnnualROC && (
                <div className="flex justify-between">
                  <span className="text-slate-300">1st Year Annual ROC Secretarial</span>
                  <span className="font-semibold text-white">₹4,499</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-400 text-[11px]">
                <span>Total Jurisync Professional Fee:</span>
                <span className="font-semibold text-emerald-400">₹{totalProf.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Est. Govt Statutory / Stamp Fees:</span>
                <span className="font-semibold text-amber-400">₹{totalGovt.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="pt-4 border-t border-slate-700 space-y-1">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs text-slate-400">Estimated Total Package:</p>
                  <p className="text-2xl font-serif font-bold text-white">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-1 rounded-lg">
                  Inclusive of DSC & DINs
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-2">
            <button
              onClick={() => onOpenConsultation(`Calculated Package: ${selectedBase.name}`)}
              id="pricing-calculator-claim-quote-btn"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Lock In This Fixed Quote</span>
            </button>
            <p className="text-[10px] text-slate-400 text-center">
              No hidden fees. We verify your company name conflict free of cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
