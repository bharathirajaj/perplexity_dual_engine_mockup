/**
 * Query Data - Pre-loaded examples and responses
 */

// Example query suggestions
const EXAMPLE_QUERIES = [
    {
        icon: '🔐',
        text: 'quantum computing approaches for cryptography',
        category: 'Technology'
    },
    {
        icon: '🧬',
        text: 'CRISPR gene editing ethical implications 2025',
        category: 'Science'
    },
    {
        icon: '🤖',
        text: 'how do large language models handle context windows',
        category: 'AI/ML'
    },
    {
        icon: '🌍',
        text: 'climate change impact on global supply chains',
        category: 'Economics'
    },
    {
        icon: '⚡',
        text: 'solid-state battery technology timeline',
        category: 'Energy'
    },
    {
        icon: '🧠',
        text: 'neuroplasticity and adult learning capacity',
        category: 'Neuroscience'
    },
    {
        icon: '🚀',
        text: 'SpaceX Starship vs NASA Artemis comparison',
        category: 'Space'
    },
    {
        icon: '💊',
        text: 'mRNA vaccine development process',
        category: 'Medicine'
    }
];

// Query-specific data (instant results + AI responses)
const QUERY_DATA = {
    'quantum computing approaches for cryptography': {
        instantResults: [
            {
                domain: 'nature.com',
                title: 'Post-Quantum Cryptography: Lattice-Based vs Code-Based Systems',
                snippet: 'Comprehensive peer-reviewed analysis comparing NIST\'s selected lattice-based algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium) with traditional code-based approaches. Includes security proofs, performance benchmarks, and quantum resistance guarantees.',
                meta: ['📅 Jan 2025', '📊 Cited 847×', '⭐ H-Index: 92']
            },
            {
                domain: 'arxiv.org',
                title: 'Shor\'s Algorithm vs Grover\'s: Impact on Modern Cryptographic Standards',
                snippet: 'Detailed cryptanalysis comparing polynomial-time factoring (Shor\'s) against quadratic speedup in search (Grover\'s). Examines implications for RSA-2048, ECC-256, and AES-256 security margins under quantum threat models.',
                meta: ['📅 Dec 2024', '📄 cs.CR', '✓ Peer-reviewed']
            },
            {
                domain: 'nist.gov',
                title: 'NIST Post-Quantum Cryptography Standards - Final Round (2025)',
                snippet: 'Official standardization documentation for quantum-resistant algorithms. Features complete specifications for CRYSTALS-Kyber (key encapsulation), CRYSTALS-Dilithium (signatures), and backup candidates including Classic McEliece.',
                meta: ['📅 Aug 2024', '🏛️ Government', '⭐ Authoritative']
            },
            {
                domain: 'ibm.com',
                title: 'IBM Quantum-Safe Cryptography: Enterprise Implementation Guide',
                snippet: 'Production deployment strategies for post-quantum algorithms. Includes hybrid classical+quantum approaches, migration timelines, performance benchmarks for TLS 1.3, VPN, and secure messaging systems.',
                meta: ['📅 Oct 2024', '🏢 Industry', '💼 Enterprise-grade']
            },
            {
                domain: 'microsoft.com',
                title: 'Topological Quantum Computing for Secure Key Distribution',
                snippet: 'Research on topology-based quantum cryptography leveraging Majorana fermions for fault-tolerant quantum key distribution. Compares favorably with BB84 protocol in error resistance and scalability potential.',
                meta: ['📅 Sep 2024', '🔬 Research', '🚀 Experimental']
            }
        ],
        aiResponse: `
            <p><strong>Quantum computing fundamentally threatens existing cryptography while enabling new secure paradigms.</strong> There are three distinct strategic approaches to quantum-resistant cryptography, each optimized for different security and deployment constraints:</p>

            <h3>1. Post-Quantum Cryptography (Math-Based Defense)</h3>
            <p><strong>Lattice-Based Systems</strong><br>
            NIST's standardized algorithms—CRYSTALS-Kyber (key exchange) and CRYSTALS-Dilithium (signatures)—rely on hard mathematical problems (Learning With Errors) that resist both classical and quantum attacks. These offer optimal <strong>balance: ~1KB key sizes, 50-100μs operations, 256-bit security</strong>. Major tech companies are already deploying these in TLS 1.3, VPNs, and secure messaging.</p>

            <p><strong>Code-Based & Hash-Based Alternatives</strong><br>
            Classic McEliece (code-based) offers 40+ years of cryptanalysis history with zero structural breaks—highest confidence in long-term security. Trade-off: public keys >100KB make it impractical for most protocols. Hash-based signatures (SPHINCS+) are quantum-safe but slow. These serve as <strong>backup/high-assurance options</strong> if lattice assumptions fail.</p>

            <h3>2. Quantum Key Distribution (Physics-Based Defense)</h3>
            <p><strong>QKD Fundamentals</strong><br>
            Unlike algorithmic security, QKD exploits quantum mechanics—specifically, the no-cloning theorem and measurement collapse. Any eavesdropping attempt introduces detectable disturbances. This provides <strong>information-theoretic security</strong> (unconditional, not based on computational assumptions).</p>

            <p><strong>Practical Constraints:</strong><br>
            • Distance: Limited to ~100km fiber without quantum repeaters (still experimental)<br>
            • Infrastructure: Requires specialized photon detectors, single-photon sources<br>
            • Cost: $50K-$500K per endpoint (2025 pricing)<br>
            • Use cases: Government-to-government links, financial settlement networks, military command<br>
            <strong>Verdict:</strong> Not viable for internet-scale deployment; valuable for ultra-sensitive point-to-point channels.</p>

            <h3>3. Quantum Threat Timeline & Attack Models</h3>
            <p><strong>Shor's Algorithm</strong><br>
            Breaks RSA/ECC in polynomial time (compared to exponential for classical computers). Requires ~20 million noisy qubits or ~4,000 logical qubits for RSA-2048. <strong>Conservative estimate: 2030-2035</strong> for cryptographically-relevant quantum computers (CRQC).</p>

            <p><strong>Grover's Algorithm</strong><br>
            Provides quadratic speedup for brute-force search—effectively halves symmetric key security. AES-256 → 128-bit effective security (still secure). Mitigation: Increase symmetric key sizes (already standard practice).</p>

            <p><strong>Recommended Strategy for Most Organizations:</strong><br>
            Deploy <strong>hybrid classical+post-quantum</strong> immediately (e.g., X25519+Kyber768 for TLS). This provides:
            1. Backward compatibility with classical-only clients<br>
            2. Forward security against future quantum attacks<br>
            3. Minimal performance overhead (adds ~1ms to handshake)<br>
            Monitor QKD for niche high-value applications post-2030.</p>
        `
    },

    'CRISPR gene editing ethical implications 2025': {
        instantResults: [
            {
                domain: 'nature.com',
                title: 'CRISPR Ethics Guidelines: International Consensus Framework 2025',
                snippet: 'Updated ethical frameworks for germline editing following He Jiankui case. Covers informed consent, equity in access, off-target effects disclosure, and regulatory harmonization across 47 countries.',
                meta: ['📅 Feb 2025', '📊 Cited 1,203×', '⭐ Nature Ethics']
            },
            {
                domain: 'who.int',
                title: 'WHO Position on Human Genome Editing - 2025 Update',
                snippet: 'World Health Organization guidelines on somatic vs germline editing, regulatory oversight requirements, and global registry for clinical trials. Includes risk-benefit analysis framework.',
                meta: ['📅 Jan 2025', '🏛️ WHO Official', '✓ Policy Document']
            },
            {
                domain: 'science.org',
                title: 'Off-Target Effects in Clinical CRISPR Trials: Meta-Analysis',
                snippet: 'Systematic review of 127 clinical trials (2020-2024) analyzing unintended mutations, mosaicism rates, and long-term safety data. Reports 0.3% serious adverse events linked to off-target edits.',
                meta: ['📅 Dec 2024', '📄 Peer-reviewed', '🔬 Meta-study']
            }
        ],
        aiResponse: `
            <p><strong>CRISPR gene editing in 2025 presents converging ethical, regulatory, and technical challenges</strong> as the technology transitions from research to clinical deployment. Key ethical considerations span safety, equity, consent, and societal implications.</p>

            <h3>1. Clinical Safety & Informed Consent</h3>
            <p><strong>Off-Target Effects</strong><br>
            Meta-analysis of 127 clinical trials (2020-2024) shows 0.3% serious adverse events from unintended edits. While improved computational tools (like Cas-OFFinder 2.0) reduce risk, <strong>complete elimination remains impossible</strong>. Ethical imperative: comprehensive disclosure of residual risks in informed consent processes.</p>

            <p><strong>Mosaicism in Embryo Editing</strong><br>
            Germline modifications show 15-30% mosaicism rates (not all cells carry the edit). This complicates outcome prediction and raises questions about editing embryos when precision is incomplete.</p>

            <h3>2. Equity & Access Challenges</h3>
            <p><strong>Global Disparity</strong><br>
            CRISPR therapies cost $1-3M per patient (2025 pricing). This creates <strong>genetic enhancement divide</strong> where only wealthy individuals/nations access life-saving or enhancement edits. WHO calls for international funding mechanisms to ensure equitable access.</p>

            <h3>3. Germline Editing: The Central Ethical Debate</h3>
            <p><strong>Current Consensus (2025):</strong><br>
            • <strong>Somatic editing</strong> (non-heritable): Broadly accepted for serious diseases (sickle cell, beta-thalassemia). Over 2,000 patients treated globally.<br>
            • <strong>Germline editing</strong> (heritable): 47 countries maintain moratorium except for research. Only permitted when: (1) no alternative treatment exists, (2) targets severe monogenic diseases, (3) rigorous oversight in place.</p>

            <p><strong>Recommended Ethical Framework:</strong><br>
            Proceed with somatic CRISPR for therapeutic purposes under strict informed consent. Maintain international moratorium on germline editing until: (1) off-target rates <0.01%, (2) global equity mechanisms established, (3) societal consensus on enhancement vs therapy boundary.</p>
        `
    },

    'how do large language models handle context windows': {
        instantResults: [
            {
                domain: 'arxiv.org',
                title: 'Attention Is All You Need: Transformer Architecture Deep Dive',
                snippet: 'Original transformer paper explaining self-attention mechanisms, positional encoding, and quadratic scaling of attention with sequence length. Foundation for understanding context window limitations.',
                meta: ['📅 2017 (Seminal)', '📊 Cited 89,432×', '⭐ Foundational']
            },
            {
                domain: 'openai.com',
                title: 'GPT-4 Technical Report: Context Window Engineering',
                snippet: 'Details on 32K/128K token context windows, attention pattern optimization, and sparse attention techniques. Discusses trade-offs between context length and computational cost.',
                meta: ['📅 Mar 2023', '🏢 OpenAI', '💼 Technical Report']
            },
            {
                domain: 'anthropic.com',
                title: 'Claude 2.1: 200K Token Context Window Architecture',
                snippet: 'Breakthrough approach using hierarchical attention and memory consolidation to achieve 200K+ token windows while maintaining accuracy. Includes needle-in-haystack benchmark results.',
                meta: ['📅 Nov 2023', '🏢 Anthropic', '🚀 State-of-art']
            }
        ],
        aiResponse: `
            <p><strong>Large language models handle context windows through self-attention mechanisms</strong>, but face fundamental trade-offs between context length, computational cost, and accuracy. Modern approaches use architectural innovations to extend usable context.</p>

            <h3>1. Core Mechanism: Self-Attention</h3>
            <p><strong>Quadratic Scaling Problem</strong><br>
            Standard transformer attention computes pairwise relationships between all tokens, requiring <strong>O(n²) memory and compute</strong> where n = sequence length. A 100K token context needs 10 billion attention computations per layer—prohibitively expensive.</p>

            <p><strong>Positional Encoding</strong><br>
            Transformers use positional embeddings (absolute or relative) to track token order. Long context breaks down when positions exceed training distribution (e.g., model trained on 4K tokens struggles at 32K).</p>

            <h3>2. Solutions for Extended Context</h3>
            <p><strong>Sparse Attention Patterns</strong><br>
            • <strong>Sliding Window:</strong> Each token attends to fixed neighbors (e.g., ±512 tokens). Reduces to O(n×window_size).<br>
            • <strong>Global Tokens:</strong> Special tokens attend to entire sequence while others use local attention.<br>
            • <strong>Random Sampling:</strong> Probabilistically attend to subset of tokens.</p>

            <p><strong>Hierarchical Compression (Claude's Approach)</strong><br>
            Anthropic's 200K context uses multi-stage processing: (1) Split context into chunks, (2) Compress chunks into summaries, (3) Full attention on summaries + recent tokens. Achieves <strong>99.7% accuracy</strong> on needle-in-haystack tests.</p>

            <h3>3. Practical Implications</h3>
            <p><strong>Context Length vs Effective Usage:</strong><br>
            While GPT-4 supports 128K tokens, empirical tests show <strong>performance degrades beyond 64K</strong> for complex reasoning. Models prioritize recent tokens (recency bias) and lose mid-context details.</p>

            <p><strong>Best Practices:</strong><br>
            For critical information: place at beginning (primacy) or end (recency). Avoid burying key details in middle of long contexts. Use explicit references ("As mentioned in paragraph 3...") to combat attention dilution.</p>
        `
    }
};

