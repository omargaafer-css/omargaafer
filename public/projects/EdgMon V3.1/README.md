# EdgeMon V3.1 - System Metrics Dashboard

EdgeMon is a lightweight, self-hosted system telemetry and monitoring dashboard. It tracks real-time performance indicators (CPU, memory, disk, network, and temperature) and exposes a web dashboard built with Flask alongside a persistent SQLite storage engine.

---

## 🚀 Features

* **Real-time Telemetry Dashboard**: Clean, interactive web interface for visualizing resource usage.
* **Persistent History**: Background daemon logs telemetry data into an SQLite database (`metrics.db`).
* **Cross-platform Temperature Readings**: Native support for temperature polling on both Windows (WMI/GPUtil/PowerShell) and Linux (`/sys/class/thermal`).
* **Automated Alert System**: Warnings when CPU, Memory, Disk, or Temperature cross configured thresholds.
* **Data Export**: Endpoint to export telemetry logs directly into a formatted CSV report.

---

## 🛠️ Project Structure

```
EdgMon_V3.1/
├── app.py             # Flask Web Server & API endpoints
├── monitor.py         # Hardware telemetry poller & DB logger
├── models.py          # SQLite database schema and operations
├── requirements.txt   # Project dependencies
├── static/            # Static assets (stylesheets, logos)
└── templates/         # HTML template files (dashboard.html)
```

---

## ⚙️ Installation & Setup

### Prerequisites
* Python 3.12+

### 1. Clone & Navigate to Project
```bash
git clone https://github.com/omar-gaafer/EdgeMone_Server.git
cd EdgeMone_Server
```

### 2. Configure Virtual Environment
Create and activate a virtual environment to manage dependencies locally:
* **Windows**:
  ```powershell
  python -m venv .venv
  .venv\Scripts\activate
  ```
* **Linux / macOS**:
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate
  ```

### 3. Install Dependencies
Install all required Python libraries:
```bash
pip install -r requirements.txt
pip install setuptools
```

---

## 🖥️ Running the Application

To run the full monitoring suite, you should run the **web server** and the **background collector** concurrently:

### Run the Web Dashboard
```bash
python app.py
```
By default, the server runs on [http://localhost:5000](http://localhost:5000).

### Run the Telemetry Polling Loop (Optional Background Daemon)
```bash
python monitor.py
```
This logs system metrics to the SQLite database every 5 seconds.

---

## 📊 API Reference

* `GET /` — Renders the web monitoring dashboard.
* `GET /api/data` — Returns the current real-time telemetry snapshot and any active alerts.
* `GET /api/system` — Returns static hardware identifiers and basic connectivity status.
* `GET /api/health` — Lightweight health endpoint showing core parameters for load-balancer usage.
* `GET /download` — Generates and downloads a CSV report containing the historical SQLite metric logs.

---

## ⚠️ Configuration (Thresholds)
Thresholds can be adjusted inside [monitor.py](monitor.py):
* `THRESHOLD_CPU`: Default `80%`
* `THRESHOLD_MEMORY`: Default `80%`
* `THRESHOLD_DISK`: Default `80%`
* `THRESHOLD_TEMP`: Default `70.0°C`
* `CHECK_INTERVAL`: Default `5` seconds
