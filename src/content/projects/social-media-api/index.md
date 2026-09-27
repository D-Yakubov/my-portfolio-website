---
title: "High-Throughput Social REST API"
description: "Production-grade backend service with OAuth2 authentication and optimized PostgreSQL schemas."
date: "Jun 01 2024"
repoURL: "https://github.com/D-Yakubov"
techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"]
businessImpact: "Engineered scalable data layers with Alembic migrations, achieving sub-100ms response latencies and rock-solid auth security."
---

## Overview

A resilient RESTful backend service built for high-concurrency client workloads with strict OAuth2 token security, relational data modeling, and automated database migrations.

## Technical Highlights

- **OAuth2 Token Authentication:** Robust JWT access and refresh token management.
- **Data Integrity:** Strict foreign key constraint models and indexed lookups for feed generation.
- **Migration Architecture:** Version-controlled database changes using Alembic.
