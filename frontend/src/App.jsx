import React, { useState } from 'react';
import InsightPanel from './components/InsightPanel';
import MediaPanel from './components/MediaPanel';
import AnalyticsPanel from './components/AnalyticsPanel';
import IntegrationPanel from './components/IntegrationPanel';

export default function App() {
  const [tab, setTab] = useState('insight');

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Lucidframe</h1>
        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab('insight')} className={`px-3 py-2 rounded text-sm ${tab === 'insight' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'}`}>Insight Pivot</button>
          <button onClick={() => setTab('media')} className={`px-3 py-2 rounded text-sm ${tab === 'media' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'}`}>Media Blueprint</button>
          <button onClick={() => setTab('analytics')} className={`px-3 py-2 rounded text-sm ${tab === 'analytics' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'}`}>Analytics Loop</button>
          <button onClick={() => setTab('integrations')} className={`px-3 py-2 rounded text-sm ${tab === 'integrations' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'}`}>Integrations</button>
        </div>
        <div>
          {tab === 'insight' && <InsightPanel />}
          {tab === 'media' && <MediaPanel />}
          {tab === 'analytics' && <AnalyticsPanel />}
          {tab === 'integrations' && <IntegrationPanel />}
        </div>
      </div>
    </div>
  );
}
