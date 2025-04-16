import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnalyticsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

      {/* Causal Impact Analysis */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>📉 Causal Impact Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Compare performance before and after a campaign launch or feature change. Useful for identifying true lift from interventions.</p>
          <div className="mt-4 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Graph placeholder (line chart: Control vs Treatment)
          </div>
        </CardContent>
      </Card>

      {/* Attribution Map Visualizer */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>🔀 Attribution Map</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Visualize how different touchpoints (email, social, paid search) contributed to conversion.</p>
          <div className="mt-4 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Diagram placeholder (Sankey / funnel flow)
          </div>
        </CardContent>
      </Card>

      {/* Narrative Export */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>🧾 Narrative Summary Export</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">Auto-generate slide-friendly summaries with key takeaways, top metrics, and supporting visuals.</p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">📤 Export to Slide Deck</Button>
        </CardContent>
      </Card>

    </div>
  );
}

