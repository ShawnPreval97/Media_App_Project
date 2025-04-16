import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import InsightPanel from "./components/InsightPanel";
import MediaPanel from "./components/MediaPanel";
import AnalyticsPanel from "./components/AnalyticsPanel";
import IntegrationPanel from "./components/IntegrationPanel";

export default function App() {
  return (
    <div className="p-6">
      <Tabs defaultValue="insight" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="insight">Insight Pivot</TabsTrigger>
          <TabsTrigger value="media">Media Blueprint</TabsTrigger>
          <TabsTrigger value="analytics">Analytics Loop</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="insight">
          <InsightPanel />
        </TabsContent>
        <TabsContent value="media">
          <MediaPanel />
        </TabsContent>
        <TabsContent value="analytics">
          <AnalyticsPanel />
        </TabsContent>
        <TabsContent value="integration">
          <IntegrationPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}

