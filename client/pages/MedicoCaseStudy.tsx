import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Calendar, TrendingUp, Brain, Shield } from "lucide-react";
import Navigation, { SkipLink } from "../components/Navigation";

export default function MedicoCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <SkipLink />
      <Navigation />

      {/* Back Button */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 pb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8">
          <span className="inline-block bg-[#131417] text-white px-4 py-2 rounded-[25px] text-[14px] font-medium tracking-[-0.14px] mb-6">
            UX Case Study
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium text-[#131417] leading-[120%] tracking-[-1.44px] mb-6">
            Medico – Hospital Management System
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] mb-8">
            Transforming siloed hospital workflows into a real-time, AI-driven clinical operations platform
          </p>
          
          {/* Hero Metadata */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-white p-4 rounded-[20px] shadow-sm">
              <p className="text-[14px] font-medium text-[#9FA0A3] mb-1">Role</p>
              <p className="text-[16px] font-medium text-[#131417]">Lead UX/Product Designer</p>
            </div>
            <div className="bg-white p-4 rounded-[20px] shadow-sm">
              <p className="text-[14px] font-medium text-[#9FA0A3] mb-1">Platform</p>
              <p className="text-[16px] font-medium text-[#131417]">SaaS Hospital Management (Web + Mobile)</p>
            </div>
            <div className="bg-white p-4 rounded-[20px] shadow-sm">
              <p className="text-[14px] font-medium text-[#9FA0A3] mb-1">Users</p>
              <p className="text-[16px] font-medium text-[#131417]">Clinic Admins, Doctors</p>
            </div>
            <div className="bg-white p-4 rounded-[20px] shadow-sm">
              <p className="text-[14px] font-medium text-[#9FA0A3] mb-1">Mission</p>
              <p className="text-[16px] font-medium text-[#131417]">Streamline fragmented hospital operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-24 space-y-24">
        
        {/* TL;DR Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            📌 TL;DR Summary
          </h2>
          
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm mb-8">
            <p className="text-lg text-[#131417] leading-[150%] mb-6">
              I led the 0→1 design of <strong>Medico</strong>, a SaaS hospital management platform that unified clinical and administrative workflows. The system integrated <strong>AI-driven staffing forecasts, inbox triage, and financial predictions</strong>, addressing fragmentation in hospital operations.
            </p>
            
            {/* Impact Metrics */}
            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-xl">↓ 38%</span>
                  <span className="text-[16px] text-[#131417]">admin time spent on scheduling/reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold text-xl">↑ 27%</span>
                  <span className="text-[16px] text-[#131417]">doctor–patient face time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold text-xl">↓ 22%</span>
                  <span className="text-[16px] text-[#131417]">delays in diagnosis support workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold text-xl">83%</span>
                  <span className="text-[16px] text-[#131417]">staff adoption over legacy tools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🔍 Context & Overview
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
              <p className="text-lg text-[#131417] leading-[150%] mb-6">
                Hospitals typically operate across multiple disconnected systems for EHRs, HR, billing, and reporting. These silos drive inefficiencies, data duplication, and burnout.
              </p>
              
              <p className="text-lg text-[#131417] leading-[150%] mb-6">
                Medico was envisioned as a <strong>cloud-native SaaS management system</strong> that:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-[#131417]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Consolidates workflows into one hub
                </li>
                <li className="flex items-start gap-3 text-[#131417]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Provides <strong>mobile-first accessibility</strong> for doctors and admins
                </li>
                <li className="flex items-start gap-3 text-[#131417]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Layers <strong>predictive AI intelligence</strong> for proactive staffing, finances, and patient care
                </li>
              </ul>
              
              <div className="bg-blue-50 p-6 rounded-[20px] border-l-4 border-blue-500">
                <p className="text-[#131417] font-medium">
                  From a market perspective, Medico positioned itself against incumbents like Epic and Cerner by focusing on <strong>speed, usability, and AI augmentation</strong> rather than legacy complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Role & Responsibilities */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🎯 My Role & Responsibilities
          </h2>
          
          <div className="bg-white rounded-[25px] p-8 sm:p-10 lg:p-12 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                Defined product vision and design scope
              </li>
              <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                Conducted research with admins and doctors
              </li>
              <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                Designed <strong>role-based dashboards</strong> for Admins and Doctors
              </li>
              <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                Prototyped AI-driven modules (staffing, inbox, revenue predictions)
              </li>
              <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                Delivered responsive <strong>Figma handoff</strong> for web + mobile
              </li>
            </ul>
          </div>
        </section>

        {/* Problem Statement & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🧠 Problem Statement & Opportunity
          </h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 rounded-[20px] p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Problem
              </h3>
              <p className="text-lg text-[#131417] leading-[150%]">
                Hospital staff lose efficiency in fragmented systems — admins juggle reporting across HR, billing, and schedules while doctors waste time navigating multiple interfaces.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-[20px] p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Opportunity
              </h3>
              <p className="text-lg text-[#131417] leading-[150%]">
                Design a <strong>unified SaaS hub</strong> with an assistive AI layer that optimizes staffing, finances, and communications.
              </p>
            </div>
            
            <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-xl leading-[150%]">
              "How might we transform siloed hospital workflows into a unified, adaptive platform that gives staff back time for patient care?"
            </blockquote>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🧪 Research & Insights
          </h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#131417] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Admins
                </h3>
                <p className="text-[#131417] text-lg"><strong>60%</strong> of time lost to manual scheduling/reporting</p>
              </div>
              
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#131417] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Doctors
                </h3>
                <p className="text-[#131417] text-lg"><strong>30+</strong> minutes/day wasted in fragmented tools</p>
              </div>
              
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#131417] mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Patients
                </h3>
                <p className="text-[#131417] text-lg">Longer wait times due to back-office inefficiency</p>
              </div>
              
              <div className="bg-white rounded-[20px] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#131417] mb-4">
                  Key Finding
                </h3>
                <p className="text-[#131417] text-lg"><strong>72%</strong> of admins cited duplicate data entry as a top frustration</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-[20px] p-6">
              <h3 className="text-xl font-bold text-[#131417] mb-4">User Quotes</h3>
              <div className="space-y-4">
                <blockquote className="italic text-[#131417] border-l-4 border-orange-500 pl-4">
                  "By the time I finish reports, I have no energy left for training staff." — Clinic Admin
                </blockquote>
                <blockquote className="italic text-[#131417] border-l-4 border-blue-500 pl-4">
                  "I want less clicking, more treating." — Physician
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1700">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            📊 Market & Competitive Analysis
          </h2>
          
          <div className="bg-white rounded-[25px] p-8 shadow-sm overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-[16px] font-bold text-[#131417]">Platform</th>
                  <th className="text-left py-4 px-4 text-[16px] font-bold text-[#131417]">Strengths</th>
                  <th className="text-left py-4 px-4 text-[16px] font-bold text-[#131417]">Weaknesses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Epic</td>
                  <td className="py-4 px-4 text-[16px] text-[#131417]">Feature-rich</td>
                  <td className="py-4 px-4 text-[16px] text-[#131417]">Overly complex, poor mobile UX</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Cerner</td>
                  <td className="py-4 px-4 text-[16px] text-[#131417]">Compliance-driven</td>
                  <td className="py-4 px-4 text-[16px] text-[#131417]">Limited predictive analytics</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-[16px] font-medium text-green-600">Medico</td>
                  <td className="py-4 px-4 text-[16px] text-[#131417]">Lightweight, real-time SaaS + AI intelligence</td>
                  <td className="py-4 px-4 text-[16px] text-[#131417]">New to market</td>
                </tr>
              </tbody>
            </table>
            
            <div className="mt-6 bg-green-50 p-4 rounded-[15px] border border-green-200">
              <p className="text-[#131417] font-medium">
                <strong>Medico Differentiator:</strong> Lightweight, real-time SaaS + AI intelligence for staffing forecasts, revenue predictions, and doctor-friendly mobile tools
              </p>
            </div>
          </div>
        </section>

        {/* User Flows & Journey Mapping */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1900">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🛤️ User Flows & Journey Mapping
          </h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 rounded-[20px] p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">Admin Workflow Before</h3>
              <p className="text-[#131417] text-lg">
                Scheduling in Excel → HR software → finance reporting tool → delayed communication
              </p>
            </div>
            
            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Admin Workflow After (Medico)</h3>
              <p className="text-[#131417] text-lg">
                Unified dashboard → automated staffing optimizer → revenue forecasts → AI-triaged inbox → reduced context switching
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-[20px] p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Doctor Workflow After</h3>
              <p className="text-[#131417] text-lg">
                Smart reminders → AI diagnosis assistant → mobile rounds dashboard
              </p>
            </div>
          </div>
        </section>

        {/* Ideation & Concepting */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2100">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🎨 Ideation & Concepting
          </h2>
          
          <div className="bg-white rounded-[25px] p-8 shadow-sm">
            <p className="text-lg text-[#131417] leading-[150%] mb-6">Explored three models:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-[20px]">
                <h3 className="text-lg font-bold text-[#131417] mb-3">1. Finance-first</h3>
                <p className="text-[#131417] mb-2">❌ Too admin-heavy</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-[20px]">
                <h3 className="text-lg font-bold text-[#131417] mb-3">2. Doctor-first</h3>
                <p className="text-[#131417] mb-2">❌ Ignored operations</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-[20px] border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">3. Balanced SaaS hub</h3>
                <p className="text-green-800 mb-2">✅ Final choice</p>
                <p className="text-[#131417] text-sm">Bridging admin + doctor needs with AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Design & UX Solution */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2300">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            🌟 Final Design & UX Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#131417] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Role-based Dashboards
              </h3>
              <p className="text-[#131417]">Separate admin & doctor layouts</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#131417] mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                AI Assistant
              </h3>
              <p className="text-[#131417]">Proactive staffing/finance/diagnosis alerts</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#131417] mb-4">
                Smart Inbox
              </h3>
              <p className="text-[#131417]">NLP-powered message triage</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#131417] mb-4">
                Staffing Optimizer
              </h3>
              <p className="text-[#131417]">ML-driven shift allocations</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#131417] mb-4">
                Finance Module
              </h3>
              <p className="text-[#131417]">Predictive revenue/cost forecasts with anomaly detection</p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#131417] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Mobile-first
              </h3>
              <p className="text-[#131417]">Touch-optimized, offline-ready for bedside use</p>
            </div>
          </div>
        </section>

        {/* Results, Learnings & Next Steps */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-2500">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-8">
            📈 Results, Learnings & Next Steps
          </h2>
          
          <div className="space-y-8">
            {/* Impact */}
            <div className="bg-green-50 rounded-[20px] p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-xl">↓ 38%</span>
                  <span className="text-[16px] text-[#131417]">admin time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold text-xl">↑ 27%</span>
                  <span className="text-[16px] text-[#131417]">more doctor–patient interaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold text-xl">↓ 22%</span>
                  <span className="text-[16px] text-[#131417]">delays in diagnosis workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold text-xl">83%</span>
                  <span className="text-[16px] text-[#131417]">adoption preference over legacy tools</span>
                </div>
              </div>
            </div>
            
            {/* Learnings */}
            <div className="bg-white rounded-[25px] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#131417] mb-6">Learnings</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  AI should be <strong>assistive, not disruptive</strong>
                </li>
                <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Modular dashboards reduced onboarding friction
                </li>
                <li className="flex items-start gap-3 text-lg text-[#131417] leading-[150%]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Predictive finance provided the strongest admin value
                </li>
              </ul>
            </div>
            
            {/* Next Steps */}
            <div className="bg-blue-50 rounded-[20px] p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Next Steps</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#131417]">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></span>
                  Expand AI diagnosis support with imaging
                </li>
                <li className="flex items-start gap-3 text-[#131417]">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></span>
                  Add patient sentiment analysis
                </li>
                <li className="flex items-start gap-3 text-[#131417]">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></span>
                  Build interoperability with legacy EHR systems
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16" style={{ paddingTop: "135px", paddingBottom: "134px" }}>
          {/* Footer Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 lg:mb-[270px] gap-4 sm:gap-0">
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              Portfolio 2023 - 2024
            </span>
            <span className="text-[20px] font-semibold leading-[20px] tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] hover:scale-105">
              Sean Smith
            </span>
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-center sm:text-right transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              37.7749° N, 122.4194° W
            </span>
          </div>

          <div className="text-center mb-16 lg:mb-[270px]"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[44px] order-1 lg:order-2">
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]">
                Twitter
              </a>
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]">
                Behance
              </a>
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]">
                Instagram
              </a>
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]">
                Dribble
              </a>
            </div>

            <div className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 gap-[40px] order-2 lg:order-3">
              License
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
