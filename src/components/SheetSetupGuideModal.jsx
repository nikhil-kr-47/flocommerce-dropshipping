import React, { useState } from 'react';
import { GOOGLE_SHEET_ID, GOOGLE_SHEET_URL, GOOGLE_APPS_SCRIPT_CODE, getWebhookUrl, setWebhookUrl, submitLeadToGoogleSheet } from '../services/sheetService';
import { X, Copy, Check, ExternalLink, Play, Database, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SheetSetupGuideModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [webhookInput, setWebhookInput] = useState(getWebhookUrl());
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [isTesting, setIsTesting] = useState(false);
  const [leads, setLeads] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('flocom_leads') || '[]');
    } catch {
      return [];
    }
  });

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveWebhook = () => {
    setWebhookUrl(webhookInput);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleRunTest = async () => {
    setIsTesting(true);
    setTestResult(null);
    try {
      const testLead = {
        name: 'Test Partner',
        phone: '+91 99999 88888',
        experience: 'Complete Beginner',
        adSpend: '2000',
        launchTimeline: 'Immediately (this festive season )',
        serviceFeeAffordable: 'Yes , I can afford',
      };
      const res = await submitLeadToGoogleSheet(testLead);
      setTestResult({
        success: true,
        message: 'Test lead processed! Check your Google Sheet or the local leads table below.',
      });
      // reload leads
      setLeads(JSON.parse(localStorage.getItem('flocom_leads') || '[]'));
    } catch (err) {
      setTestResult({
        success: false,
        message: 'Test submission failed: ' + err.message,
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#0c152e] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 to-teal-500" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/50 hover:bg-slate-800 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Google Sheet Integration Setup
            </h2>
          </div>
          
          <p className="text-xs text-slate-300 mb-6">
            Submissions from the Hero form and 4-question popup are synced to your spreadsheet.
          </p>

          {/* Connected Sheet Card */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-400 block">Target Spreadsheet</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold break-all">
                {GOOGLE_SHEET_ID}
              </span>
            </div>
            <a
              href={GOOGLE_SHEET_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Open in Google Sheets</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Webhook Configuration */}
          <div className="p-5 rounded-xl bg-[#111c38] border border-blue-500/20 mb-6">
            <h3 className="text-sm font-bold text-white mb-2">
              Google Apps Script Webhook URL
            </h3>
            <p className="text-xs text-slate-300 mb-3">
              Deploy the script below as a Web App (Access: "Anyone") and paste its URL here to push leads directly to your sheet in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/.../exec"
                value={webhookInput}
                onChange={(e) => setWebhookInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-400 font-mono"
              />
              <button
                type="button"
                onClick={handleSaveWebhook}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs whitespace-nowrap"
              >
                {saveSuccess ? 'Saved ✓' : 'Save URL'}
              </button>
            </div>
          </div>

          {/* 3 Step Deployment Instructions */}
          <div className="mb-6 space-y-3">
            <h3 className="text-sm font-bold text-white">
              3-Step 60-Second Setup Guide:
            </h3>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                <span>
                  Open your <a href={GOOGLE_SHEET_URL} target="_blank" rel="noreferrer" className="text-blue-400 underline">Google Sheet</a>, click <strong>Extensions</strong> → <strong>Apps Script</strong>.
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                <div className="flex-1">
                  <span>Replace any existing code with this snippet and click Save:</span>
                  <div className="mt-2 relative">
                    <pre className="p-3 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-36">
                      {GOOGLE_APPS_SCRIPT_CODE}
                    </pre>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                <span>
                  Click <strong>Deploy</strong> → <strong>New deployment</strong> → Select <strong>Web app</strong>. Set <em>Execute as: Me</em> and <em>Who has access: Anyone</em>. Copy the web app URL and paste it into the box above!
                </span>
              </div>
            </div>
          </div>

          {/* Test Submission Button */}
          <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-white block">Test Submission</span>
              <span className="text-[11px] text-slate-400">Dispatch a test lead through the pipeline</span>
            </div>
            <button
              onClick={handleRunTest}
              disabled={isTesting}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isTesting ? 'Sending...' : 'Send Test Lead'}</span>
            </button>
          </div>

          {testResult && (
            <div className={`mb-6 p-3 rounded-xl text-xs flex items-center gap-2 ${testResult.success ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border border-red-500/30 text-red-300'}`}>
              {testResult.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{testResult.message}</span>
            </div>
          )}

          {/* Local Leads Backup Table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white">Local Submissions Cache ({leads.length})</span>
              {leads.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('flocom_leads');
                    setLeads([]);
                  }}
                  className="text-[10px] text-red-400 hover:underline"
                >
                  Clear Cache
                </button>
              )}
            </div>

            {leads.length === 0 ? (
              <p className="text-xs text-slate-500 italic p-3 rounded-lg bg-slate-900/40 text-center">
                No submissions recorded yet. Submit the form on the landing page to test!
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-slate-800 max-h-48 overflow-y-auto">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-slate-900 text-slate-400 font-bold">
                    <tr>
                      <th className="py-2 px-3">Name</th>
                      <th className="py-2 px-3">Phone</th>
                      <th className="py-2 px-3">Spend</th>
                      <th className="py-2 px-3">Fee Afford</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {leads.map((l, i) => (
                      <tr key={i} className="hover:bg-slate-800/40">
                        <td className="py-2 px-3 font-semibold text-white">{l.name}</td>
                        <td className="py-2 px-3 font-mono">{l.phone}</td>
                        <td className="py-2 px-3">{l.adSpend}</td>
                        <td className="py-2 px-3">{l.serviceFeeAffordable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
