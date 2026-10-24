---
title: "B2B Telegram Automation & ERP Gateway"
description: "High-throughput Telegram bot platform integrated with FastAPI and PostgreSQL for automated order intake, warehouse checks, and CRM sync."
date: "Nov 10 2024"
techStack: ["Python", "FastAPI", "Aiogram", "PostgreSQL", "Redis", "Docker"]
businessImpact: "Automated 80%+ of incoming B2B order inquiries, cutting manual sales operator processing time from 20 minutes to under 30 seconds."
---

## Client Challenge & Regional Context

In Uzbekistan and across Central Asia, B2B wholesale trade operates heavily through Telegram. A major regional distribution company was losing sales due to delayed responses: operators spent 15–25 minutes manually checking warehouse inventory in spreadsheets and confirming prices for wholesale buyers.

## Technical Architecture & Implementation

- **Asynchronous Bot Infrastructure:** Built using **Python (Aiogram 3)** and **FastAPI**, with **Redis** for stateful session caching and rate-limiting during peak sales hours.
- **Direct ERP & Database Gateway:** Integrated with the client's central **PostgreSQL** database to execute indexed queries for real-time stock availability, tiered wholesale pricing, and debtor limits.
- **Automated Invoice & Order Generation:** Integrated automatic generation of PDF invoices and fiscal order drafts with instant manager notification webhooks.
- **AI-Powered Product Discovery:** Integrated Gemini API to parse voice messages and natural language product inquiries from buyers into exact SKU matches.

## Measurable Business ROI

- **80%+ Inquiries Automated:** Routine stock checks and price requests handled instantaneously without human intervention.
- **Latency Reduction:** Order confirmation turnaround dropped from ~20 minutes to under 30 seconds.
- **24/7 Order Intake:** Wholesale clients can submit orders outside standard office hours with zero lost revenue.
