import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import Footer from "../components/Footer";
import { useIntersectionAnimation } from "../hooks/use-page-animations";

// Custom hook for counting animation with improved error handling and constraints
const useCountAnimation = (
  end: number,
  duration: number = 2000,
  startAnimation: boolean = false,
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    
    // Add error handling and constraints for edge cases
    if (end < 0) {
      console.warn("useCountAnimation: end value cannot be negative");
      return;
    }
    
    if (duration <= 0) {
      console.warn("useCountAnimation: duration must be greater than 0");
      setCount(end);
      return;
    }

    if (end === 0) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(animate);

    // Cleanup function to cancel animation on unmount
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, startAnimation]);

  return count;
};

// Animated Counter Component with improved props validation and accessibility
const AnimatedCounter = ({
  value,
  suffix = "%",
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
    <div className={className} role="status" aria-live="polite">
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

  // Use the intersection animation hook for metrics animation
  const { elementRef: metricsRef, isVisible: startMetricsAnimation } =
    useIntersectionAnimation(0.5, "0px 0px -50px 0px");

  // Enhanced image modal handlers with useCallback for performance
  const handleImageClick = useCallback((src: string, alt: string) => {
    setEnlargedImage({ src, alt });
  }, []);

  const handleCloseModal = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // Handle escape key and prevent body scroll when modal is open
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && enlargedImage) {
        handleCloseModal();
      }
    };

    if (enlargedImage) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [enlargedImage, handleCloseModal]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

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
                <Heart className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-[#131417] mb-2">Clinical Care Hub</h3>
              <p className="text-sm text-[#9FA0A3]">Patient records, diagnostics, treatment plans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-[#131417] mb-2">AI Operations Center</h3>
              <p className="text-sm text-[#9FA0A3]">Staffing predictions, resource optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" aria-hidden="true" />
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
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
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
                <BarChart3 className="w-5 h-5 text-blue-600" aria-hidden="true" />
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
                  <Target className="w-6 h-6 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-sm text-[#131417] mb-2">Discovery</h3>
                <p className="text-xs text-[#9FA0A3]">3 months of ethnographic research across hospital departments</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Map className="w-6 h-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-sm text-[#131417] mb-2">Synthesis</h3>
                <p className="text-xs text-[#9FA0A3]">Journey mapping and information architecture development</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GitBranch className="w-6 h-6 text-yellow-600" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-sm text-[#131417] mb-2">Iteration</h3>
                <p className="text-xs text-[#9FA0A3]">4 major design cycles with clinical stakeholder validation</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TestTube className="w-6 h-6 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-sm text-[#131417] mb-2">Testing</h3>
                <p className="text-xs text-[#9FA0A3]">Usability testing with 23 healthcare professionals</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-6 h-6 text-blue-600" aria-hidden="true" />
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
                  <AlertTriangle className="w-5 h-5 text-red-600" aria-hidden="true" />
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
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      Context-aware interfaces that surface relevant information based on role and location
                    </li>
                    <li className="flex items-start gap-3 text-[#131417]">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      Predictive AI that anticipates needs rather than reactive reporting
                    </li>
                    <li className="flex items-start gap-3 text-[#131417]">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      Mobile-first architecture for point-of-care accessibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Results Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
              Impact & Results
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#9FA0A3]">Customer support tickets</span>
                    <span className="font-medium text-red-600">↓58% vs. legacy</span>
                  </div>
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

      {/* Enhanced Image Modal Overlay with better accessibility */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Close enlarged image modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white flex items-center justify-center p-8">
              <div className="text-center">
                <Heart className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <h3 id="modal-title" className="text-xl font-medium text-gray-800 mb-2">
                  {enlargedImage.alt}
                </h3>
                <p id="modal-description" className="text-gray-600">
                  Comprehensive hospital management with context-aware AI and mobile-first design
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}