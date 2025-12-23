const cannabisManifest = {
    sativa: {
        title: "FORGE Theory: Sativa Decay Engine",
        tagline: "Cerebral-activation metabolic pathways in Cannabis sativa strains",
        theme: {
            primary: "#5d8aa8",
            secondary: "#a8d5e2",
            accent: "#ff6b35"
        },
        tabs: [
            {
                id: "overview",
                label: "Overview",
                icon: "fa-home",
                content: `
                    <h2><i class="fas fa-brain"></i> Core Principle: Activation Engine</h2>
                    <p>The <strong>Sativa Activation Engine (SAE)</strong> posits that <em>Cannabis sativa's</em> characteristic cerebral effects emerge from a photochemical "activation cascade" where equatorial light intensity drives oxidative terpene synthesis.</p>
                    <div class="highlight">
                        <p><strong>Key Insight:</strong> Sativa effects result from <em>metabolic acceleration</em> rather than decay—a light-powered activation engine optimized for equatorial day-length stability.</p>
                    </div>
                    <div class="data-viz">
                        <div class="data-item"><div class="data-label"><span>THCV Production</span><span>2-5x Indica</span></div><div class="data-bar"><div class="data-fill" style="width: 80%"></div></div></div>
                        <div class="data-item"><div class="data-label"><span>Pinene Concentration</span><span>High</span></div><div class="data-bar"><div class="data-fill" style="width: 90%"></div></div></div>
                        <div class="data-item"><div class="data-label"><span>Myrcene:Limonene</span><span>1:5</span></div><div class="data-bar"><div class="data-fill" style="width: 30%"></div></div></div>
                    </div>`
            },
            {
                id: "chambers",
                label: "Chambers",
                icon: "fa-flask",
                content: `
                    <h2><i class="fas fa-bolt"></i> Biochemical Activation Chambers</h2>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-sun"></i> 1. Photon-Intake Amplifier</div><p><strong>Input:</strong> High UV-B photons with stable 12/12 photoperiod. <strong>Output:</strong> Sustained terpene precursor (GPP) production.</p></div>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-wind"></i> 2. Terpene Volatilization Chamber</div><p><strong>Location:</strong> Long, slender trichome stalks. <strong>Process:</strong> Controlled monoterpene evaporation maintained by equatorial temperatures.</p></div>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-atom"></i> 3. Cannabinoid Activation Reactor</div><p><strong>Process:</strong> CBGA → THCA with parallel CBG → THCV pathway activation.</p></div>`
            },
            {
                id: "pathways",
                label: "Pathways",
                icon: "fa-project-diagram",
                content: `
                    <h2><i class="fas fa-project-diagram"></i> Phytochemical Activation Pathways</h2>
                    <h3>The "Sativa Effect" Activation Sequence</h3>
                    <div class="pathway-viz">
                        <div class="pathway-step"><div class="step-number">1</div><div><strong>Prefrontal Cortex Activation:</strong> High pinene levels enhance acetylcholine activity</div></div>
                        <div class="pathway-step"><div class="step-number">2</div><div><strong>Dopamine Modulation:</strong> Limonene and THCV interact with dopamine receptors</div></div>
                        <div class="pathway-step"><div class="step-number">3</div><div><strong>GABA/Glutamate Balance:</strong> Terpinolene reduces anxiety without sedation</div></div>
                    </div>`
            }
        ]
    },
    indica: {
        title: "FORGE Theory: Indica Decay Engine",
        tagline: "Phytochemical transformation pathways in Cannabis indica strains",
        theme: {
            primary: "#2d5016",
            secondary: "#8bc34a",
            accent: "#7b1fa2"
        },
        tabs: [
            {
                id: "overview",
                label: "Overview",
                icon: "fa-info-circle",
                content: `
                    <h2><i class="fas fa-info-circle"></i> Core Principle</h2>
                    <p>The <strong>Indica Decay Engine (IDE)</strong> posits that <em>Cannabis indica's</em> effects emerge from a systematic phytochemical "decay pathway" where initial photosynthesis products undergo controlled degradation into sedative compounds.</p>
                    <div class="highlight">
                        <p><strong>Key Insight:</strong> Indica effects result from different <em>temporal patterns</em> of compound release—a decay engine optimized for short-season survival.</p>
                    </div>
                    <div class="data-viz">
                        <div class="data-item"><div class="data-label"><span>THC Preservation</span><span>85%</span></div><div class="data-bar"><div class="data-fill" style="width: 85%"></div></div></div>
                        <div class="data-item"><div class="data-label"><span>Myrcene Production</span><span>High</span></div><div class="data-bar"><div class="data-fill" style="width: 90%"></div></div></div>
                    </div>`
            },
            {
                id: "chambers",
                label: "Chambers",
                icon: "fa-flask",
                content: `
                    <h2><i class="fas fa-flask"></i> Biochemical "Forge Chambers"</h2>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-sun"></i> 1. Light-Stress Photosynthetic Forge</div><p><strong>Input:</strong> High-intensity photons. <strong>Process:</strong> Overloaded electron transport chain creates reactive oxygen species (ROS) as stress signals.</p></div>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-fire"></i> 2. Trichome Pyrolysis Chamber</div><p><strong>Process:</strong> Controlled thermal/enzymatic "burning" of monoterpenes into sesquiterpenes (α-Pinene → β-Caryophyllene).</p></div>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-moon"></i> 3. Dark-Cycle Decarboxylation Reactor</div><p><strong>Process:</strong> Non-enzymatic decarboxylation of THCA → Δ⁹-THC favored by cooler night temperatures.</p></div>`
            },
            {
                id: "pathways",
                label: "Pathways",
                icon: "fa-project-diagram",
                content: `
                    <h2><i class="fas fa-project-diagram"></i> Phytochemical Decay Pathways</h2>
                    <h3>The "Indica Effect" Final Synthesis</h3>
                    <div class="highlight">
                        <ol>
                            <li><strong>Myrcene-mediated</strong> blood-brain barrier penetration</li>
                            <li><strong>β-Caryophyllene</strong> CB2 receptor "priming"</li>
                            <li><strong>Linalool oxide</strong> GABAergic activity enhancement</li>
                        </ol>
                    </div>`
            }
        ]
    },
    hybrid: {
        title: "FORGE Theory: Hybrid Engine",
        tagline: "Balanced metabolic pathways in Cannabis hybrid strains",
        theme: {
            primary: "#8a4fff",
            secondary: "#c8a8ff",
            accent: "#ff6b9d"
        },
        tabs: [
            {
                id: "overview",
                label: "Overview",
                icon: "fa-code-branch",
                content: `
                    <h2><i class="fas fa-code-branch"></i> Core Principle: Dynamic Balance</h2>
                    <p>The <strong>Hybrid Balance Engine (HBE)</strong> posits that hybrid strains achieve effects through a <em>dynamic metabolic equilibrium</em> between activation and decay pathways.</p>
                    
                    <!-- Interactive Slider Placeholder -->
                    <div class="slider-container">
                        <div class="slider-label"><span>Indica Dominant</span><span>Hybrid Balance</span><span>Sativa Dominant</span></div>
                        <input type="range" min="0" max="100" value="50" class="slider" id="hybridSlider">
                        <div class="hybrid-ratio" id="hybridVisual">
                            <div class="indica-portion" style="width: 50%">Indica 50%</div>
                            <div class="sativa-portion" style="width: 50%">Sativa 50%</div>
                        </div>
                    </div>
                    
                    <div class="data-viz">
                        <div class="data-item"><div class="data-label"><span>Pathway Switching</span><span>High</span></div><div class="data-bar"><div class="data-fill" style="width: 90%; background: var(--modal-primary);"></div></div></div>
                        <div class="data-item"><div class="data-label"><span>Terpene Diversity</span><span>Maximized</span></div><div class="data-bar"><div class="data-fill" style="width: 85%; background: var(--modal-primary);"></div></div></div>
                    </div>`
            },
            {
                id: "chambers",
                label: "Chambers",
                icon: "fa-adjust",
                content: `
                    <h2><i class="fas fa-adjust"></i> Biochemical Balance Chambers</h2>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-exchange-alt"></i> 1. Metabolic Switchboard</div><p><strong>Function:</strong> Routes photosynthetic products based on environmental signals. Can toggle between pathways within same growth cycle.</p></div>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-percentage"></i> 2. Ratio-Tunable Trichome Factory</div><p><strong>Process:</strong> Produces terpene profiles based on genetic ratio expression (e.g., Balanced myrcene:pinene).</p></div>`
            },
            {
                id: "ratios",
                label: "Ratios",
                icon: "fa-balance-scale",
                content: `
                    <h2><i class="fas fa-balance-scale"></i> Hybrid Ratio Classification</h2>
                    <table class="comparison-table">
                        <thead><tr><th>Type</th><th>Typical Ratio</th><th>Effect Profile</th></tr></thead>
                        <tbody>
                            <tr><td><span class="strain-type indica-type">Indica Dom</span></td><td>70%I / 30%S</td><td>Relaxed, body-focused</td></tr>
                            <tr><td><span class="strain-type hybrid-type">Balanced</span></td><td>50%I / 50%S</td><td>Even mind-body balance</td></tr>
                            <tr><td><span class="strain-type sativa-type">Sativa Dom</span></td><td>30%I / 70%S</td><td>Energetic, cerebral</td></tr>
                        </tbody>
                    </table>`
            }
        ]
    },
    ruderalis: {
        title: "FORGE Theory: Ruderalis Engine",
        tagline: "Time-based metabolic programming in Cannabis ruderalis",
        theme: {
            primary: "#d2691e",
            secondary: "#f4a460",
            accent: "#8b4513"
        },
        tabs: [
            {
                id: "overview",
                label: "Overview",
                icon: "fa-clock",
                content: `
                    <h2><i class="fas fa-leaf"></i> Core Principle: Chrono-Metabolic Engine</h2>
                    <p>The <strong>Ruderalis Chrono-Metabolic Engine (RCME)</strong> operates independently of photoperiod, allowing it to complete its life cycle in short growing seasons through a precise, genetically-timed biochemical sequence.</p>
                    <div class="autoflower-viz">
                        <div class="clock-icon"><i class="fas fa-clock"></i></div>
                        <h3>Autoflowering Timeline</h3>
                        <p>Ruderalis completes its entire life cycle in <strong>8-11 weeks</strong> regardless of light.</p>
                    </div>`
            },
            {
                id: "autoflower",
                label: "Timeline",
                icon: "fa-hourglass-half",
                content: `
                    <h2><i class="fas fa-clock"></i> Autoflowering Mechanism</h2>
                    <div class="timeline">
                        <div class="timeline-item"><div class="timeline-marker">1</div><div class="timeline-content"><h4>Germination to Week 1</h4><p>Rapid root establishment. Activation of AFL1 gene complex.</p></div></div>
                        <div class="timeline-item"><div class="timeline-marker">2</div><div class="timeline-content"><h4>Weeks 2-3</h4><p>Simultaneous vegetative and pre-floral development.</p></div></div>
                        <div class="timeline-item"><div class="timeline-marker">3</div><div class="timeline-content"><h4>Weeks 4-5</h4><p>Full flowering initiation regardless of photoperiod.</p></div></div>
                        <div class="timeline-item"><div class="timeline-marker">4</div><div class="timeline-content"><h4>Weeks 6-8</h4><p>Peak flowering and pollination. Senescence signals initiate.</p></div></div>
                    </div>`
            },
            {
                id: "environment",
                label: "Environment",
                icon: "fa-mountain",
                content: `
                    <h2><i class="fas fa-mountain"></i> Environmental Adaptations</h2>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-sun"></i> Low Light Adaptation</div><p><strong>Leaf structure:</strong> Broader leaves with more chlorophyll per area to capture diffuse northern light.</p></div>
                    <div class="chamber-card"><div class="chamber-title"><i class="fas fa-snowflake"></i> Cold Tolerance</div><p><strong>Antifreeze proteins:</strong> Prevent ice crystal formation. Can survive brief frosts.</p></div>`
            }
        ]
    }
};