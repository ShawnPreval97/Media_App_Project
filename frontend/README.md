# 🧠 Lucidframe

**Lucidframe** is a modular, analyst-driven platform that bridges the gap between consumer insights and media activation. It mimics real-world systems like Qualtrics Stats iQ, Google Ads dashboards, and media planning spreadsheets — but streamlined into a single, interactive product.

---

## 🚀 What This Is

Lucidframe is a fully working frontend + backend prototype with:

- **Insight Pivot**: Upload survey data → extract segment summaries, NPS, key driver stats, and view live charts
- **Media Blueprint**: Allocate budget across weeks and channels → get recommendations for campaign structure
- **Analytics Loop**: Track campaign KPIs like ROAS, CTR, spend → visualize performance over time

It's designed to **simulate a closed-loop insight-to-activation system**, where a strategist can go from uploading a CSV to building and optimizing a campaign.

---

## 🧱 Modules

### 🔍 Insight Pivot (Qualtrics Stats iQ–style)
- Upload CSV files (survey data)
- Generate survey metrics: NPS, gender breakdowns, segment distribution
- Interactive bar charts via Recharts
- Responsive data panels and filters (e.g., by Gender)

### 📊 Media Blueprint (Media Planning UI)
- Select active campaign weeks
- Allocate budgets across video, social, search
- Live calculations of total spend + per-week distribution
- Package selector (Awareness, Always On, etc.)

### 📈 Analytics Loop (Data Studio–style)
- Track dummy CTR, ROAS, impressions
- Choose campaign views
- Visualize CTR trends via line charts
- Card-based summary of media effectiveness

---

## 🔧 Tech Stack

| Layer          | Tools                     |
|----------------|---------------------------|
| Frontend       | React, Tailwind CSS, Vite |
| Charts         | Recharts                  |
| Backend        | Flask, Pandas, CORS       |
| Data Upload    | Real CSV → Pandas parsing |
| Dev Scripts    | npm, Python 3.11+         |

---

## 🧠 Why I Built This

I’m **Shawn Preval**, a market researcher and media planner with 3+ years of experience designing studies, analyzing survey data, and translating insights into activation plans.  

I’ve worked on:
- B2B and B2C audience segmentation
- Campaign ROI analysis
- Data-driven media investment strategies

Lucidframe is a reflection of how I think:
> Start with clean insights → generate activation-ready strategy → close the loop with performance analytics.

Instead of relying on a dozen tools and spreadsheets, I wanted to **build the tool I always needed** — one that connects the dots between research and real-world decision-making.

---

## 🗂 File Structure

