# EdgeMon V4.0 - Intelligent Threat & System Monitor

EdgeMon V4.0 is an advanced, self-hosted system telemetry and network Intrusion Detection System (IDS). Building upon V3.1, V4.0 integrates a multi-layered detection architecture that analyzes both Layer 1 system parameters and Layer 2/4 network packets to classify threat environments in real-time using Machine Learning.

---

## 🚀 Key Features

* **Multi-Layer Telemetry Poller**: Logs real-time hardware specs (CPU frequency/utilization, RAM, disk space, and temperatures).
* **Layer 2/4 Network Sniffing**: Uses Scapy in a detached thread to capture active packet streams and compile flow statistics.
* **ML-Powered IDS Engine**: Integrates a Scikit-Learn trained classifier (`model.pkl`) to predict whether active packet flows are benign or part of an intrusion attack.
* **Central Threat Evaluation**: Correlates system metrics and ML classification predictions into a combined, dynamic threat score.
* **Separate Databases**:
  * `system_metrics.db`: Logs standard telemetry (utilization, disk, and network stats).
  * `agent_metrics.db`: Tracks threat alerts and classified network events.
* **Excel Data Export**: Dynamic Excel report compiler ([/api/export](http://localhost:5000/api/export)) built on `openpyxl`.

---

## 🛠️ Project Structure

```
EdgMon_V4.0/
├── app.py             # Flask Web Server & Background sniffer/evaluation threads
├── models.py          # SQLite database definitions (system & agent databases)
├── scapy_engine.py    # Raw packet sniffer and FlowTracker
├── ids_engine.py      # ML Intrusion Detection Evaluator
├── threat_engine.py   # Correlator scoring threats across hardware/network
├── ml_model.py        # ML training and classifier architecture
├── feature_engine.py  # Network packet flow feature parser
├── generate_sounds.py # Sound alert asset generator
├── requirements.txt   # V4.0 Python dependencies
├── model.pkl          # Trained Random Forest/Decision Tree weights
├── model_features.pkl # Features metadata for ML preprocessing
├── static/            # Stylesheets, sounds, and frontend assets
└── templates/         # HTML template dashboard
```

---

## ⚙️ Installation & Setup

### Prerequisites
* Python 3.12+
* Wireshark/Npcap (Required by Scapy on Windows for packet captures)

### 1. Clone & Navigate to Project
```bash
git clone https://github.com/omar-gaafer/EdgMon_V4.0.git
cd EdgMon_V4.0
```

### 2. Configure Virtual Environment
* **Windows**:
  ```powershell
  python -m venv venv
  venv\Scripts\activate
  ```
* **Linux / macOS**:
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
pip install setuptools
```

---

## 🖥️ Running the Application

To run the complete system:
```bash
python app.py
```
This single entry point automatically spins up:
1. The **Flask Web Dashboard** (on port `5000`).
2. The **Background Scapy Packet Sniffer** (monitoring raw adapter sockets).
3. The **2-Second ML Evaluation & DB Logging Loop** (performing predictions and logging telemetry).

---

## 📊 API Reference

* `GET /` — Renders the main telemetry and threat classification dashboard.
* `GET /api/data` — Fetches active CPU/RAM/Disk stats, network flow status, and classified alerts.
* `GET /api/system` — Returns system os/hardware descriptors.
* `GET /api/health` — Internal health probe showing general health states.
* `GET /api/export` — Generates and downloads a detailed Excel report (`.xlsx`) containing database metrics.
