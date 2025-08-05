import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  phase: 'discovery' | 'consideration' | 'decision' | 'retention';
  touchpoints: string[];
  painPoints: string[];
  opportunities: string[];
  emotions: 'frustrated' | 'neutral' | 'satisfied' | 'delighted';
}

interface UserJourneyMapProps {
  steps: JourneyStep[];
  className?: string;
}

const UserJourneyMap: React.FC<UserJourneyMapProps> = ({ steps, className }) => {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoint detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getEmotionColor = (emotion: JourneyStep['emotions']) => {
    const colors = {
      frustrated: 'bg-red-100 text-red-800 border-red-200',
      neutral: 'bg-gray-100 text-gray-800 border-gray-200',
      satisfied: 'bg-blue-100 text-blue-800 border-blue-200',
      delighted: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[emotion];
  };

  const getPhaseColor = (phase: JourneyStep['phase']) => {
    const colors = {
      discovery: 'bg-purple-50 border-purple-200',
      consideration: 'bg-blue-50 border-blue-200',
      decision: 'bg-orange-50 border-orange-200',
      retention: 'bg-green-50 border-green-200'
    };
    return colors[phase];
  };

  return (
    <div className={cn("w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8", className)}>
      {/* Journey Map Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          User Journey Map
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
          Follow the complete user experience from initial discovery through retention,
          identifying key touchpoints, pain points, and opportunities for improvement.
        </p>
      </div>

      {/* Phase Navigation - Mobile Horizontal Scroll, Desktop Fixed */}
      <div className="mb-8 sm:mb-12">
        <div className="flex overflow-x-auto sm:overflow-x-visible sm:grid sm:grid-cols-4 gap-4 pb-4 sm:pb-0">
          {['discovery', 'consideration', 'decision', 'retention'].map((phase) => {
            const phaseSteps = steps.filter(step => step.phase === phase);
            return (
              <div
                key={phase}
                className={cn(
                  "flex-shrink-0 w-64 sm:w-auto p-4 rounded-lg border-2 transition-all duration-300",
                  getPhaseColor(phase as JourneyStep['phase'])
                )}
              >
                <h3 className="font-semibold text-lg capitalize mb-2">{phase}</h3>
                <p className="text-sm text-gray-600">{phaseSteps.length} steps</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Journey Steps Container */}
      <div className="journey-map-container">
        {/* Desktop: Horizontal Layout with Grid */}
        <div className="hidden lg:block">
          <div 
            className="grid gap-6 mb-8"
            style={{ 
              gridTemplateColumns: `repeat(${steps.length}, minmax(280px, 1fr))`,
              overflowX: 'auto'
            }}
          >
            {steps.map((step, index) => (
              <JourneyStepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === step.id}
                onToggle={() => setActiveStep(activeStep === step.id ? null : step.id)}
                layout="desktop"
              />
            ))}
          </div>
        </div>

        {/* Tablet: 2-Column Grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {steps.map((step, index) => (
              <JourneyStepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === step.id}
                onToggle={() => setActiveStep(activeStep === step.id ? null : step.id)}
                layout="tablet"
              />
            ))}
          </div>
        </div>

        {/* Mobile: Single Column Accordion */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <JourneyStepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === step.id}
                onToggle={() => setActiveStep(activeStep === step.id ? null : step.id)}
                layout="mobile"
              />
            ))}
          </div>
        </div>

        {/* Journey Flow Connector - Desktop Only */}
        <div className="hidden lg:block relative -mt-4 mb-8">
          <div className="flex items-center justify-between px-6">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex-1 flex items-center">
                <div className="w-full h-0.5 bg-gray-300"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-2 flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface JourneyStepCardProps {
  step: JourneyStep;
  index: number;
  isActive: boolean;
  onToggle: () => void;
  layout: 'mobile' | 'tablet' | 'desktop';
}

const JourneyStepCard: React.FC<JourneyStepCardProps> = ({
  step,
  index,
  isActive,
  onToggle,
  layout
}) => {
  const getEmotionColor = (emotion: JourneyStep['emotions']) => {
    const colors = {
      frustrated: 'bg-red-100 text-red-800 border-red-200',
      neutral: 'bg-gray-100 text-gray-800 border-gray-200',
      satisfied: 'bg-blue-100 text-blue-800 border-blue-200',
      delighted: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[emotion];
  };

  const getEmotionIcon = (emotion: JourneyStep['emotions']) => {
    const icons = {
      frustrated: '😤',
      neutral: '😐',
      satisfied: '🙂',
      delighted: '😍'
    };
    return icons[emotion];
  };

  return (
    <div
      className={cn(
        "journey-step-card bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300",
        "hover:shadow-md hover:border-gray-300",
        isActive && "shadow-lg border-blue-300 ring-2 ring-blue-100",
        layout === 'mobile' && "w-full",
        layout === 'tablet' && "min-h-[400px]",
        layout === 'desktop' && "min-h-[450px]"
      )}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      style={{
        // Ensure minimum touch target size for accessibility
        minHeight: layout === 'mobile' ? '44px' : 'auto'
      }}
    >
      {/* Step Header */}
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </span>
              <span className={cn(
                "inline-flex px-2 py-1 rounded-full text-xs font-medium capitalize border",
                getEmotionColor(step.emotions)
              )}>
                <span className="mr-1">{getEmotionIcon(step.emotions)}</span>
                {step.emotions}
              </span>
            </div>
            <h3 className={cn(
              "font-semibold text-gray-900 leading-tight",
              layout === 'mobile' ? "text-base" : "text-lg sm:text-xl"
            )}>
              {step.title}
            </h3>
          </div>
          <button
            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={isActive ? 'Collapse step details' : 'Expand step details'}
          >
            <svg
              className={cn(
                "w-5 h-5 transition-transform duration-200",
                isActive && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Always visible description */}
        <p className={cn(
          "text-gray-600 mt-3 leading-relaxed",
          layout === 'mobile' ? "text-sm" : "text-base"
        )}>
          {step.description}
        </p>
      </div>

      {/* Expandable Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isActive ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 sm:p-6 space-y-6">
          {/* Touchpoints */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Touchpoints
            </h4>
            <div className="flex flex-wrap gap-2">
              {step.touchpoints.map((touchpoint, idx) => (
                <span
                  key={idx}
                  className="inline-flex px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                >
                  {touchpoint}
                </span>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Pain Points
            </h4>
            <ul className="space-y-2">
              {step.painPoints.map((pain, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Opportunities
            </h4>
            <ul className="space-y-2">
              {step.opportunities.map((opportunity, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourneyMap;