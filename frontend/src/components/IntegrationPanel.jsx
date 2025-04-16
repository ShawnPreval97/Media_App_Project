import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IntegrationPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

      {/* Plaid or Banking Integration */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>🏦 Financial Data Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Connect accounts via Plaid or other providers to pull in transaction data, spending patterns, and account summaries.</p>
          <Button className="bg-green-600 text-white hover:bg-green-700">🔗 Connect with Plaid</Button>
        </CardContent>
      </Card>

      {/* CSV Upload */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>📂 Upload CSV Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Upload survey responses, ad performance exports, or budget sheets to populate Lucidframe modules.</p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">📁 Choose CSV File</Button>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>⚙️ Custom API Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Set up third-party connectors (e.g., Meta, Google Ads, survey panels) to enable live data sync across Lucidframe.</p>
          <Button className="bg-gray-700 text-white hover:bg-black">🛠️ Configure APIs</Button>
        </CardContent>
      </Card>

    </div>
  );
}
