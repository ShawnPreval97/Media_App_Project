import React from 'react';

export default function MediaPanel() {
  const weeks = ['Week 1', 'Week 2', 'Week 3'];
  const channels = [
    { name: 'Instagram', values: [500, 600, 700] },
    { name: 'Google Search', values: [400, 450, 500] },
    { name: 'YouTube', values: [300, 350, 400] },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">📋 Media Blueprint</h2>
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
  );
}
