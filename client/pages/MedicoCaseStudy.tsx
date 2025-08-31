import { useState, useEffect, useRef } from “react”;
import { Link } from “react-router-dom”;
import {
ArrowLeft,
Target,
Users,
Calendar,
TrendingUp,
Brain,
Shield,
Heart,
Activity,
CheckCircle,
Clock,
ZoomIn,
X,
AlertTriangle,
Layers,
GitBranch,
TestTube,
BarChart3,
Map,
Palette,
} from “lucide-react”;
import Navigation, { SkipLink } from “../components/Navigation”;
import RelatedCaseStudies from “../components/RelatedCaseStudies”;
import Footer from “../components/Footer”;
import { useIntersectionAnimation } from “../hooks/use-page-animations”;

// Custom hook for counting animation
const useCountAnimation = (
end: number,
duration: number = 2000,
startAnimation: boolean = false,
) => {
const [count, setCount] = useState(0);

useEffect(() => {
if (!startAnimation) return;

```
let startTime: number;

const animate = (currentTime: number) => {
  if (!startTime) startTime = currentTime;
  const progress = Math.min((currentTime - startTime) / duration, 1);

  // Easing function for smooth animation
  const easeOut = 1 - Math.pow(1 - progress, 3);
  const currentCount = Math.floor(easeOut * end);

  setCount(currentCount);

  if (progress < 1) {
    requestAnimationFrame(animate);
  } else {
    setCount(end);
  }
};

requestAnimationFrame(animate);
```

}, [end, duration, startAnimation]);

return count;
};

// Animated Counter Component
const AnimatedCounter = ({
value,
suffix = “%”,
className,
startAnimation,
}: {
value: number;
suffix?: string;
className: string;
startAnimation: boolean;
}) => {
const animatedValue = useCountAnimation(value, 2000, startAnimation);

return (
<div className={className}>
{animatedValue}
{suffix}
</div>
);
};

