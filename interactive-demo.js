/**
 * Perplexity Interactive Demo
 * Simulates dual-engine search with realistic timing and streaming
 */

class PerplexityDemo {
    constructor() {
        this.currentMode = 'dual';
        this.searchInput = document.getElementById('searchInput');
        this.emptyState = document.getElementById('emptyState');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.instantPanel = document.getElementById('instantPanel');
        this.aiPanel = document.getElementById('aiPanel');

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadExampleQueries();
        this.loadTheme();
    }

    setupEventListeners() {
        // Search input listeners
        this.searchInput.addEventListener('keydown', (e) => this.handleSearch(e));
        this.searchInput.addEventListener('input', () => this.handleInput());
        this.searchInput.addEventListener('focus', () => this.showSuggestions());

        // Click outside to close suggestions
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-box-wrapper')) {
                this.hideSuggestions();
            }
        });

        // Mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentMode = btn.dataset.mode;
                this.updateModeView();
            });
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

        // PM View toggle
        document.getElementById('pmViewToggle').addEventListener('click', () => this.togglePMView());

        // User toggle
        document.getElementById('userToggle').addEventListener('click', () => this.toggleUser());

        // Expand/Collapse instant results (vertical layout only)
        const instantExpandBtn = document.getElementById('instantExpandBtn');
        if (instantExpandBtn) {
            instantExpandBtn.addEventListener('click', () => this.toggleInstantExpand());
        }
    }

    handleSearch(e) {
        const query = this.searchInput.value.trim();

        // Enter key combinations
        if (e.key === 'Enter' && query) {
            e.preventDefault();

            if (e.ctrlKey) {
                // Ctrl+Enter: Instant only
                this.currentMode = 'instant';
                this.updateModeView();
                this.executeSearch(query, 'instant');
            } else if (e.altKey) {
                // Alt+Enter: AI only
                this.currentMode = 'ai';
                this.updateModeView();
                this.executeSearch(query, 'ai');
            } else {
                // Enter: Dual mode
                this.updateModeView();
                this.executeSearch(query, this.currentMode);
            }

            this.hideSuggestions();
        }

        // Escape to clear
        if (e.key === 'Escape') {
            this.searchInput.value = '';
            this.hideSuggestions();
        }
    }

    handleInput() {
        const query = this.searchInput.value.trim();

        if (query.length >= 2) {
            this.showSuggestions();
            this.filterSuggestions(query);
        } else {
            this.hideSuggestions();
        }
    }

    async executeSearch(query, mode) {
        // Hide empty state, show results container
        this.emptyState.style.display = 'none';
        this.resultsContainer.style.display = 'flex';

        // Hide keyboard hints after first search (smooth collapse)
        const searchHint = document.querySelector('.search-hint');
        if (searchHint) {
            searchHint.classList.add('hidden');
        }

        // Update strategy banner (only visible in PM View)
        document.getElementById('strategyText').innerHTML =
            `<strong>Query Type Detected:</strong> ${this.detectQueryType(query)} → <strong>${this.getModeDescription(mode)}</strong> | Index: Brave API + Proprietary | Model: GPT-4o`;

        // Reset panels
        this.resetPanels();

        // Update status indicators
        document.getElementById('instantStatus').textContent =
            mode === 'ai' ? 'Instant: Idle' : 'Instant: Loading...';
        document.getElementById('aiStatus').textContent =
            mode === 'instant' ? 'AI: Idle' : 'AI: Loading...';

        // Execute based on mode
        if (mode === 'dual') {
            this.loadInstantResults(query);
            this.loadAIResults(query);
        } else if (mode === 'instant') {
            this.hideAIPanel();
            this.loadInstantResults(query);
        } else if (mode === 'ai') {
            this.hideInstantPanel();
            this.loadAIResults(query);
        }
    }

    async loadInstantResults(query) {
        const instantContent = document.getElementById('instantContent');
        const instantSkeleton = document.getElementById('instantSkeleton');
        const instantLatency = document.getElementById('instantLatency');

        // Show skeleton
        instantSkeleton.style.display = 'block';

        // Simulate realistic latency (80-150ms)
        const latency = 80 + Math.floor(Math.random() * 70);

        await this.delay(latency);

        // Update metrics
        instantLatency.textContent = `${latency}ms`;
        document.getElementById('metricInstant').textContent = `${latency}ms`;
        document.getElementById('instantStatus').textContent = 'Instant: Complete';

        // Hide skeleton, show results
        instantSkeleton.style.display = 'none';

        // Get results from data
        const results = this.getInstantResults(query);
        instantContent.innerHTML = results.map((result, index) => `
            <div class="search-result" style="animation-delay: ${index * 0.1}s">
                <div>
                    <span class="result-rank">${index + 1}</span>
                    <span class="result-domain">${result.domain}</span>
                </div>
                <div class="result-title">${result.title}</div>
                <div class="result-snippet">${result.snippet}</div>
                <div class="result-meta">
                    ${result.meta.map(m => `<div class="meta-item">${m}</div>`).join('')}
                </div>
            </div>
        `).join('');
    }

    async loadAIResults(query) {
        const aiContent = document.getElementById('aiContent');
        const aiSkeleton = document.getElementById('aiSkeleton');
        const metricAI = document.getElementById('metricAI');

        // Show skeleton
        aiSkeleton.style.display = 'block';

        // Simulate first token latency (400-600ms)
        const firstTokenLatency = 5000 + Math.floor(Math.random() * 2000);

        await this.delay(firstTokenLatency);

        // Update metrics
        metricAI.textContent = `${firstTokenLatency}ms`;
        document.getElementById('aiStatus').textContent = 'AI: Streaming...';

        // Hide skeleton
        aiSkeleton.style.display = 'none';

        // Get AI response from data
        const response = this.getAIResponse(query);

        // Stream the response
        await this.streamText(aiContent, response);

        document.getElementById('aiStatus').textContent = 'AI: Complete';

        // Update cost metric
        const cost = (0.004 + Math.random() * 0.003).toFixed(4);
        document.getElementById('metricCost').textContent = `$${cost}`;

        // Update routing accuracy
        const accuracy = (92 + Math.random() * 4).toFixed(1);
        document.getElementById('metricRouting').textContent = `${accuracy}%`;
    }

    async streamText(container, html) {
        container.innerHTML = '';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        for (const node of tempDiv.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                // Stream text character by character
                const text = node.textContent;
                const span = document.createElement('span');
                container.appendChild(span);

                for (let i = 0; i < text.length; i++) {
                    span.textContent += text[i];
                    await this.delay(5); // 5ms per character
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Add element nodes directly (for formatting)
                container.appendChild(node.cloneNode(true));
                await this.delay(20);
            }
        }
    }

    resetPanels() {
        // Reset instant panel
        document.getElementById('instantContent').innerHTML = `
            <div class="skeleton-loader" id="instantSkeleton">
                <div class="skeleton-result"></div>
                <div class="skeleton-result"></div>
                <div class="skeleton-result"></div>
            </div>
        `;

        // Reset AI panel
        document.getElementById('aiContent').innerHTML = `
            <div class="skeleton-loader" id="aiSkeleton">
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text short"></div>
                <div class="skeleton-text"></div>
            </div>
        `;

        // Show both panels
        this.instantPanel.style.display = 'block';
        this.aiPanel.style.display = 'block';
        this.instantPanel.style.width = '40%';
        this.aiPanel.style.width = '60%';
    }

    hideInstantPanel() {
        this.instantPanel.style.display = 'none';
        this.aiPanel.style.width = '100%';
    }

    hideAIPanel() {
        this.aiPanel.style.display = 'none';
        this.instantPanel.style.width = '100%';
    }

    showSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer.children.length > 0) {
            suggestionsContainer.classList.add('visible');
        }
    }

    hideSuggestions() {
        document.getElementById('searchSuggestions').classList.remove('visible');
    }

    filterSuggestions(query) {
        const filtered = EXAMPLE_QUERIES.filter(q =>
            q.text.toLowerCase().includes(query.toLowerCase())
        );

        this.renderSuggestions(filtered.slice(0, 5));
    }

    renderSuggestions(queries) {
        const container = document.getElementById('searchSuggestions');
        container.innerHTML = queries.map(q => `
            <div class="suggestion-item" onclick="demo.selectSuggestion('${q.text.replace(/'/g, "\\'")}')">
                <span class="suggestion-icon">${q.icon}</span>
                <div style="flex: 1;">
                    <div class="suggestion-text">${q.text}</div>
                    <div class="suggestion-category">${q.category}</div>
                </div>
            </div>
        `).join('');
    }

    selectSuggestion(query) {
        this.searchInput.value = query;
        this.executeSearch(query, this.currentMode);
        this.hideSuggestions();
    }

    loadExampleQueries() {
        const container = document.getElementById('exampleQueries');
        container.innerHTML = EXAMPLE_QUERIES.slice(0, 4).map(q => `
            <div class="example-query" onclick="demo.selectSuggestion('${q.text.replace(/'/g, "\\'")}')">
                <div class="example-query-category">${q.category}</div>
                <div class="example-query-text">${q.icon} ${q.text}</div>
            </div>
        `).join('');
    }

    detectQueryType(query) {
        if (query.length > 50 || query.includes('how') || query.includes('why')) {
            return 'Complex/Research';
        } else if (query.includes('what is') || query.includes('who is')) {
            return 'Informational';
        } else {
            return 'Navigational';
        }
    }

    getModeDescription(mode) {
        const descriptions = {
            'dual': 'Both Engines Active',
            'instant': 'Instant Only',
            'ai': 'AI Only'
        };
        return descriptions[mode];
    }

    getInstantResults(query) {
        // Get from data.js or return defaults
        const queryData = QUERY_DATA[query] || QUERY_DATA['quantum computing approaches for cryptography'];
        return queryData.instantResults;
    }

    getAIResponse(query) {
        // Get from data.js or return defaults
        const queryData = QUERY_DATA[query] || QUERY_DATA['quantum computing approaches for cryptography'];
        return queryData.aiResponse;
    }

    // UI Controls
    updateModeView() {
        const instantPanel = document.getElementById('instantPanel');
        const aiPanel = document.getElementById('aiPanel');
        const body = document.body;

        // Remove all mode classes
        body.classList.remove('mode-instant-only', 'mode-ai-only', 'mode-dual');

        // Show/hide panels based on mode
        if (this.currentMode === 'instant') {
            instantPanel.style.display = 'block';
            aiPanel.style.display = 'none';
            instantPanel.style.width = '100%';
            body.classList.add('mode-instant-only');
        } else if (this.currentMode === 'ai') {
            instantPanel.style.display = 'none';
            aiPanel.style.display = 'block';
            aiPanel.style.width = '100%';
            body.classList.add('mode-ai-only');
        } else { // dual mode
            instantPanel.style.display = 'block';
            aiPanel.style.display = 'block';
            instantPanel.style.width = '';
            aiPanel.style.width = '';
            body.classList.add('mode-dual');
        }
    }

    toggleTheme() {
        const body = document.body;
        const btn = document.getElementById('themeToggle');

        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            btn.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            btn.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    }

    togglePMView() {
        const body = document.body;
        const btn = document.getElementById('pmViewToggle');
        const metricsBar = document.getElementById('metricsBar');
        const pmNote = document.getElementById('pmNote');

        body.classList.toggle('pm-view-active');
        metricsBar.classList.toggle('hidden');
        pmNote.classList.toggle('hidden');

        if (body.classList.contains('pm-view-active')) {
            btn.textContent = '👤 Switch to User View';
            localStorage.setItem('pmView', 'visible');
        } else {
            btn.textContent = '📊 Switch to Presentation';
            localStorage.setItem('pmView', 'hidden');
        }
    }

    toggleUser() {
        const btn = document.getElementById('userToggle');
        const isPro = btn.textContent.includes('Pro');

        if (isPro) {
            btn.innerHTML = '<span style="color: #6B7280;">●</span> Free User';
        } else {
            btn.innerHTML = '<span style="color: #F59E0B;">●</span> Pro User';
        }
    }

    toggleInstantExpand() {
        const instantPanel = document.getElementById('instantPanel');
        const expandIcon = document.getElementById('instantExpandIcon');

        instantPanel.classList.toggle('expanded');

        if (instantPanel.classList.contains('expanded')) {
            expandIcon.textContent = '⬆️';
        } else {
            expandIcon.textContent = '⬇️';
        }
    }

    loadTheme() {
        const theme = localStorage.getItem('theme');
        const pmView = localStorage.getItem('pmView');

        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('themeToggle').textContent = '☀️ Light Mode';
        }

        if (pmView === 'hidden') {
            document.body.classList.remove('pm-view-active');
            document.getElementById('metricsBar').classList.add('hidden');
            document.getElementById('pmNote').classList.add('hidden');
            document.getElementById('pmViewToggle').textContent = '📊 Switch to Presentation';
        } else {
            document.getElementById('pmViewToggle').textContent = '👤 Switch to User View';
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize demo when DOM is loaded
let demo;
document.addEventListener('DOMContentLoaded', () => {
    demo = new PerplexityDemo();
    console.log('✅ Perplexity Interactive Demo Loaded');
    console.log('💡 Try typing a query or clicking an example');
    console.log('⌨️  Keyboard shortcuts:');
    console.log('   • Enter: Dual mode search');
    console.log('   • Ctrl+Enter: Instant only');
    console.log('   • Alt+Enter: AI only');
    console.log('   • Esc: Clear search');
});
