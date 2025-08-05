import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center touch-manipulation">
          <div className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            Home
          </div>
          <Link
            to="/case-studies"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px] touch-manipulation"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px] touch-manipulation"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[120px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-in fade-in-0 zoom-in-95 duration-1000 delay-500">
            <div className="relative group">
              <img
                src="/6796fa1806617a432bd2b97b-HeadshotPro_Original.PNG"
                alt="Sean Smith - Senior Product Designer headshot"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-cover rounded-[20px] sm:rounded-[25px] md:rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] group-hover:to-black/10 transition-all duration-500"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transition-all duration-500 hover:tracking-[-1.3px] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-700">
              UX/Product Designer
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-normal text-[#131417] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] xl:tracking-[-0.28px] mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] transition-all duration-300 hover:text-[#2a2a2a] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-900">
              6+ years creating intuitive, scalable UX for complex SaaS platforms. I specialize in AI-integrated systems that streamline workflows and drive decisions.
            </p>

          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Featured Projects
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Selected work from crypto, fintech, and B2B SaaS platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          
          {/* Computis Project */}
          <Link 
            to="/case-studies/computis-crypto-tax-engine"
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-900 touch-manipulation w-full max-w-[600px] mx-auto"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
                alt="Computis - Crypto Tax Engine Dashboard"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-2 transition-all duration-300">
                Computis
              </h4>
                <p className="text-sm sm:text-base md:text-lg font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px]">
                Crypto Tax Engine
              </p>
              </div>
            </div>
          </Link>

          {/* ezEMRx Project */}
          <Link 
            to="/case-studies/ezemrx-redesigning-ehr"
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-right-6 duration-1000 delay-1100 touch-manipulation w-full max-w-[600px] mx-auto"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src="/ipad.png"
                alt="ezEMRx - Electronic Health Records System"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-2 transition-all duration-300">
                ezEMRx
              </h4>
                <p className="text-sm sm:text-base md:text-lg font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px]">
                EHR for Public Health
              </p>
              </div>
            </div>
          </Link>

          {/* Medico Project */}
          <Link 
            to="/case-studies/medico-hospital-management-system"
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-1300 touch-manipulation w-full max-w-[600px] mx-auto"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Medico - Hospital Management System"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-2 transition-all duration-300">
                Medico
              </h4>
                <p className="text-sm sm:text-base md:text-lg font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px]">
                Hospital Management System
              </p>
              </div>
            </div>
          </Link>

          {/* MoneyFarm Project */}
          <Link 
            to="/case-studies/moneyfarm-ai-powered-personal-finance"
            className="group relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-right-6 duration-1000 delay-1500 touch-manipulation w-full max-w-[600px] mx-auto"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MoneyFarm - AI-Powered Personal Finance Manager"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] mb-2 transition-all duration-300">
                MoneyFarm
              </h4>
                <p className="text-sm sm:text-base md:text-lg font-normal opacity-90 leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px]">
                AI-Powered Personal Finance
              </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
          
          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-900">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              6+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              Years Experience
            </p>
          </div>

          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1100">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              50+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              Projects Delivered
            </p>
          </div>

          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1300">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              18+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              Awards & Mentions
            </p>
          </div>

          <div className="text-center group animate-in fade-in-0 zoom-in-95 duration-1000 delay-1500">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-110">
              $1M+
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 group-hover:text-[#131417]">
              SaaS Revenue Impact
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white/50">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Design Expertise
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Specialized skills in creating intuitive experiences for complex systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          
          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-in fade-in-0 zoom-in-95 duration-1000 delay-900">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              AI-Powered Design
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              ML Integration, AI Workflows, Usability Enhancement
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-in fade-in-0 zoom-in-95 duration-1000 delay-1100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Design Systems
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Scalable component libraries and design tokens for consistency
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-in fade-in-0 zoom-in-95 duration-1000 delay-1300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Rapid Prototyping
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Interactive prototypes and production-ready designs in Figma and code
            </p>
          </div>
        </div>
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
                href="https://www.behance.net/ssmit129"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] min-h-[44px] flex items-center touch-manipulation"
              >
                Behance
              </a>
              <a
                href="https://github.com/ssmith129"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] min-h-[44px] flex items-center touch-manipulation"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sean-smith-sf/"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] min-h-[44px] flex items-center touch-manipulation"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center touch-manipulation"
              >
                License
              </a>
              <a
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center touch-manipulation"
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