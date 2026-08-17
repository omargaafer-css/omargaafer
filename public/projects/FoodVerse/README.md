# 🍕 FoodVerse — Enterprise Multi-Role Food Delivery & ERP Platform

**FoodVerse** is a modern, 4-tier desktop Food Delivery & Resource Management (ERP) system built with **Java 21**, **Swing GUI**, and an embedded **SQLite Database (`talabat.db`)**.

---

## 🌟 Key Features

- **🔒 Role-Based Access Control (RBAC)**:
  - **`CUSTOMER`**: Browse partner menus, place orders with coupons (`TALABAT20`), track live order progress, and view printable past receipts.
  - **`RESTAURANT_MANAGER`**: Scoped strictly to their assigned restaurant (e.g. KFC, Al Sultan Grill, Pizza Hut). Manage menu items, prices, stock quantities, and inventory charts.
  - **`STAFF`**: Kitchen staff view incoming orders and advance preparation statuses (`Placed` ➔ `Preparing`).
  - **`DELIVERY`**: Delivery drivers access delivery addresses, customer contact info, and update delivery progress (`On the Way` ➔ `Delivered`).
  - **`ADMIN`**: Super Admin with global access across all restaurants, live customer order dashboards, and dedicated **Staff & User Account Management**.

- **📦 Real-Time Inventory Stock Deduction & Disk Persistence**:
  - Validates available stock before adding to cart to prevent over-ordering.
  - Deducts stock in real-time upon order placement directly inside SQLite database.
  - Out-of-stock items are automatically flagged for both customers and managers.

- **🗄️ Relational SQLite Database Architecture (`talabat.db`)**:
  - Replaced legacy text files with normalized SQL tables (`users`, `restaurants`, `products`, `orders`, `order_items`).
  - Uses parameterized PreparedStatements with WAL mode (`PRAGMA journal_mode = WAL;`) for maximum concurrency and resource safety.

- **🎨 Modern Dark UI Design System**:
  - Vibrant Talabat Orange (`#FF5A00`) accent palette, glassmorphism cards, custom `Graphics2D` stock distribution bar charts, and zero emoji fallback rendering artifacts.

---

## 🏛️ Architecture & Project Structure

```
FoodVerse/
├── lib/                     # SQLite JDBC Driver & SLF4J Logging Helper Libraries
│   ├── sqlite-jdbc.jar
│   ├── slf4j-api.jar
│   └── slf4j-nop.jar
├── src/
│   └── ds/
│       ├── App.java         # Main Application Entry Point
│       ├── model/           # Encapsulated Domain Entities (User, Restaurant, Product, Order)
│       ├── dao/             # Data Access Objects (UserDao, RestaurantDao, ProductDao, OrderDao)
│       ├── service/         # Business Logic (DatabaseManager, UserService, MenuService, OrderService)
│       └── gui/             # Swing Presentation Layer (LoginFrame, CustomerInterface, ManagerInterface, UITheme)
├── talabat.db               # Embedded SQLite Database File
└── README.md
```

---

## 🔑 Pre-Configured Test Accounts

| Username | Password | Role | Scoped Permission / Access |
| :--- | :--- | :--- | :--- |
| `admin` | `admin` | **Super Admin** | Full System Access & User Creation |
| `ahmed` | `2291970` | **Customer** | Customer Portal & Order Receipts |
| `kfc_mgr` | `123` | **Restaurant Manager** | **KFC Only** |
| `sultan_mgr` | `123` | **Restaurant Manager** | **Al Sultan Grill Only** |
| `pizzahut_mgr` | `123` | **Restaurant Manager** | **Pizza Hut Only** |
| `driver1` | `123` | **Delivery Driver** | Delivery Orders |

---

## 💻 How to Build & Run

### 1. Compile Source Code
```powershell
javac -cp "lib/*" -d bin src/ds/App.java src/ds/model/*.java src/ds/dao/*.java src/ds/service/*.java src/ds/gui/common/*.java src/ds/gui/customer/*.java src/ds/gui/manager/*.java
```

### 2. Run Application
```powershell
java -cp "bin;lib/*" ds.App
```