// Default fallback data
QUERY_DATA['default'] = {
    instantResults: [
        {
            domain: 'wikipedia.org',
            title: 'General Information Overview',
            snippet: 'This is a demo query without pre-loaded data. The dual-engine system would fetch real results from web indexes and synthesize AI responses based on your specific query.',
            meta: ['📅 Live', '🔍 Web Search', '⚡ Instant']
        },
        {
            domain: 'scholar.google.com',
            title: 'Related Academic Research',
            snippet: 'Academic databases would provide peer-reviewed papers, citations, and research findings relevant to your query with filtering by date, relevance, and citation count.',
            meta: ['📄 Academic', '✓ Peer-reviewed', '📊 Cited']
        },
        {
            domain: 'news.google.com',
            title: 'Recent News Coverage',
            snippet: 'News aggregation would surface recent articles, expert opinions, and breaking developments related to your search query from trusted journalism sources.',
            meta: ['📰 News', '⏱️ Recent', '✓ Verified']
        }
    ],
    aiResponse: `
        <p><strong>This is a demonstration of the dual-engine search architecture.</strong> In production, the AI would analyze multiple sources in real-time and synthesize a comprehensive answer tailored to your specific query.</p>

        <h3>How It Works</h3>
        <p><strong>Instant Results Engine</strong><br>
        Fetches traditional web results in ~118ms using Brave API or proprietary index. Optimized for navigational and informational queries with 70% coverage of search intent.</p>

        <p><strong>AI Synthesis Engine</strong><br>
        Uses GPT-4o to read top sources, extract key insights, and generate coherent summaries with citations. First token appears in ~482ms, with full response streaming progressively.</p>

        <h3>Try These Features</h3>
        <p>• <strong>Enter:</strong> Dual mode (both engines)<br>
        • <strong>Ctrl+Enter:</strong> Instant results only<br>
        • <strong>Alt+Enter:</strong> AI synthesis only<br>
        • <strong>Click examples</strong> above for pre-loaded demo queries</p>
    `
};
