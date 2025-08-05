import React from 'react';
import UserJourneyMap from './UserJourneyMap';

// Example implementation with sample data
const ExampleUserJourney: React.FC = () => {
  const sampleSteps = [
    {
      id: 'awareness',
      title: 'Problem Awareness',
      description: 'User becomes aware of a need or problem that requires a solution.',
      phase: 'discovery' as const,
      touchpoints: ['Social Media', 'Search Engine', 'Word of Mouth', 'Blog Article'],
      painPoints: [
        'Information overload from multiple sources',
        'Difficulty distinguishing credible information',
        'Time-consuming research process'
      ],
      opportunities: [
        'Provide clear, authoritative content',
        'Optimize for search discovery',
        'Create shareable resources'
      ],
      emotions: 'neutral' as const
    },
    {
      id: 'research',
      title: 'Solution Research',
      description: 'User actively researches potential solutions and evaluates options.',
      phase: 'consideration' as const,
      touchpoints: ['Company Website', 'Product Reviews', 'Comparison Sites', 'Demo Videos'],
      painPoints: [
        'Overwhelming number of options',
        'Conflicting information across sources',
        'Lack of clear differentiation between products'
      ],
      opportunities: [
        'Create comprehensive comparison guides',
        'Offer free trials or demos',
        'Provide transparent pricing information'
      ],
      emotions: 'frustrated' as const
    },
    {
      id: 'evaluation',
      title: 'Option Evaluation',
      description: 'User narrows down choices and evaluates specific solutions in detail.',
      phase: 'consideration' as const,
      touchpoints: ['Product Demos', 'Sales Calls', 'Free Trials', 'Customer Reviews'],
      painPoints: [
        'Limited trial periods',
        'Complex feature comparisons',
        'Unclear implementation requirements'
      ],
      opportunities: [
        'Extend trial periods',
        'Provide implementation support',
        'Create feature comparison tools'
      ],
      emotions: 'neutral' as const
    },
    {
      id: 'purchase',
      title: 'Purchase Decision',
      description: 'User makes the final decision and completes the purchase process.',
      phase: 'decision' as const,
      touchpoints: ['Checkout Process', 'Payment Gateway', 'Confirmation Email', 'Account Setup'],
      painPoints: [
        'Complex checkout process',
        'Unexpected additional costs',
        'Lengthy account setup'
      ],
      opportunities: [
        'Streamline checkout process',
        'Provide transparent pricing',
        'Automate account setup'
      ],
      emotions: 'satisfied' as const
    },
    {
      id: 'onboarding',
      title: 'Product Onboarding',
      description: 'User learns how to use the product and gets set up for success.',
      phase: 'retention' as const,
      touchpoints: ['Welcome Email', 'Tutorial Videos', 'Support Documentation', 'Live Chat'],
      painPoints: [
        'Steep learning curve',
        'Insufficient documentation',
        'Lack of guided tutorials'
      ],
      opportunities: [
        'Create interactive tutorials',
        'Provide personalized onboarding',
        'Offer live training sessions'
      ],
      emotions: 'neutral' as const
    },
    {
      id: 'ongoing-use',
      title: 'Ongoing Usage',
      description: 'User regularly uses the product and experiences its full value.',
      phase: 'retention' as const,
      touchpoints: ['Product Interface', 'Mobile App', 'Email Notifications', 'Customer Support'],
      painPoints: [
        'Feature complexity',
        'Slow performance',
        'Inconsistent user experience'
      ],
      opportunities: [
        'Simplify complex workflows',
        'Improve performance',
        'Ensure cross-platform consistency'
      ],
      emotions: 'delighted' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <UserJourneyMap 
        steps={sampleSteps}
        className="max-w-none"
      />
    </div>
  );
};

export default ExampleUserJourney;