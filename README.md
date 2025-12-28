# BUbet

BUBet platform API built with Node.js, TypeScript, and Fastify.

## Overview

BUbet is a comprehensive backend application for managing sports betting events, competitors, user rankings, and related features.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Fastify
- **Language**: TypeScript
- **Database**: Prisma ORM
- **Authentication**: JWT
- **Storage**: AWS S3
- **Email**: Custom mail service

## Project Structure

```
src/
├── controllers/      # HTTP request handlers
├── use-cases/        # Business logic
├── repositories/     # Data access layer
├── middlewares/      # Authentication & authorization
├── utils/            # Helper functions
├── lib/              # Third-party integrations
└── env/              # Environment configuration
```

## Key Features

- **Events Management**: Create and manage betting events
- **Competitors**: Track competitor statistics and rankings
- **Bets**: Create and list user bets
- **Golden Banners**: Special badge system
- **User Rankings**: Event-based user leaderboards
- **Judges System**: Event judge management
- **Notifications**: Real-time user notifications
- **Email Service**: Automated email campaigns
- **Feedback System**: User feedback collection
- **AWS S3 Integration**: File storage support

## Getting Started

1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. Run migrations: `npx prisma migrate dev`
4. Start server: `npm run dev:start`
