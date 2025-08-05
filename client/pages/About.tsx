import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center">
          <Link
            to="/"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Case Studies
          </Link>
          <div className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            About
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-[150px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-center lg:items-start mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[160px]">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-in fade-in-0 zoom-in-95 duration-1000 delay-500">
            <div className="relative group">
              <img
                src="/6796fa1806617a432bd2b97b-HeadshotPro_Original.PNG"
                alt="Sean Smith - Senior Product Designer headshot"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-white/20"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] group-hover:to-black/10 transition-all duration-500"></div>
            </div>
          </div>

          {/* Header Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-normal text-[#131417] leading-[150%] sm:leading-[160%] md:leading-[170%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.8px] transition-all duration-500 hover:tracking-[-0.6px]">
              Senior Product Designer with 6+ years of experience creating intuitive, scalable UX for complex SaaS and enterprise platforms.
              <br /><br />
              I specialize in AI-integrated systems that streamline workflows, simplify data, and drive decisions.
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] pb-8 sm:pb-12 md:pb-16 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 xl:space-y-[150px]">
        
        {/* Professional Summary Section */}
        <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-[440px] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <div className="w-full lg:w-[200px]">
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
              Professional Summary
            </p>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.32px] mb-6 sm:mb-8">
                <span>Passionate about creating</span>
                <span className="border border-[#131417] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Intuitive
                </span>
                <span>experiences from</span>
                <span className="border border-[#131417] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Concept
                </span>
                <span>to</span>
                <span className="border border-[#131417] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Launch
                </span>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                Product Designer with 6+ years of experience delivering intuitive, high-impact experiences across crypto, fintech, and B2B SaaS platforms. I specialize in AI-integrated systems that streamline workflows, simplify data, and drive decisions.
              </p>

              <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                Proven ability to simplify complexity through thoughtful UX and rapid prototyping — from backend scripts to trusted enterprise SaaS. Comfortable owning ambiguous problems from concept to launch and working directly with founders, engineers, and legal teams to ship production-ready features in weekly cycles.
              </p>

              <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                Passionate about building magical interfaces that make cutting-edge technology accessible to everyday users. I believe the best design is invisible — it just works.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-[440px] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          <div className="w-full lg:w-[200px]">
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
              Work Experience
            </p>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-[50px]">
            {/* Computis */}
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] transition-all duration-300 hover:tracking-[-0.2px]">
                  Senior Product Designer
                </h3>
                <span className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  2023 - Present
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-[16px] font-medium text-[#9FA0A3] mb-3 transition-all duration-300 hover:text-[#131417]">
                Computis • Custom Data Processing, Inc.
              </p>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[600px] transition-all duration-300 hover:text-[#2a2a2a]">
                Spearheaded end-to-end UX for regulated sectors using tools for complex blockchain and financial data. Designed explainable AI features and self-serve workflows for CPAs, DAOs, and crypto hedge funds.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
                <span className="bg-[#131417] text-white px-2 sm:px-3 py-1 rounded-[12px] sm:rounded-[15px] text-[10px] sm:text-[11px] md:text-[12px] font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↓ 45% Onboarding Time
                </span>
                <span className="bg-[#131417] text-white px-2 sm:px-3 py-1 rounded-[12px] sm:rounded-[15px] text-[10px] sm:text-[11px] md:text-[12px] font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↑ 32% Conversion
                </span>
                <span className="bg-[#131417] text-white px-2 sm:px-3 py-1 rounded-[12px] sm:rounded-[15px] text-[10px] sm:text-[11px] md:text-[12px] font-medium transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                  ↓ 85% Dev Reliance
                </span>
              </div>
            </div>

            {/* Previous Role */}
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] transition-all duration-300 hover:tracking-[-0.2px]">
                  Founding Product Designer
                </h3>
                <span className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  2018 - 2023
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-[16px] font-medium text-[#9FA0A3] mb-3 transition-all duration-300 hover:text-[#131417]">
                Computis
              </p>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[600px] transition-all duration-300 hover:text-[#2a2a2a]">
                Led product design for a crypto tax automation platform, translating technical financial rules into clear, consumer-facing UX. Designed and launched $1M+ SaaS features for accountants, analysts, and legal teams working with blockchain data.
              </p>
            </div>

            {/* Earlier Role */}
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] transition-all duration-300 hover:tracking-[-0.2px]">
                  UX Designer
                </h3>
                <span className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
                  2016 - 2018
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-[16px] font-medium text-[#9FA0A3] mb-3 transition-all duration-300 hover:text-[#131417]">
                Various Startups
              </p>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[600px] transition-all duration-300 hover:text-[#2a2a2a]">
                Partnered directly with founders, engineers, and executive leadership to drive product decisions and execute go-to-market launches across fintech, healthcare, and productivity tools.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-[502px] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
          <div className="w-full lg:w-[89px]">
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
              Education
            </p>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-[50px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-3 sm:pb-4 lg:pb-8 xl:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417]">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] transition-all duration-300 hover:tracking-[-0.2px]">
                M.S. - Human-Computer Interaction
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#9FA0A3] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] transition-all duration-300 hover:text-[#131417]">
                2018
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-3 sm:pb-4 lg:pb-8 xl:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417]">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] transition-all duration-300 hover:tracking-[-0.2px]">
                San Francisco State University
              </span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#9FA0A3] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] transition-all duration-300 hover:text-[#131417]">
                San Francisco, CA
              </span>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-[440px] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
          <div className="w-full lg:w-[200px]">
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
              Skills & Expertise
            </p>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-[50px]">
            {/* Design & Prototyping */}
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                Design & Prototyping
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Figma
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Component Libraries
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Design Tokens
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Rapid Prototyping
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Interactive Flows
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Mobile & Web UX
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[573px] transition-all duration-300 hover:text-[#2a2a2a]">
                Expert in translating complex technical requirements into intuitive user experiences. Built tokenized Figma systems that reduced design and dev cycle times by 40% across multiple product surfaces.
              </p>
            </div>

            {/* Product Domains */}
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                Product Domains
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Crypto & Fintech UX
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Full-Lifecycle Design
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Prototyping in Figma & Code
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Cross-Functional Collaboration
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[573px] transition-all duration-300 hover:text-[#2a2a2a]">
                Proven track record designing consumer-friendly interfaces around complex blockchain and financial systems. Comfortable working ambiguous problems from concept to launch and collaborating tightly with founders and engineers.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                Collaboration & Process
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  SaaS
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Cross-Functional Teams
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Founder-Led Startups
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Lean/Agile Environments
                </span>
                <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1 sm:py-2 rounded-[20px] sm:rounded-[25px] text-xs sm:text-sm md:text-[14px] font-medium transition-all duration-300 hover:bg-[#131417] hover:text-white hover:scale-105">
                  Jira/Confluence
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[573px] transition-all duration-300 hover:text-[#2a2a2a]">
                Builds and scales reusable UI patterns to support fast-moving teams and maintain visual consistency. Developed scalable design systems and modular components in Figma, enabling rapid iteration and polished releases.
              </p>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-[522px] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="w-full lg:w-[80px]">
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
              Approach
            </p>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-[50px]">
            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                User-Centered Discovery
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[573px] transition-all duration-300 hover:text-[#2a2a2a]">
                Conducting continuous user research and testing to uncover insights about user preferences and pain points. I believe in validating assumptions early and often through user interviews, usability testing, and data analysis.
              </p>
            </div>

            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                Rapid Prototyping
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[573px] transition-all duration-300 hover:text-[#2a2a2a]">
                Rapidly creating interactive prototypes and production-ready designs; familiar with React, Next.js, and Tailwind CSS. This allows me to work shoulder-to-shoulder with developers and iterate quickly on live features.
              </p>
            </div>

            <div className="border-b border-[#9FA0A3] pb-4 sm:pb-6 lg:pb-8 xl:pb-[50px] transition-all duration-300 hover:border-[#131417]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[-0.18px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                Design Systems Leadership
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[26px] sm:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] max-w-[573px] transition-all duration-300 hover:text-[#2a2a2a]">
                Building tokenized Figma systems that reduce design and dev cycle times by 40% across multiple product surfaces. I focus on creating scalable, maintainable design systems that grow with the product.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          {/* Get in Touch */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[270px]"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2100">
            <span className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[44px] order-1 lg:order-2">
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Behance
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Dribble
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                License
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}