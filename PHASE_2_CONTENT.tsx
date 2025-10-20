/* ============================================================
   PHASE 2 CONTENT: Insert this into ComputisCaseStudy_REDESIGNED.tsx
   after the Information Architecture section
   ============================================================ */

{/* PHASE 2: RESEARCH & INSIGHTS - IMPROVED VISUAL HIERARCHY */}
<section className="mt-16">
  <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
    <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">
      Research & Insights
    </h2>

    {/* Research Process */}
    <div className="bg-[#1A1A1A]/50 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-medium text-white mb-4">
        Research Process (4 months)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex items-center gap-2 text-sm text-white">
          <Users className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>8 CPA interviews</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white">
          <Search className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>6 workflow shadowing sessions</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white">
          <Target className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>4 competitive teardowns</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white">
          <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>4 usability test cycles</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white">
          <Shield className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>2 compliance workshops</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white">
          <Activity className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Analytics review (Mixpanel + GA)</span>
        </div>
      </div>
    </div>

    {/* Top 3 Key Insights */}
    <div>
      <h3 className="text-lg font-medium text-white mb-4">
        Top 3 Critical Insights
      </h3>
      <div className="space-y-3 mb-4">
        <div className="bg-red-50/10 rounded-lg p-4 border-l-4 border-red-500">
          <p className="font-semibold text-red-400 mb-1">
            1. CPAs rejected black-box AI
          </p>
          <p className="text-sm text-[#D1D5DB] max-w-[75ch] leading-relaxed">
            "I can't defend tax positions I don't understand" —
            Transparency was non-negotiable for professional liability
          </p>
        </div>

        <div className="bg-orange-50/10 rounded-lg p-4 border-l-4 border-orange-500">
          <p className="font-semibold text-orange-400 mb-1">
            2. 85% time loss waiting for engineers
          </p>
          <p className="text-sm text-[#D1D5DB] max-w-[75ch] leading-relaxed">
            Simple rule changes took 2-3 days—CPAs needed self-service autonomy
          </p>
        </div>

        <div className="bg-green-50/10 rounded-lg p-4 border-l-4 border-green-500">
          <p className="font-semibold text-green-400 mb-1">
            3. Audit trails became a sales differentiator
          </p>
          <p className="text-sm text-[#D1D5DB] max-w-[75ch] leading-relaxed">
            Compliance visibility wasn't just a feature—it closed enterprise deals
          </p>
        </div>
      </div>

      {/* Expandable: View All Insights */}
      <button
        onClick={() => setAllInsightsExpanded(!allInsightsExpanded)}
        className="mt-4 text-sm text-amber-400 hover:text-amber-300
                   font-medium flex items-center gap-2 transition-colors"
      >
        {allInsightsExpanded ? 'Show Less' : 'View All 5 Insights'}
        <ChevronDown className={`w-4 h-4 transition-transform ${
          allInsightsExpanded ? 'rotate-180' : ''
        }`} />
      </button>

      {allInsightsExpanded && (
        <div className="mt-4 space-y-3 animate-in fade-in-0 slide-in-from-top-4 duration-500">
          <div className="bg-blue-50/10 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="font-semibold text-blue-400 mb-1">
              4. Dark mode was essential, not optional
            </p>
            <p className="text-sm text-[#D1D5DB] max-w-[75ch] leading-relaxed">
              CPAs work extended hours during tax season—75% preferred dark theme by default
            </p>
          </div>

          <div className="bg-purple-50/10 rounded-lg p-4 border-l-4 border-purple-500">
            <p className="font-semibold text-purple-400 mb-1">
              5. Bulk operations became the primary workflow
            </p>
            <p className="text-sm text-[#D1D5DB] max-w-[75ch] leading-relaxed">
              73% of CPAs adopted bulk rule application in week 1—what we thought was a "power user" feature became core
            </p>
          </div>
        </div>
      )}
    </div>

    {/* PLACEHOLDER: Research Affinity Map */}
    <div className="mt-8 bg-[#1A1A1A]/50 border-2 border-dashed border-[#6B7280] rounded-lg p-12 text-center">
      <p className="text-[#6B7280] text-sm mb-2">🔍 VISUAL ASSET PLACEHOLDER</p>
      <p className="text-white font-semibold mb-2">Research Synthesis — Affinity Map</p>
      <p className="text-[#9CA3AF] text-xs max-w-[60ch] mx-auto">
        Dimensions: 1400px × 900px | Format: WebP
        <br />
        Shows 4 themes from CPA research: Trust & Control (23 mentions), Autonomy & Speed (18 mentions), Compliance & Audit (15 mentions), Accuracy & Errors (12 mentions)
        <br />
        Includes verbatim quotes from interviews clustered by theme with color-coded sticky notes
      </p>
    </div>

    {/* PLACEHOLDER: Competitive Analysis Matrix */}
    <div className="mt-8">
      <h3 className="text-lg font-medium text-white mb-4">
        Competitive Analysis
      </h3>
      <div className="bg-[#1A1A1A]/50 border-2 border-dashed border-[#6B7280] rounded-lg p-12 text-center mb-6">
        <p className="text-[#6B7280] text-sm mb-2">📊 VISUAL ASSET PLACEHOLDER</p>
        <p className="text-white font-semibold mb-2">Competitive Analysis Matrix</p>
        <p className="text-[#9CA3AF] text-xs max-w-[60ch] mx-auto">
          Dimensions: 1400px × 600px | Format: WebP
          <br />
          Compares Computis vs TaxBit, Cryptio, and CoinTracker across 9 features
          <br />
          Highlights: Visual rule builder, AI confidence chips, and real-time anomaly detection as unique differentiators
        </p>
      </div>

      <div className="bg-blue-50/10 rounded-lg p-6 border-l-4 border-blue-500">
        <h4 className="font-semibold text-blue-400 mb-3">
          Competitive Differentiation
        </h4>
        <ul className="space-y-2 text-sm text-blue-200/80">
          <li>
            <strong>Visual Rule Builder:</strong> Only no-code solution for custom classification rules
          </li>
          <li>
            <strong>AI Confidence Chips:</strong> Only platform with inline explainability for every classification
          </li>
          <li>
            <strong>Real-Time Anomaly Detection:</strong> Only contextual flagging system with hover reasoning
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* PHASE 2: KEY DESIGN DECISIONS - REWRITTEN WITH ALTERNATIVES PATTERN */}
<section className="mt-16">
  <div className="bg-[#0F0F0F]/80 backdrop-blur-xl rounded-[25px] p-8 sm:p-10 lg:p-12 border border-[#1A1A1A] shadow-xl">
    <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">
      Key Design Decisions
    </h2>

    <div className="space-y-8">
      
      {/* DECISION 1: Visual Rule Builder */}
      <div className="border border-[#6B7280]/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50/10 to-purple-100/10 p-6 border-b border-[#6B7280]/20">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold text-purple-400">1️⃣</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Visual Rule Builder (No-Code)
              </h3>
              <p className="text-sm text-purple-300 italic">
                "How do we give CPAs autonomy without overwhelming them?"
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 bg-[#0A0A0A]/50">
          {/* Discovery */}
          <div className="bg-blue-50/10 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">
              DISCOVERY
            </h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• 6/8 CPAs rejected form-based builders ("too rigid for edge cases")</li>
              <li>• Natural language input tested poorly (35% misinterpretation rate)</li>
              <li>• Spreadsheet formulas too technical for 4/8 CPAs</li>
            </ul>
          </div>

          {/* Options Explored */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-3">
              3 OPTIONS EXPLORED
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  A. Form-Based Builder
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Too rigid
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  B. Natural Language
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Ambiguous
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border-2 border-green-500">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  C. Visual Drag-and-Drop
                </p>
                <p className="text-xs text-green-400">
                  ✅ Chosen
                </p>
              </div>
            </div>
          </div>

          {/* Why It Won */}
          <div className="bg-green-50/10 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-sm font-semibold text-green-400 mb-2">
              WHY VISUAL WON
            </h4>
            <ul className="text-sm text-green-200/80 space-y-1">
              <li>• 7/8 CPAs successfully built a rule in &lt;3 minutes</li>
              <li>• Live preview pane reduced errors by 60%</li>
              <li>• Matched Excel filter mental model (familiarity)</li>
            </ul>
          </div>

          {/* Validation */}
          <div className="bg-amber-50/10 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">
              VALIDATION
            </h4>
            <p className="text-sm text-amber-200/80">
              A/B test: Visual builder → 32% higher completion rate<br/>
              Post-launch: 85% reduction in engineering requests
            </p>
          </div>

          {/* Tradeoff */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              TRADEOFF
            </h4>
            <p className="text-sm text-[#D1D5DB]">
              Took 3 extra weeks to build, but reduced support burden by 40%
              and unlocked $200K+ in enterprise sales
            </p>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="p-6 bg-[#0A0A0A]/80 border-t border-[#6B7280]/20">
          <img
            src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Rule%20Builder.gif"
            alt="Visual Rule Builder demo showing drag-and-drop interface with live preview pane, 7/8 CPAs built rules in under 3 minutes"
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsRuleBuilderModalOpen(true)}
          />
        </div>
      </div>

      {/* DECISION 2: AI Confidence Chips */}
      <div className="border border-[#6B7280]/30 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50/10 to-blue-100/10 p-6 border-b border-[#6B7280]/20">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold text-blue-400">2️⃣</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                AI Confidence Chips + Override Control
              </h3>
              <p className="text-sm text-blue-300 italic">
                "How do we make AI reasoning transparent without overwhelming CPAs?"
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 bg-[#0A0A0A]/50">
          {/* Discovery */}
          <div className="bg-blue-50/10 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">
              DISCOVERY
            </h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• 8/8 CPAs demanded to see "why" behind AI classifications</li>
              <li>• 40% of G2 complaints cited "black-box" AI concerns</li>
              <li>• Professional liability insurance requires explainability</li>
            </ul>
          </div>

          {/* The Debate */}
          <div className="bg-red-50/10 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="text-sm font-semibold text-red-400 mb-2">
              THE OVERRIDE CONTROL DEBATE
            </h4>
            <div className="space-y-2 text-sm text-red-200/80">
              <p><strong>CTO's Position:</strong> "Full automation is the goal—overrides defeat the purpose"</p>
              <p><strong>CPAs' Response:</strong> "I can't defend positions I didn't approve"</p>
              <p><strong>My Facilitation:</strong> Organized workshop with both sides, presented G2 complaint data (40% cited lack of control), proposed graduated autonomy model</p>
            </div>
          </div>

          {/* Options Explored */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-3">
              3 OPTIONS EXPLORED
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  A. Hidden Confidence Scores
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Not transparent
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  B. Detailed Modal Popups
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Too disruptive
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border-2 border-green-500">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  C. Inline Chips + Hover
                </p>
                <p className="text-xs text-green-400">
                  ✅ Chosen
                </p>
              </div>
            </div>
          </div>

          {/* Why It Won */}
          <div className="bg-green-50/10 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-sm font-semibold text-green-400 mb-2">
              WHY INLINE CHIPS WON
            </h4>
            <ul className="text-sm text-green-200/80 space-y-1">
              <li>• Non-intrusive: Visible without requiring action</li>
              <li>• Scannable: Color-coded (green/yellow/red) for quick triage</li>
              <li>• Detailed on demand: Hover reveals reasoning without modal disruption</li>
              <li>• 6/8 CPAs said "This is what I needed" in usability tests</li>
            </ul>
          </div>

          {/* Validation */}
          <div className="bg-amber-50/10 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">
              VALIDATION
            </h4>
            <p className="text-sm text-amber-200/80">
              Demo-to-conversion rate: 22% → 29% (+32% increase)<br/>
              3 enterprise deals closed citing "trust in AI" as deciding factor<br/>
              Zero disputes with overridden classifications post-launch
            </p>
          </div>

          {/* Tradeoff */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              TRADEOFF
            </h4>
            <p className="text-sm text-[#D1D5DB]">
              CPAs override 12% of classifications—slower than full automation, but prevents costly errors and builds trust
            </p>
          </div>

          {/* Business Impact */}
          <div className="bg-gradient-to-r from-[#0080FF]/10 to-[#00D4FF]/10 rounded-lg p-4 border-l-4 border-[#00D4FF]">
            <h4 className="text-sm font-semibold text-[#00D4FF] mb-2">
              BUSINESS IMPACT
            </h4>
            <p className="text-sm text-[#D1D5DB]">
              This decision <strong className="text-white">closed a $180K enterprise deal</strong> with a Big 4 accounting firm who said: "Your confidence chips are the only AI explanation that our CPAs trust."
            </p>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="p-6 bg-[#0A0A0A]/80 border-t border-[#6B7280]/20">
          <img
            src="https://cdn.builder.io/api/v1/file/assets%2Fba69a23156414a589de97341511272c9%2F94e15e6943d547aa907e95334d885d1e"
            alt="AI Confidence Chips demo showing color-coded inline indicators with hover tooltips revealing AI reasoning"
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsGifModalOpen(true)}
          />
        </div>
      </div>

      {/* DECISION 3: Inline Audit Trail */}
      <div className="border border-[#6B7280]/30 rounded-lg overflow-hidden hover:border-green-500/50 transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-50/10 to-green-100/10 p-6 border-b border-[#6B7280]/20">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold text-green-400">3️⃣</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Inline Audit Trail Drawer
              </h3>
              <p className="text-sm text-green-300 italic">
                "How do we make compliance documentation seamless instead of a separate task?"
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 bg-[#0A0A0A]/50">
          {/* Discovery */}
          <div className="bg-blue-50/10 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">
              DISCOVERY
            </h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• CPAs manually documented every AI change for IRS defense</li>
              <li>• Average 45 minutes per client spent creating audit logs</li>
              <li>• Error-prone: 3/8 CPAs forgot to document critical overrides</li>
              <li>• Competitors required separate "export audit log" workflow</li>
            </ul>
          </div>

          {/* Options Explored */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-3">
              3 OPTIONS EXPLORED
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  A. Separate Audit Log Page
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Context switching
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  B. Download PDF Reports
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Not real-time
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border-2 border-green-500">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  C. Inline Contextual Drawer
                </p>
                <p className="text-xs text-green-400">
                  ✅ Chosen
                </p>
              </div>
            </div>
          </div>

          {/* Why It Won */}
          <div className="bg-green-50/10 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-sm font-semibold text-green-400 mb-2">
              WHY INLINE DRAWER WON
            </h4>
            <ul className="text-sm text-green-200/80 space-y-1">
              <li>• Contextual: Appears next to the transaction being audited</li>
              <li>• Automatic: Zero manual documentation required</li>
              <li>• Tamper-proof: Blockchain-inspired immutable log</li>
              <li>• 8/8 CPAs said "This saves me hours" in testing</li>
            </ul>
          </div>

          {/* Validation */}
          <div className="bg-amber-50/10 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">
              VALIDATION
            </h4>
            <p className="text-sm text-amber-200/80">
              Audit documentation time: 45 min → 0 min (100% reduction)<br/>
              Used in 3 real IRS audits with zero issues<br/>
              Enterprise buyers cited audit trail as #1 feature requirement
            </p>
          </div>

          {/* Tradeoff */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              TRADEOFF
            </h4>
            <p className="text-sm text-[#D1D5DB]">
              Requires 2-3 extra API calls per transaction (slight performance impact), but CPAs value compliance over speed
            </p>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="p-6 bg-[#0A0A0A]/80 border-t border-[#6B7280]/20">
          <img
            src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Inline%20Audit%20Drawer.gif"
            alt="Inline Audit Trail Drawer demo showing contextual tamper-proof logs appearing next to transactions, reducing documentation time from 45 minutes to zero"
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsAuditDrawerModalOpen(true)}
          />
        </div>
      </div>

      {/* DECISION 4: Contextual Anomaly Detection */}
      <div className="border border-[#6B7280]/30 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-50/10 to-amber-100/10 p-6 border-b border-[#6B7280]/20">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold text-amber-400">4️⃣</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Contextual Anomaly Detection
              </h3>
              <p className="text-sm text-amber-300 italic">
                "How do we catch errors without false alarms?"
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 bg-[#0A0A0A]/50">
          {/* Discovery */}
          <div className="bg-blue-50/10 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">
              DISCOVERY
            </h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• FMV (Fair Market Value) errors caused 8 tax disputes in beta</li>
              <li>• Existing detection: 35% catch rate, 60% false positives</li>
              <li>• CPAs manually cross-checked prices across 3 exchanges</li>
              <li>• Average 30 min per client spent on price validation</li>
            </ul>
          </div>

          {/* Options Explored */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-3">
              3 OPTIONS EXPLORED
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  A. Threshold-Based Alerts
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — High false positives
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  B. Batch Validation Reports
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Not real-time
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border-2 border-green-500">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  C. Contextual Inline Flags
                </p>
                <p className="text-xs text-green-400">
                  ✅ Chosen
                </p>
              </div>
            </div>
          </div>

          {/* Why It Won */}
          <div className="bg-green-50/10 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-sm font-semibold text-green-400 mb-2">
              WHY CONTEXTUAL FLAGGING WON
            </h4>
            <ul className="text-sm text-green-200/80 space-y-1">
              <li>• Context-aware: Considers asset type, exchange, and time of day</li>
              <li>• Severity levels: Red (critical), Yellow (review), Gray (info)</li>
              <li>• Hover tooltips explain *why* flagged (not just "price error")</li>
              <li>• Reduced false positives by 75% in testing</li>
            </ul>
          </div>

          {/* Validation */}
          <div className="bg-amber-50/10 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">
              VALIDATION
            </h4>
            <p className="text-sm text-amber-200/80">
              Anomaly detection coverage: 35% → 88% (+150% increase)<br/>
              False positive rate: 60% → 15% (75% reduction)<br/>
              Zero FMV disputes post-launch (down from 8 in beta)
            </p>
          </div>

          {/* Tradeoff */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              TRADEOFF
            </h4>
            <p className="text-sm text-[#D1D5DB]">
              Required integrating 4 real-time price APIs (engineering complexity), but prevented $120K+ in potential tax penalties
            </p>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="p-6 bg-[#0A0A0A]/80 border-t border-[#6B7280]/20">
          <img
            src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Data%20Anomaly%20Detection.gif"
            alt="Contextual Anomaly Detection demo showing color-coded inline flags with severity levels and hover tooltips explaining why transactions are flagged"
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsAnomalyDetectionModalOpen(true)}
          />
        </div>
      </div>

      {/* DECISION 5: Multi-Tenant Architecture */}
      <div className="border border-[#6B7280]/30 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-50/10 to-cyan-100/10 p-6 border-b border-[#6B7280]/20">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold text-cyan-400">5️⃣</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Multi-Tenant Architecture
              </h3>
              <p className="text-sm text-cyan-300 italic">
                "How do CPA firms manage 100+ clients without chaos?"
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 bg-[#0A0A0A]/50">
          {/* Discovery */}
          <div className="bg-blue-50/10 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">
              DISCOVERY
            </h4>
            <ul className="text-sm text-blue-200/80 space-y-1">
              <li>• Single-client architecture forced context switching</li>
              <li>• CPAs managed 40+ tabs (one per client)</li>
              <li>• No portfolio-level insights across clients</li>
              <li>• Competitors (TaxBit, Cryptio) had same limitation</li>
            </ul>
          </div>

          {/* Options Explored */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-3">
              3 OPTIONS EXPLORED
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  A. Client Switcher Dropdown
                </p>
                <p className="text-xs text-red-400">
                  ❌ Rejected — Still single-client view
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border border-[#6B7280]/30">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  B. Unified List View
                </p>
                <p className="text-xs text-amber-400">
                  ~ Partial — Good for overview, bad for details
                </p>
              </div>
              <div className="bg-[#0F0F0F] p-3 rounded border-2 border-green-500">
                <p className="text-xs font-semibold text-[#D1D5DB] mb-1">
                  C. Role-Based Multi-Tenant Dashboard
                </p>
                <p className="text-xs text-green-400">
                  ✅ Chosen
                </p>
              </div>
            </div>
          </div>

          {/* Why It Won */}
          <div className="bg-green-50/10 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="text-sm font-semibold text-green-400 mb-2">
              WHY MULTI-TENANT WON
            </h4>
            <ul className="text-sm text-green-200/80 space-y-1">
              <li>• Portfolio view: See all clients at once with aggregated metrics</li>
              <li>• Drill-down: Click into individual client details</li>
              <li>• Role-based permissions: CPAs, Analysts, Admins see different views</li>
              <li>• Bulk operations: Apply rules across multiple clients</li>
            </ul>
          </div>

          {/* Validation */}
          <div className="bg-amber-50/10 rounded-lg p-4 border-l-4 border-amber-500">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">
              VALIDATION
            </h4>
            <p className="text-sm text-amber-200/80">
              Context switching: ↓60% reduction<br/>
              Largest firm manages 120+ clients in single dashboard<br/>
              Became key differentiator vs TaxBit (single-client only)
            </p>
          </div>

          {/* Tradeoff */}
          <div className="bg-[#1A1A1A]/50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              TRADEOFF
            </h4>
            <p className="text-sm text-[#D1D5DB]">
              Added 6 weeks to development timeline for role-based permissions, but unlocked enterprise segment ($450K+ ARR)
            </p>
          </div>
        </div>

        {/* Visual Demo */}
        <div className="p-6 bg-[#0A0A0A]/80 border-t border-[#6B7280]/20">
          <img
            src="https://raw.githubusercontent.com/ssmith129/portfolio-website/d4fd2343330c1b3aae85a3e885719953ac9e9953/public/Client%20Based%20Roles.gif"
            alt="Multi-Tenant Architecture demo showing role-based dashboard with portfolio view, drill-down capability, and bulk operations across 100+ clients"
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsMultiTenantModalOpen(true)}
          />
        </div>
      </div>

    </div>
  </div>
</section>

/* ============================================================
   END OF PHASE 2 CONTENT
   
   NEXT: Add to existing ComputisCaseStudy_REDESIGNED.tsx after
   the Information Architecture section
   ============================================================ */
