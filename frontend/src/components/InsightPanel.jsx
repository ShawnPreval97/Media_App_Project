import React from 'react';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InsightPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

      {/* Smart Segmentation Table */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>📊 Smart Segmentation Table</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3">Segment</th>
                <th className="py-2 px-3">Strongly Agree</th>
                <th className="py-2 px-3">Agree</th>
                <th className="py-2 px-3">Neutral</th>
                <th className="py-2 px-3">Disagree</th>
                <th className="py-2 px-3">Strongly Disagree</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-3">18–29</td><td>41%</td><td>27%</td><td>14%</td><td>12%</td><td>6%</td></tr>
              <tr><td className="py-2 px-3">30–44</td><td>23%</td><td>14%</td><td>8%</td><td>8%</td><td>8%</td></tr>
              <tr><td className="py-2 px-3">45–60</td><td>14%</td><td>8%</td><td>8%</td><td>8%</td><td>6%</td></tr>
              <tr><td className="py-2 px-3">60+</td><td>6%</td><td>3%</td><td>3%</td><td>8%</td><td>6%</td></tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Insight Memory Bank */}
      <Card>
        <CardHeader>
          <CardTitle>🧠 Insight Memory Bank</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border p-3 rounded-xl shadow">
            <p>“Really pleased with the service. App gets better each update.”</p>
            <Button variant="link" className="text-blue-600 px-0">Send more frequent updates</Button>
          </div>
          <div className="border p-3 rounded-xl shadow">
            <p>“Way better than all other subscriptions.”</p>
            <Button variant="link" className="text-blue-600 px-0">Feature customer comparisons</Button>
          </div>
          <div className="border p-3 rounded-xl shadow">
            <p>“A bit confusing to set up, but worth it.”</p>
            <Button variant="link" className="text-blue-600 px-0">Highlight ease of use</Button>
          </div>
        </CardContent>
      </Card>

      {/* Voice of Customer Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Voice of Customer Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This section will visualize sentiment trends based on customer quotes and ratings. (Chart placeholder here)</p>
        </CardContent>
      </Card>

      {/* Lucidframe Assistant */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>🤖 Lucidframe Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Ask natural questions like:</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            <li>"Which group had the highest satisfaction for Feature X?"</li>
            <li>"What are the top insights driving detractors?"</li>
          </ul>
          <Button variant="outline">Try a Demo Query</Button>
        </CardContent>
      </Card>

    </div>
  );
}

