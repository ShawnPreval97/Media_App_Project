
import { useState } from 'react';

export default function App() {
  const [csvFile, setCsvFile] = useState(null);
  const [preview, setPreview] = useState("No data yet");

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', csvFile);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => setPreview(data.summary))
    .catch(err => console.error(err));
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Lucidframe</h1>
      <input type="file" onChange={e => setCsvFile(e.target.files[0])} />
      <button onClick={handleUpload}>Analyze</button>
      <pre>{preview}</pre>
    </main>
  );
}