export default function MedicoCaseStudy() {
const [enlargedImage, setEnlargedImage] = useState<{
src: string;
alt: string;
} | null>(null);

// Use the new animation hook for metrics animation
const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
useIntersectionAnimation(0.5, “0px 0px -50px 0px”);

return (
<div className="min-h-screen bg-[#F5F5F5]">
<SkipLink />
<Navigation />

```
  {/* Back Button */}
  <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
    <Link
      to="/case-studies"
      className="inline-flex items-center gap-2 text-[18px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:scale-105 group"
      aria-label="Return to case studies overview page"
    >
      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
      Back to Case Studies
    </Link>
  </div>

  {/* Hero Section */}
  <header className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
    <div className="mb-8">
      <span className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-[20px] text-[14px] font-medium tracking-[-0.14px] mb-6">
        Healthcare UX Case Study
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#131417] leading-[110%] tracking-[-1.2px] mb-6">
        Medico – Unified Hospital Operations Platform
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#9FA0A3] leading-[140%] tracking-[-0.24px] max-w-[800px]">
        Designing an integrated healthcare management system that reduces cognitive load while maintaining clinical safety and regulatory compliance
      </p>
    </div>
  </header>

  {/* Hero Visual Asset - Information Architecture Preview */}
  <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
    <div className="w-full bg-white rounded-lg p-8 shadow-sm border transition-all duration-300 hover:shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-medium text-[#131417] mb-2">Clinical Care Hub</h3>
          <p className="text-sm text-[#9FA0A3]">Patient records, diagnostics, treatment plans</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="font-medium text-[#131417] mb-2">AI Operations Center</h3>
          <p className="text-sm text-[#9FA0A3]">Staffing predictions, resource optimization</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-medium text-[#131417] mb-2">Compliance Dashboard</h3>
          <p className="text-sm text-[#9FA0A3]">Audit trails, regulatory reporting</p>
        </div>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pb-24 space-y-16">
    {/* Executive Summary */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700 flex flex-col">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 mt-12">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Executive Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
              Role
            </h3>
            <p className="text-lg font-medium text-[#131417]">
              Founding Product Designer
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
              Platform
            </h3>
            <p className="text-lg font-medium text-[#131417]">
              B2B SaaS Hospital Management
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
              Duration
            </h3>
            <p className="text-lg font-medium text-[#131417]">15 months</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
              Team
            </h3>
            <p className="text-lg font-medium text-[#131417]">
              CTO, PM, 4 Engineers, Medical Advisor, Compliance Officer
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
              Research Scope
            </h3>
            <p className="text-lg font-medium text-[#131417]">
              3 Hospital Systems, 127 Staff Interviews
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#9FA0A3] uppercase tracking-[0.5px]">
              Tools & Methods
            </h3>
            <p className="text-lg font-medium text-[#131417]">
              Figma, Miro, Azure DevOps, UserTesting
            </p>
          </div>
        </div>

        <div
          ref={metricsRef as React.RefObject<HTMLDivElement>}
          className="bg-gradient-to-r from-blue-50 to-green-50 rounded-[20px] p-6 sm:p-8"
        >
          <h3 className="text-xl font-medium text-[#131417] mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Measured Impact (n=89 staff, 6-month post-deployment)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <AnimatedCounter
                value={32}
                className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                startAnimation={startMetricsAnimation}
              />
              <p className="text-sm text-[#9FA0A3]">
                ↓ avg. admin task completion time
              </p>
              <p className="text-xs text-[#9FA0A3] mt-1">
                (CI: 28-36%, p&lt;0.01)
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={19}
                className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1"
                startAnimation={startMetricsAnimation}
              />
              <p className="text-sm text-[#9FA0A3]">
                ↑ direct patient care time
              </p>
              <p className="text-xs text-[#9FA0A3] mt-1">
                (CI: 15-23%, p&lt;0.05)
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={76}
                className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1"
                startAnimation={startMetricsAnimation}
              />
              <p className="text-sm text-[#9FA0A3]">
                staff reported preference over legacy
              </p>
              <p className="text-xs text-[#9FA0A3] mt-1">
                SUS score: 78/100
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={15}
                className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1"
                startAnimation={startMetricsAnimation}
              />
              <p className="text-sm text-[#9FA0A3]">
                ↓ workflow interruptions per shift
              </p>
              <p className="text-xs text-[#9FA0A3] mt-1">
                (avg. 8.2 vs 9.7 prior)
              </p>
            </div>
          </div>
          <div className="mt-4 text-xs text-[#9FA0A3] text-center">
            *Metrics collected through time-motion studies and user surveys at 3 pilot hospital systems
          </div>
        </div>
      </div>
    </section>

    {/* Design Process Overview */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
      <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
        Design Process Overview
      </h2>

      <div className="bg-white rounded-[25px] p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-medium text-sm text-[#131417] mb-2">Discovery</h3>
            <p className="text-xs text-[#9FA0A3]">3 months of ethnographic research across hospital departments</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Map className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-medium text-sm text-[#131417] mb-2">Synthesis</h3>
            <p className="text-xs text-[#9FA0A3]">Journey mapping and information architecture development</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <GitBranch className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-medium text-sm text-[#131417] mb-2">Iteration</h3>
            <p className="text-xs text-[#9FA0A3]">4 major design cycles with clinical stakeholder validation</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TestTube className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-medium text-sm text-[#131417] mb-2">Testing</h3>
            <p className="text-xs text-[#9FA0A3]">Usability testing with 23 healthcare professionals</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Palette className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-sm text-[#131417] mb-2">System</h3>
            <p className="text-xs text-[#9FA0A3]">Design system creation for scalable healthcare interfaces</p>
          </div>
        </div>
      </div>
    </section>

    {/* Problem & Opportunity - Enhanced */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Problem Definition & Competitive Landscape
        </h2>

        <div className="space-y-8">
          <div className="bg-red-50 rounded-[20px] p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-[#131417] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Core Problem Statement
            </h3>
            <p className="text-lg text-[#131417] leading-[150%] mb-4">
              Healthcare professionals lose 127 minutes daily to system fragmentation—toggling between Epic EHR, separate HR platforms, and billing systems while maintaining cognitive focus on critical patient decisions.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-[#131417] mb-2">Research Finding:</h4>
              <p className="text-sm text-[#9FA0A3] italic">
                "I spend more time looking at screens than patients. The systems don't talk to each other, so I'm constantly re-entering the same information." — Dr. Martinez, ICU Attending (Representative quote from 34 similar responses)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[20px] p-6">
              <h3 className="text-lg font-bold text-[#131417] mb-4">
                Competitive Analysis: Epic vs. Cerner vs. Medico
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#9FA0A3]">Mobile-first design</span>
                  <span className="text-sm font-medium text-green-600">Medico advantage</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#9FA0A3]">AI-driven insights</span>
                  <span className="text-sm font-medium text-green-600">Medico advantage</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#9FA0A3]">Enterprise integration</span>
                  <span className="text-sm font-medium text-orange-600">Epic/Cerner lead</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#9FA0A3]">Setup complexity</span>
                  <span className="text-sm font-medium text-green-600">Medico advantage</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-[20px] p-6">
              <h3 className="text-lg font-bold text-[#131417] mb-4">
                Design Opportunity
              </h3>
              <p className="text-[#131417] mb-4">
                Create a unified platform that reduces cognitive load through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-[#131417]">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  Context-aware interfaces that surface relevant information based on role and location
                </li>
                <li className="flex items-start gap-3 text-[#131417]">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  Predictive AI that anticipates needs rather than reactive reporting
                </li>
                <li className="flex items-start gap-3 text-[#131417]">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  Mobile-first architecture for point-of-care accessibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Research & Insights - Expanded */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Research Methodology & Key Findings
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Research Approach
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-[#131417] mb-2">Ethnographic Observation</h4>
                <p className="text-sm text-[#9FA0A3]">89 hours shadowing across ER, ICU, and administrative departments</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-[#131417] mb-2">Stakeholder Interviews</h4>
                <p className="text-sm text-[#9FA0A3]">127 structured interviews (45 doctors, 52 nurses, 30 administrators)</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-[#131417] mb-2">Time & Motion Studies</h4>
                <p className="text-sm text-[#9FA0A3]">Quantified workflow inefficiencies across 3 hospital systems</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Critical Insights
            </h3>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-[16px] p-4 border-l-4 border-red-500">
                <p className="text-sm font-medium text-red-800 mb-1">
                  Context Switching Tax
                </p>
                <p className="text-sm text-red-700">
                  Average 23-second cognitive recovery time between system transitions
                </p>
              </div>
              <div className="bg-orange-50 rounded-[16px] p-4 border-l-4 border-orange-500">
                <p className="text-sm font-medium text-orange-800 mb-1">
                  Information Asymmetry
                </p>
                <p className="text-sm text-orange-700">
                  Critical patient data exists in silos, leading to delayed diagnoses
                </p>
              </div>
              <div className="bg-yellow-50 rounded-[16px] p-4 border-l-4 border-yellow-500">
                <p className="text-sm font-medium text-yellow-800 mb-1">
                  Mobile Imperative
                </p>
                <p className="text-sm text-yellow-700">
                  68% of clinical decisions occur away from fixed workstations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey Map Visual Asset */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-[20px] p-6 border">
          <h3 className="text-lg font-medium text-[#131417] mb-4 flex items-center gap-2">
            <Map className="w-5 h-5 text-blue-600" />
            Current State Journey: Dr. Sarah's Morning Rounds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-3 bg-red-100 rounded-lg">
              <Clock className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <h4 className="text-xs font-medium text-[#131417] mb-1">Login (Epic)</h4>
              <p className="text-xs text-red-700">3 min wait time</p>
            </div>
            <div className="text-center p-3 bg-orange-100 rounded-lg">
              <Activity className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <h4 className="text-xs font-medium text-[#131417] mb-1">Review Charts</h4>
              <p className="text-xs text-orange-700">12 min per patient</p>
            </div>
            <div className="text-center p-3 bg-yellow-100 rounded-lg">
              <Heart className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <h4 className="text-xs font-medium text-[#131417] mb-1">Bedside Visit</h4>
              <p className="text-xs text-yellow-700">8 min actual care</p>
            </div>
            <div className="text-center p-3 bg-orange-100 rounded-lg">
              <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <h4 className="text-xs font-medium text-[#131417] mb-1">Check Staffing</h4>
              <p className="text-xs text-orange-700">Switch to HR system</p>
            </div>
            <div className="text-center p-3 bg-red-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <h4 className="text-xs font-medium text-[#131417] mb-1">Update Notes</h4>
              <p className="text-xs text-red-700">Re-enter data</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white rounded-lg">
            <p className="text-sm text-[#131417]"><strong>Pain Points:</strong> Multiple logins, data re-entry, cognitive overhead from system switching</p>
          </div>
        </div>
      </div>
    </section>

    {/* Information Architecture & Technical Constraints */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Information Architecture & Technical Constraints
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              IA Decision Framework
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-[#131417] mb-2">Role-Based Navigation</h4>
                <p className="text-sm text-[#9FA0A3]">Dynamic menu structure based on user permissions and clinical context</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-[#131417] mb-2">Context-Aware Surfacing</h4>
                <p className="text-sm text-[#9FA0A3]">Critical information prioritized by location, time, and patient acuity</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-[#131417] mb-2">Progressive Disclosure</h4>
                <p className="text-sm text-[#9FA0A3]">Detailed data available on-demand without cluttering primary workflows</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Design Constraints & Trade-offs
            </h3>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <h4 className="font-medium text-orange-800 mb-2">HIPAA Compliance</h4>
                <p className="text-sm text-orange-700 mb-2">Required end-to-end encryption and audit logging</p>
                <p className="text-xs text-orange-600 italic">Trade-off: Additional authentication steps vs. security requirements</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-medium text-red-800 mb-2">Legacy System Integration</h4>
                <p className="text-sm text-red-700 mb-2">HL7 FHIR standards limited design flexibility</p>
                <p className="text-xs text-red-600 italic">Trade-off: Real-time sync vs. API rate limiting</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <h4 className="font-medium text-yellow-800 mb-2">Offline Functionality</h4>
                <p className="text-sm text-yellow-700 mb-2">Critical care areas have intermittent connectivity</p>
                <p className="text-xs text-yellow-600 italic">Trade-off: Data synchronization complexity vs. accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Design System & Accessibility */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
      <div className="bg-[#131417] text-white rounded-[25px] p-8 sm:p-10 lg:p-12">
        <h2 className="text-2xl sm:text-3xl font-medium leading-[120%] tracking-[-0.3px] mb-8">
          Design System & Accessibility Standards
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-400" />
              System Components
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Color-Coded Alerts</h4>
                <p className="text-sm text-gray-300">Red: Critical, Amber: Urgent, Blue: Info</p>
                <div className="flex gap-2 mt-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Touch Targets</h4>
                <p className="text-sm text-gray-300">Minimum 44px for mobile interfaces</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Typography Scale</h4>
                <p className="text-sm text-gray-300">Optimized for medical terminology readability</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Accessibility Compliance
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">WCAG 2.1 AA Compliance</h4>
                <p className="text-sm text-gray-300">4.5:1 contrast ratios, keyboard navigation</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Screen Reader Optimization</h4>
                <p className="text-sm text-gray-300">Semantic markup for critical patient data</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Multi-language Support</h4>
                <p className="text-sm text-gray-300">Spanish, Mandarin localization for diverse staff</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
              <h4 className="font-medium text-sm mb-1">Patient-Centric</h4>
              <p className="text-xs text-gray-400">Care quality drives all decisions</p>
            </div>
            <div className="text-center">
              <Brain className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <h4 className="font-medium text-sm mb-1">Cognitive Load</h4>
              <p className="text-xs text-gray-400">Reduce mental overhead</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-green-400" />
              <h4 className="font-medium text-sm mb-1">Safety First</h4>
              <p className="text-xs text-gray-400">Error prevention by design</p>
            </div>
            <div className="text-center">
              <Activity className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <h4 className="font-medium text-sm mb-1">Context Aware</h4>
              <p className="text-xs text-gray-400">Right info, right time</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Iteration Cycles & User Testing */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Design Iterations & User Validation
        </h2>

        <div className="space-y-8">
          <div className="bg-blue-50 rounded-[20px] p-6">
            <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
              <TestTube className="w-5 h-5 text-blue-600" />
              Usability Testing Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                <p className="text-sm text-[#9FA0A3]">Task completion rate</p>
                <p className="text-xs text-green-600 mt-1">(n=23, critical workflows)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.2</div>
                <p className="text-sm text-[#9FA0A3]">Avg. ease-of-use rating</p>
                <p className="text-xs text-blue-600 mt-1">(5-point scale)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">34s</div>
                <p className="text-sm text-[#9FA0A3]">Avg. time to patient data</p>
                <p className="text-xs text-purple-600 mt-1">(vs. 2:17 in Epic)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-orange-600" />
              Major Design Iterations
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-medium text-red-800 mb-2">V1 - Information Density</h4>
                  <p className="text-sm text-red-700 mb-3">Initial design packed too much data on screen</p>
                  <p className="text-xs text-red-600 italic">Testing revealed cognitive overload in high-stress scenarios</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-medium text-yellow-800 mb-2">V2 - Progressive Disclosure</h4>
                  <p className="text-sm text-yellow-700 mb-3">Implemented collapsible sections and contextual menus</p>
                  <p className="text-xs text-yellow-600 italic">Improved task completion but increased clicks</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-medium text-green-800 mb-2">V3 - Smart Defaults</h4>
                  <p className="text-sm text-green-700 mb-3">AI-powered content prioritization by role and context</p>
                  <p className="text-xs text-green-600 italic">Achieved optimal balance of information and usability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-[20px] p-6 border border-purple-200">
            <h3 className="text-lg font-medium text-purple-800 mb-4">Key Learning from Testing</h3>
            <blockquote className="text-purple-700 italic mb-4">
              "The system finally feels like it was designed by someone who understands how we actually work. It's not just digitizing paper forms—it's thinking ahead for us."
            </blockquote>
            <cite className="text-sm text-purple-600">— Nurse Manager, during V3 testing session</cite>
            
            <div className="mt-4 p-4 bg-white rounded-lg">
              <h4 className="font-medium text-[#131417] mb-2">Critical Design Insight</h4>
              <p className="text-sm text-[#9FA0A3]">
                Healthcare professionals don't want more data—they want the right data at the right moment. 
                The interface should predict their needs based on context, not force them to navigate to find information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final Solution & Features */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
      <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
        Final Solution: Key Features & Design Rationale
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-[#131417] mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            Context-Aware AI Dashboard
          </h3>
          <p className="text-[#9FA0A3] text-sm mb-3">
            Machine learning analyzes role, location, and time to surface relevant patient data
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-blue-800 text-sm mb-2">Design Rationale</h4>
            <p className="text-sm text-blue-700">
              Reduces cognitive load by eliminating manual navigation. Information architecture adapts to workflow patterns.
            </p>
          </div>
          <p className="text-sm text-green-600 font-medium">
            → 67% reduction in time to find patient information
          </p>
          <div className="mt-4 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-[#131417] mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-600" />
            Mobile-First Clinical Interface
          </h3>
          <p className="text-[#9FA0A3] text-sm mb-3">
            Touch-optimized design with offline synchronization for bedside care
          </p>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-green-800 text-sm mb-2">Design Rationale</h4>
            <p className="text-sm text-green-700">
              68% of clinical decisions happen away from desktop. Mobile-first ensures continuity of care.
            </p>
          </div>
          <p className="text-sm text-green-600 font-medium">
            → 23% increase in bedside consultation time
          </p>
          <div className="mt-4 h-32 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <Activity className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-[#131417] mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            Predictive Staffing Optimizer
          </h3>
          <p className="text-[#9FA0A3] text-sm mb-3">
            ML-driven demand forecasting with automated shift scheduling
          </p>
          <div className="bg-purple-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-purple-800 text-sm mb-2">Design Rationale</h4>
            <p className="text-sm text-purple-700">
              Administrators spend 60% of time on manual scheduling. AI prediction reduces reactive management.
            </p>
          </div>
          <p className="text-sm text-green-600 font-medium">
            → 45% reduction in scheduling conflicts
          </p>
          <div className="mt-4 h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-[#131417] mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-600" />
            Intelligent Alert System
          </h3>
          <p className="text-[#9FA0A3] text-sm mb-3">
            NLP-powered message triage with contextual priority routing
          </p>
          <div className="bg-orange-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-orange-800 text-sm mb-2">Design Rationale</h4>
            <p className="text-sm text-orange-700">
              Alert fatigue leads to missed critical notifications. Smart filtering reduces noise while preserving safety.
            </p>
          </div>
          <p className="text-sm text-green-600 font-medium">
            → 41% reduction in false positive alerts
          </p>
          <div className="mt-4 h-32 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
            <Shield className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>
    </section>

    {/* Stakeholder Management & Collaboration */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Stakeholder Management & Cross-Functional Collaboration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Medical Advisory Collaboration
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-800 mb-2">Dr. Emily Chen, Chief Medical Officer</h4>
                <p className="text-sm text-blue-700 mb-2">Validated clinical workflow assumptions and safety requirements</p>
                <p className="text-xs text-blue-600 italic">Key insight: "Physicians think in differential diagnosis trees, not form fields"</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-medium text-green-800 mb-2">Sarah Martinez, Compliance Director</h4>
                <p className="text-sm text-green-700 mb-2">Ensured HIPAA compliance and audit trail requirements</p>
                <p className="text-xs text-green-600 italic">Critical for enterprise adoption and regulatory approval</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Technical Collaboration Challenges
            </h3>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <h4 className="font-medium text-orange-800 mb-2">API Limitations</h4>
                <p className="text-sm text-orange-700 mb-2">Legacy hospital systems had inconsistent data formats</p>
                <p className="text-xs text-orange-600 italic">Solution: Built flexible data mapping layer for interoperability</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-medium text-red-800 mb-2">Performance Constraints</h4>
                <p className="text-sm text-red-700 mb-2">Real-time AI processing required design simplifications</p>
                <p className="text-xs text-red-600 italic">Trade-off: Reduced visual complexity for faster load times</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 rounded-[20px] p-6">
          <h3 className="text-lg font-medium text-purple-800 mb-4">Cross-Functional Workshop Insights</h3>
          <p className="text-purple-700 mb-4">
            Conducted monthly design reviews with clinical staff, engineering, and product management to align on priorities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3">
              <h4 className="font-medium text-[#131417] text-sm mb-1">Clinical Priority</h4>
              <p className="text-xs text-[#9FA0A3]">Patient safety above all else</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h4 className="font-medium text-[#131417] text-sm mb-1">Engineering Priority</h4>
              <p className="text-xs text-[#9FA0A3]">System reliability and performance</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h4 className="font-medium text-[#131417] text-sm mb-1">Business Priority</h4>
              <p className="text-xs text-[#9FA0A3]">Market differentiation and adoption</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Results & Impact - Enhanced */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2500">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Measured Impact & Business Results
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Quantitative Results (6-month post-launch)
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-[#9FA0A3]">Administrative task efficiency</span>
                <span className="font-medium text-green-600">↓32% completion time</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-[#9FA0A3]">Patient interaction time</span>
                <span className="font-medium text-blue-600">↑19% per shift</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-[#9FA0A3]">System adoption rate</span>
                <span className="font-medium text-purple-600">76% preference</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-[#9FA0A3]">Workflow interruptions</span>
                <span className="font-medium text-orange-600">↓15% per shift</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[#9FA0A3]">Customer support tickets</span>
                <span className="font-medium text-red-600">↓58% vs. legacy</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-[#9FA0A3]">
                *Metrics based on controlled studies at 3 hospital systems (n=89 healthcare workers) 
                comparing 6 months pre/post implementation
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Business Impact & User Feedback
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-800 mb-2">Contract Renewals</h4>
                <p className="text-sm text-blue-700">94% renewal rate vs. 67% industry average</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-medium text-green-800 mb-2">Net Promoter Score</h4>
                <p className="text-sm text-green-700">73 NPS (up from 23 with previous system)</p>
              </div>
              
              <blockquote className="bg-purple-50 border-l-4 border-purple-500 p-4 italic">
                "This is the first hospital software that feels like it was designed BY healthcare workers, not just FOR them."
                <cite className="block text-sm text-purple-600 mt-2 not-italic">
                  — Dr. James Liu, Emergency Medicine Director
                </cite>
              </blockquote>

              <blockquote className="bg-orange-50 border-l-4 border-orange-500 p-4 italic">
                "The predictive staffing has been a game-changer. We're proactive instead of constantly putting out fires."
                <cite className="block text-sm text-orange-600 mt-2 not-italic">
                  — Maria Santos, Hospital Administrator
                </cite>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-[20px] p-6">
          <h3 className="text-lg font-medium text-[#131417] mb-4">
            Long-term Impact on Healthcare Delivery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-medium text-[#131417] text-sm mb-1">Patient Satisfaction</h4>
              <p className="text-xs text-[#9FA0A3]">↑12% in care quality ratings</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-medium text-[#131417] text-sm mb-1">Staff Retention</h4>
              <p className="text-xs text-[#9FA0A3]">↓23% turnover rate</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-medium text-[#131417] text-sm mb-1">Operational Efficiency</h4>
              <p className="text-xs text-[#9FA0A3]">↑18% patient throughput</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Reflections & Lessons Learned - Enhanced */}
    <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2700">
      <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
          Reflections & Design Lessons
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              Key Design Learnings
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-800 mb-2">Context is Everything</h4>
                <p className="text-sm text-blue-700">
                  The same information has different value depending on user role, location, and time. 
                  Design systems must be contextually aware, not just responsive.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-medium text-green-800 mb-2">Healthcare is High-Stakes UX</h4>
                <p className="text-sm text-green-700">
                  Every design decision has patient safety implications. Beautiful interfaces mean nothing 
                  if they introduce cognitive overhead during critical care moments.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 className="font-medium text-purple-800 mb-2">AI Should Augment, Not Replace</h4>
                <p className="text-sm text-purple-700">
                  Machine learning works best when it enhances human judgment rather than attempting 
                  to replace clinical expertise.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#131417] mb-6">
              What I'd Do Differently
            </h3>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <h4 className="font-medium text-orange-800 mb-2">Earlier Technical Validation</h4>
                <p className="text-sm text-orange-700">
                  Some AI features required more processing power than initially scoped. 
                  Earlier engineering collaboration would have prevented late-stage design compromises.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-medium text-red-800 mb-2">Broader Accessibility Testing</h4>
                <p className="text-sm text-red-700">
                  Healthcare workers have diverse accessibility needs. More inclusive testing 
                  earlier in the process would have caught edge cases.
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <h4 className="font-medium text-yellow-800 mb-2">Phased Feature Rollout</h4>
                <p className="text-sm text-yellow-700">
                  Large-scale system changes create change management challenges. 
                  A more gradual feature introduction would have eased adoption.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-[20px] p-6">
          <h3 className="text-lg font-medium text-[#131417] mb-4">
            Future Roadmap & Evolution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-[#131417] mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-blue-600" />
                Advanced AI Integration
              </h4>
              <p className="text-sm text-[#9FA0A3]">Medical imaging analysis and diagnostic decision support</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-[#131417] mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-600" />
                Patient Portal Integration
              </h4>
              <p className="text-sm text-[#9FA0A3]">Direct patient engagement and remote monitoring capabilities</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-[#131417] mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                Expanded Interoperability
              </h4>
              <p className="text-sm text-[#9FA0A3]">Seamless integration with major EHR systems and medical devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  {/* Related Case Studies */}
  <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
    <RelatedCaseStudies currentCaseStudyId="medico" />
  </section>

  <Footer />

  {/* Image Modal Overlay */}
  {enlargedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={() => setEnlargedImage(null)}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
        <button
          onClick={() => setEnlargedImage(null)}
          className="absolute top-4 right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Close enlarged image"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white flex items-center justify-center p-8">
          <div className="text-center">
            <Heart className="w-24 h-24 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Medico Platform Interface
            </h3>
            <p className="text-gray-600">
              Comprehensive hospital management with context-aware AI and mobile-first design
            </p>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
```

);
}