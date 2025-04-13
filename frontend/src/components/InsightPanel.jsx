import React, { useState } from 'react';
import Papa from 'papaparse';

export default function InsightPanel() {
  const [data, setData] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">🧠 Insight Pivot</h2>
      <input type="file" accept=".csv" onChange={handleUpload} className="mb-4" />
      {data.length > 0 && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-1">Top Segments</h3>
            <p>{data[0]['Segment'] || 'Example: Budget Seekers'}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-1">Regression Summary</h3>
            <p>Satisfaction ↑ 0.62 with Recommendation Intent</p>
          </div>
        </div>
      )}
    </div>
  );
}
