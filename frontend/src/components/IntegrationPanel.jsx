import React, { useState } from 'react';

export default function IntegrationPanel() {
  const [googleConnected, setGoogleConnected] = useState(false);
  const [metaConnected, setMetaConnected] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">🔌 Integrations</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Google Ads</span>
          <button
            onClick={() => setGoogleConnected(!googleConnected)}
            className={`px-3 py-1 rounded text-sm font-medium ${googleConnected ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {googleConnected ? 'Connected' : 'Connect'}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span>Meta Ads</span>
          <button
            onClick={() => setMetaConnected(!metaConnected)}
            className={`px-3 py-1 rounded text-sm font-medium ${metaConnected ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {metaConnected ? 'Connected' : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  );
}
