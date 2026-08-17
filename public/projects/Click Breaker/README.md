<h1 align="center">
  <br>
  <a href="#"><img src=".imgs/clickbreaker_preview.jpg" alt="Click Breaker Platform"></a>
  <br>
  Click Breaker
  <br>
</h1>

<h4 align="center">Next-Generation Telemetry & Cyber Security Operations Platform (v2.0)</h4>

<p align="center">
  <a href="https://python.org">
    <img src="https://img.shields.io/badge/Python-v3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  </a>
  <a href="https://php.net">
    <img src="https://img.shields.io/badge/PHP-v7.4%20%7C%20v8.x-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Platform-Cross--Platform-00599C?style=flat-square" alt="Platform">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Version-2.0.0-06B6D4?style=flat-square" alt="Version">
  </a>
</p>

---

## Overview

**Click Breaker v2.0** is an advanced security telemetry, audit, and real-time monitoring operations platform.

Built with a high-performance Python control core and a glassmorphism web panel, Click Breaker provides live event streaming, interactive Chart.js analytics, dynamic plugin payload engines, HMAC-SHA256 JWT security, and multi-channel webhook dispatching (Telegram, Discord, Slack).

---

## Key Features

- ⚡ **Real-Time Telemetry Listener**: Live streaming terminal log viewer with pause/resume state control.
- 📊 **Interactive Analytics Dashboard**: Real-time Chart.js donut and line chart visualizations for capture rates and module breakdowns.
- 🔔 **Multi-Channel Webhook Engine**: Instant notification alerts sent to **Discord**, **Telegram**, and **Slack** upon telemetry capture.
- 🔐 **HMAC-SHA256 JWT Security**: Signed API tokens and bearer token authorization for secure programmatic control.
- 🔌 **Dynamic Plugin Payload Engine**: Modular payload engine supporting custom modules dropped directly into `click-web/plugins/`.
- 🎨 **Modern Glassmorphic Control Panel**: Sleek dark-mode interface with responsive layout and Outfit Google typography.
- 🌐 **Tunnel Ready**: Built-in support for local dev server deployment and Cloudflare Tunnel (`cloudflared`) / Ngrok forwarding.

---

## Project Architecture

```
Click Breaker Root
├── cb.py                 # Primary Python Controller & Server Manager
├── install.sh            # Automated System Dependencies Installer
├── .ascii                # CLI Branding & ASCII Banner
├── requirements.txt      # Python Dependencies Manifest
├── Settings.json         # Tool State & PID Configuration
├── modules/              # Core Control Modules
│   ├── banner.py         # Terminal Header & Visual Output Engine
│   ├── check.py          # Dependency Checker & Environment Initializer
│   └── control.py        # PHP Process Lifecycle & Log File Handler
└── click-web/            # Web Control Panel & Telemetry Endpoints
    ├── config.php        # Administrator Credentials & Webhook Settings
    ├── index.php         # Router & Session Dispatcher
    ├── login.php         # Glassmorphism Authentication Portal
    ├── panel.php         # Live Telemetry & Analytics Control Center
    ├── analytics_api.php # JSON Telemetry Metrics API
    ├── webhooks.php       # Telegram, Discord & Slack Dispatcher
    ├── receiver.php      # Async Telemetry Payload Receiver
    ├── list_templates.php# Dynamic Module & Plugin Scanner API
    ├── plugins/          # Custom Payload Plugins Directory
    ├── templates/        # Built-in Telemetry Modules
    └── assets/           # CSS, JS (script.js), Fonts, Components
```

---

## Quick Start

### 1. Installation

Clone the repository and install required packages:

```bash
# Install Python requirements
python3 -m pip install -r requirements.txt
```

On Linux or macOS, run the dependency setup script:

```bash
bash install.sh
```

### 2. Launching Click Breaker

Execute the primary entry point:

```bash
python3 cb.py
```

The controller will start the local server on `http://localhost:2525`.

---

## Webhook Configuration

To enable instant alerts for captured telemetry, update `click-web/config.php`:

```php
$CONFIG['webhooks'] = [
    "discord" => [
        "enabled" => true,
        "webhook_url" => "https://discord.com/api/webhooks/YOUR/WEBHOOK/URL"
    ],
    "telegram" => [
        "enabled" => true,
        "bot_token" => "YOUR_TELEGRAM_BOT_TOKEN",
        "chat_id" => "YOUR_TELEGRAM_CHAT_ID"
    ],
    "slack" => [
        "enabled" => true,
        "webhook_url" => "https://hooks.slack.com/services/YOUR/SLACK/URL"
    ]
];
```

---

## Default Credentials

- **Username**: `admin`
- **Password**: `admin`

---

<p align="center">
  <b>Click Breaker Project &bull; Security Telemetry Platform v2.0</b>
</p>
