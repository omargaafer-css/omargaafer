"use client";

import { useState } from "react";
import { Cpu, Server, Database, Globe, ArrowRight, ShieldCheck, Layers, LayoutGrid } from "lucide-react";

type ArchType = "specsense" | "foodverse" | "ecommerce";

export default function SystemArch() {
  const [activeArch, setActiveArch] = useState<ArchType>("specsense");

  return (
    <div className="w-full bg-[#0E1322]/60 border border-border-custom rounded-xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Interactive Architecture Visualizer</h3>
          <p className="text-sm text-text-secondary">Inspect clean system topologies compiled from active code repositories.</p>
        </div>
        <div className="flex flex-wrap bg-[#05070B] border border-border-custom p-1 rounded-lg gap-1">
          <button
            onClick={() => setActiveArch("specsense")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all-custom ${
              activeArch === "specsense"
                ? "bg-primary-custom text-white shadow-md"
                : "text-text-secondary hover:text-white"
            }`}
          >
            SpecSense AI Flow
          </button>
          <button
            onClick={() => setActiveArch("foodverse")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all-custom ${
              activeArch === "foodverse"
                ? "bg-[#FF5A00] text-white shadow-md"
                : "text-text-secondary hover:text-white"
            }`}
          >
            FoodVerse 4-Tier ERP
          </button>
          <button
            onClick={() => setActiveArch("ecommerce")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all-custom ${
              activeArch === "ecommerce"
                ? "bg-primary-custom text-white shadow-md"
                : "text-text-secondary hover:text-white"
            }`}
          >
            Microservices Deployment
          </button>
        </div>
      </div>

      <div className="bg-[#05070B] border border-border-custom rounded-lg p-4 sm:p-8 flex items-center justify-center min-h-[320px]">
        {activeArch === "specsense" ? (
          /* SpecSense AI Flowchart */
          <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-xs font-mono">
            {/* Block 1: Input */}
            <div className="w-full md:w-44 p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col items-center text-center">
              <Globe className="text-primary-custom mb-2" size={24} />
              <div className="text-white font-bold mb-1">Datasheet Upload</div>
              <div className="text-text-secondary text-[10px]">PDF Technical Documents</div>
            </div>

            <ArrowRight className="hidden md:block text-text-secondary shrink-0" size={18} />
            <div className="block md:hidden text-text-secondary text-center">▼</div>

            {/* Block 2: OCR & Parser */}
            <div className="w-full md:w-48 p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col items-center text-center">
              <Cpu className="text-[#06B6D4] mb-2" size={24} />
              <div className="text-white font-bold mb-1">FastAPI Backend</div>
              <div className="text-text-secondary text-[10px]">OCR Text Extraction + SpaCy NLP parsing</div>
            </div>

            <ArrowRight className="hidden md:block text-text-secondary shrink-0" size={18} />
            <div className="block md:hidden text-text-secondary text-center">▼</div>

            {/* Block 3: Calculation */}
            <div className="w-full md:w-48 p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col items-center text-center">
              <Server className="text-[#F59E0B] mb-2" size={24} />
              <div className="text-white font-bold mb-1">Wiring Calculator</div>
              <div className="text-text-secondary text-[10px]">Feeder design, drop levels, & YOLOv8 cross-section inspect</div>
            </div>

            <ArrowRight className="hidden md:block text-text-secondary shrink-0" size={18} />
            <div className="block md:hidden text-text-secondary text-center">▼</div>

            {/* Block 4: Storage */}
            <div className="w-full md:w-44 p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col items-center text-center">
              <Database className="text-[#10B981] mb-2" size={24} />
              <div className="text-white font-bold mb-1">Dual DB Manager</div>
              <div className="text-text-secondary text-[10px]">PostgreSQL (Prod) with transparent SQLite fallback</div>
            </div>
          </div>
        ) : activeArch === "foodverse" ? (
          /* FoodVerse 4-Tier Architecture Diagram */
          <div className="w-full max-w-3xl flex flex-col items-center gap-6 text-xs font-mono">
            {/* Top Tier: Multi-Role Portals */}
            <div className="w-full p-4 border border-[#FF5A00]/30 rounded-xl bg-[#FF5A00]/5 relative">
              <div className="absolute -top-2.5 left-3 px-2 bg-[#05070B] text-[10px] text-[#FF5A00] font-bold uppercase tracking-wider">
                Tier 1: Presentation Layer (Java 21 Swing GUI)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
                <div className="p-2 bg-[#0E1322] border border-border-custom rounded text-center">
                  <div className="text-white font-bold text-[11px]">Customer</div>
                  <div className="text-text-secondary text-[9px]">Cart & Checkout</div>
                </div>
                <div className="p-2 bg-[#0E1322] border border-border-custom rounded text-center">
                  <div className="text-white font-bold text-[11px]">Manager</div>
                  <div className="text-text-secondary text-[9px]">Scoped Menu & Stock</div>
                </div>
                <div className="p-2 bg-[#0E1322] border border-border-custom rounded text-center">
                  <div className="text-white font-bold text-[11px]">Kitchen</div>
                  <div className="text-text-secondary text-[9px]">Live Order Pipeline</div>
                </div>
                <div className="p-2 bg-[#0E1322] border border-border-custom rounded text-center">
                  <div className="text-white font-bold text-[11px]">Driver</div>
                  <div className="text-text-secondary text-[9px]">Dispatch & Status</div>
                </div>
                <div className="p-2 bg-[#0E1322] border border-border-custom rounded text-center col-span-2 sm:col-span-1">
                  <div className="text-white font-bold text-[11px]">Super Admin</div>
                  <div className="text-text-secondary text-[9px]">System Audit Hub</div>
                </div>
              </div>
            </div>

            <div className="text-text-secondary text-center text-[10px]">▼ Strict RBAC Authorization & Event Dispatch</div>

            {/* Middle Tier: Services & DAO */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#06B6D4] font-bold mb-2">
                  <Layers size={16} />
                  <span>Tier 2: Business Logic Services</span>
                </div>
                <ul className="space-y-1 text-text-secondary text-[10px]">
                  <li>• <strong className="text-white">OrderService:</strong> Atomic Checkout & Cart Lock</li>
                  <li>• <strong className="text-white">InventoryService:</strong> Real-time Stock Deductions</li>
                  <li>• <strong className="text-white">UserService:</strong> Salted Hashing & RBAC Verification</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#F59E0B] font-bold mb-2">
                  <LayoutGrid size={16} />
                  <span>Tier 3: Data Access Object (DAO)</span>
                </div>
                <ul className="space-y-1 text-text-secondary text-[10px]">
                  <li>• <strong className="text-white">OrderDao / UserDAO:</strong> Parameterized SQL</li>
                  <li>• <strong className="text-white">RestaurantDao:</strong> Scoped Branch Isolation</li>
                  <li>• <strong className="text-white">ProductDao:</strong> Stock Deductions & Statements</li>
                </ul>
              </div>
            </div>

            <div className="text-text-secondary text-center text-[10px]">▼ JDBC Connection Pool (PRAGMA journal_mode = WAL;)</div>

            {/* Bottom Tier: Embedded SQLite */}
            <div className="w-full p-4 rounded-lg bg-[#0E1322] border border-[#10B981]/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#10B981]/10 rounded-lg text-[#10B981]">
                  <Database size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Tier 4: Relational SQLite Storage (talabat.db)</div>
                  <div className="text-text-secondary text-[10px]">PreparedStatements · Transactions · Foreign Key Constraints · WAL Mode</div>
                </div>
              </div>
              <span className="hidden sm:inline-block px-2.5 py-1 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 rounded text-[10px] font-bold">
                Atomic Persistence
              </span>
            </div>
          </div>
        ) : (
          /* E-Commerce Microservices Setup */
          <div className="w-full max-w-3xl flex flex-col items-center gap-6 text-xs font-mono">
            {/* Top: React Dashboard */}
            <div className="w-64 p-4 rounded-lg bg-[#0E1322] border border-border-custom flex flex-col items-center text-center">
              <Globe className="text-[#06B6D4] mb-2" size={24} />
              <div className="text-white font-bold mb-1">React Client UI</div>
              <div className="text-text-secondary text-[10px]">Administrative Dashboard (Port 3000)</div>
            </div>

            <div className="text-text-secondary text-center">▼ Container Gateway API Calls</div>

            {/* Middle: Microservices in Docker */}
            <div className="w-full p-6 border border-dashed border-[#EF4444]/40 rounded-xl bg-red-950/5 relative">
              <div className="absolute top-2 left-3 text-[10px] text-[#EF4444] font-semibold uppercase tracking-wider">Docker Host / Kubernetes Pod</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                <div className="p-3 bg-[#0E1322] border border-border-custom rounded-lg text-center">
                  <Server className="text-primary-custom mx-auto mb-1" size={16} />
                  <div className="text-white font-semibold">Catalog</div>
                  <div className="text-text-secondary text-[9px]">Port 8000</div>
                </div>
                <div className="p-3 bg-[#0E1322] border border-border-custom rounded-lg text-center">
                  <Server className="text-primary-custom mx-auto mb-1" size={16} />
                  <div className="text-white font-semibold">Cart</div>
                  <div className="text-text-secondary text-[9px]">Port 8001</div>
                </div>
                <div className="p-3 bg-[#0E1322] border border-border-custom rounded-lg text-center">
                  <Server className="text-primary-custom mx-auto mb-1" size={16} />
                  <div className="text-white font-semibold">Order</div>
                  <div className="text-text-secondary text-[9px]">Port 8002</div>
                </div>
                <div className="p-3 bg-[#0E1322] border border-border-custom rounded-lg text-center">
                  <Server className="text-primary-custom mx-auto mb-1" size={16} />
                  <div className="text-white font-semibold">Payment</div>
                  <div className="text-text-secondary text-[9px]">Port 8003</div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-between text-text-secondary text-[10px] px-8">
              <span>▲ Microservice Autonomy</span>
              <span>REST HTTP Sync / Async Calls</span>
              <span>In-Memory Volatile Databases (current state) ▲</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
