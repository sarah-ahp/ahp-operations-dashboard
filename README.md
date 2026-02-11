# AHP Operations Dashboard

Atlanta Houseplants operations and project management dashboard with live data.

**Live URL:** https://ahp-operations-dashboard.vercel.app/

## Features v2 (Live Data)
- **Active Workflows**: Track multi-step projects with progress bars
- **The Hook**: Immediate action items from memory/the-hook.md
- **Calendar**: Next 7 days view of installs, services, meetings
- **Activity Feed**: Recent actions and results
- **Financial Status** (New): Square invoices, outstanding balances
- **CRM & Sales** (New): GoHighLevel tasks, pipeline value

## Live Data Sources
- Square: Unpaid invoices, aging reports
- GoHighLevel: Active tasks, overdue count, pipeline value (~$82K)
- Auto-refresh: Every 5 minutes + on tab visibility

## Tech Stack
Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui

## Development
```bash
npm install
npm run dev
```

## Deploy
```bash
npm run build  # Static export to /dist
```

Auto-deploys on GitHub push via Vercel.

## Updates
Run `refresh_token.py` before any API operations.
