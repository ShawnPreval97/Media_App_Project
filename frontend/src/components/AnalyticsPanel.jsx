import React from 'react';

export default function AnalyticsPanel() {
  const metrics = [
    { label: 'CTR', value: '2.4%' },
    { label: 'ROAS', value: '3.2x' },
    { label: 'Impressions', value: '150K' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📈 Analytics Loop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-4 bg-yellow-50 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-1">{m.label}</h3>
            <p className="text-gray-700 text-xl">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
