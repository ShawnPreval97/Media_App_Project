import React from 'react';

export default function MediaPanel() {
  const weeks = ['Week 1', 'Week 2', 'Week 3'];
  const channels = [
    { name: 'Instagram', values: [500, 600, 700] },
    { name: 'Google Search', values: [400, 450, 500] },
    { name: 'YouTube', values: [300, 350, 400] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
  
      {/* Smart Media Calendar */}
      <div className="bg-white p-6 rounded-2xl shadow col-span-full">
        <h2 className="text-xl font-semibold mb-4">📅 Smart Media Calendar</h2>
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-500 uppercase border-b">
            <tr>
              <th className="py-2 px-3">Channel</th>
              {weeks.map((week, i) => (
                <th key={i} className="py-2 px-3">{week}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {channels.map((channel, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-3 font-medium text-gray-800">{channel.name}</td>
                {channel.values.map((val, i) => (
                  <td key={i} className="py-2 px-3">${val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Channel Mix Optimizer */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">📊 Channel Mix Optimizer</h2>
        <p className="text-sm text-gray-600">
          Adjust channel weights to optimize ROAS and CPL. (Sliders coming soon)
        </p>
      </div>
  
      {/* Media Playbook Templates */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">📘 Media Playbook Templates</h2>
        <p className="text-sm text-gray-600 mb-2">
          Save and reuse campaign blueprints like “Holiday Prospecting” or “Q3 Retargeting.”
        </p>
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition">
          + New Playbook
        </button>
      </div>
  
    </div>
  );
}
