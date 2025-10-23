// Example: How to integrate the workflow pain points diagram into ComputisCaseStudy.tsx

// Option 1: Static Image with Zoom Modal
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

function WorkflowDiagramSection() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <section className="py-16 bg-gray-50" data-loc="workflow-pain-points">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Current Workflow Inefficiencies
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Our research revealed critical pain points in the existing
          CPA-to-engineer workflow, resulting in delays, transparency issues,
          and communication gaps.
        </p>

        {/* Diagram Container */}
        <div
          className="relative group cursor-pointer"
          onClick={() => setIsEnlarged(true)}
        >
          <img
            src="/Computis Assets/workflow-pain-points.png"
            alt="Workflow diagram showing CPA request through engineering ticket to Python script execution, with annotations highlighting 2.3-day wait times and lack of explainability"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-lg">
              <ZoomIn className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Enlarged Modal */}
        <Dialog open={isEnlarged} onOpenChange={setIsEnlarged}>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="max-w-6xl">
            <DialogTitle className="sr-only">
              Enlarged Workflow Diagram
            </DialogTitle>
            <img
              src="/Computis Assets/workflow-pain-points.png"
              alt="Workflow diagram showing CPA request through engineering ticket to Python script execution, with annotations highlighting 2.3-day wait times and lack of explainability"
              className="w-full"
            />
          </DialogContent>
        </Dialog>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="text-red-600 font-bold text-xl mb-2">2.3 Days</div>
            <div className="text-gray-700">
              Average wait time between request and delivery
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="text-red-600 font-bold text-xl mb-2">
              Zero Visibility
            </div>
            <div className="text-gray-700">
              No insight into processing status or execution
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="text-red-600 font-bold text-xl mb-2">
              Poor Explainability
            </div>
            <div className="text-gray-700">
              CPAs can't interpret or explain technical results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Option 2: Interactive HTML Embed
function InteractiveWorkflowDiagram() {
  return (
    <section className="py-16" data-loc="workflow-interactive">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Explore the Workflow Pain Points
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <iframe
              src="/Computis Assets/workflow-pain-points.html"
              title="Interactive Computis Workflow Pain Points Diagram"
              className="w-full h-[700px] border-0"
              style={{ minHeight: "700px" }}
            />
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Hover over elements to see detailed explanations
          </p>
        </div>
      </div>
    </section>
  );
}

// Option 3: SVG Direct Embed (for maximum control)
function SVGWorkflowDiagram() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Identifying Core Workflow Problems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through stakeholder interviews and process mapping, we identified
            three critical bottlenecks that were impacting CPA efficiency and
            client satisfaction.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <object
            data="/Computis Assets/workflow-pain-points.svg"
            type="image/svg+xml"
            className="w-full"
            aria-label="Workflow diagram showing CPA request through engineering ticket to Python script execution, with annotations highlighting 2.3-day wait times and lack of explainability"
          >
            {/* Fallback to PNG if SVG fails */}
            <img
              src="/Computis Assets/workflow-pain-points.png"
              alt="Workflow diagram showing CPA request through engineering ticket to Python script execution, with annotations highlighting 2.3-day wait times and lack of explainability"
            />
          </object>
        </div>

        {/* Problem-Solution Bridge */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              How Computis Addresses These Pain Points
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>
                  <strong>Instant Processing:</strong> Self-service interface
                  reduces 2.3-day wait to under 5 minutes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>
                  <strong>Full Transparency:</strong> Real-time progress
                  tracking and status updates throughout process
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>
                  <strong>Built-in Explainability:</strong> Plain-language
                  summaries and visual anomaly highlighting
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Recommended placement in ComputisCaseStudy.tsx:
// Insert after the "Impact at a Glance" section and before "The Problem" section
// This provides visual context before diving into detailed problem description

export {
  WorkflowDiagramSection,
  InteractiveWorkflowDiagram,
  SVGWorkflowDiagram,
};
