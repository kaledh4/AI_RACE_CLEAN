# 🚀 Genesis Mission Control

AI-powered scientific intelligence dashboard tracking breakthroughs across 6 critical domains: Advanced Manufacturing, Biotechnology, Critical Materials, Nuclear Energy, Quantum Info Science, and Semiconductors.

## ✨ Features

- **📊 Real-time Research Tracking**: Pulls latest papers from arXiv daily
- **🤖 AI Strategic Briefing**: Daily analysis with macro trends, actionable insights, and predictions
- **⏱️ Mission Timeline**: Countdown to critical milestones
- **🔍 Smart Search**: Filter papers by keyword, domain, or technology
- **📱 PWA Support**: Install as a mobile app
- **🎨 Premium Design**: Modern, animated UI with glassmorphism effects

## 🛠️ Setup

### 1. Add GitHub Secret

For the AI briefing to work, you need to add your OpenRouter API key as a GitHub Secret:

1. Go to your repository: **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `OPENROUTER_API_KEY`
4. Value: `[YOUR_OPENROUTER_API_KEY_HERE]`
5. Click **Add secret**

### 2. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will deploy automatically

### 3. Trigger First Deployment

1. Go to **Actions** tab
2. Select **Daily Mission Update** workflow
3. Click **Run workflow** → **Run workflow**

Your site will be live at: `https://kaledh4.github.io/AI_RACE/`

## 🔄 How It Works

1. **Daily at 06:00 UTC**: GitHub Actions runs `scraper.py`
2. **Data Collection**: Fetches latest papers from arXiv for all 6 domains
3. **AI Analysis**: Sends data to OpenRouter (Grok-4.1-fast) for strategic briefing
4. **Auto-Deploy**: Updates `mission_data.json` and redeploys to GitHub Pages

## 📁 File Structure

```
AI_RACE/
├── index.html          # Premium dashboard UI
├── scraper.py          # Data fetching + AI analysis
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── mission_data.json  # Generated data (auto-updated daily)
└── .github/
    └── workflows/
        └── daily_update.yml  # Automation workflow
```

## 🎯 AI Briefing Sections

- **🦅 Macro View**: Big picture analysis across all domains
- **⚡ Actionable Verdict**: What to focus on immediately
- **🔭 Weekly Watchlist**: Key technologies to monitor
- **📈 Trend Analysis**: Research activity patterns
- **🔮 What to Expect Next**: 30-90 day predictions
- **🏷️ Search Terms & Hashtags**: Keywords for tracking

## 🚀 Local Development

```bash
# Install dependencies (Python 3.10+)
# No external dependencies needed - uses stdlib only!

# Run scraper locally
python scraper.py

# Serve locally
python -m http.server 8000
# Visit: http://localhost:8000
```

## 📊 Data Sources

- **arXiv API**: Open access to 2M+ scientific papers
- **OpenRouter**: AI analysis using x-ai/grok-4.1-fast:free

## 🔐 Security

- API keys stored as GitHub Secrets (never committed)
- Environment variables used in workflows
- Fallback key for local development only

## 📱 Mobile Support

- Fully responsive design
- PWA-enabled for "Add to Home Screen"
- Offline support via service worker
- Optimized for touch interactions

## 🎨 Design Features

- Animated grid background
- Glassmorphism effects
- Shimmer animations
- Gradient accents
- Dark mode optimized
- Custom fonts (Space Grotesk + JetBrains Mono)

## 📄 License

Open source - feel free to fork and customize!

## 🤝 Contributing

This is a personal dashboard but feel free to:
- Report issues
- Suggest features
- Fork and customize for your use case

---

**Built with** ⚡ GitHub Actions | 🤖 OpenRouter AI | 📚 arXiv API