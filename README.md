# DanMemo Fan Offline Revival Freese (DanMachi: Memoria Freese)
**Fully Restored Community Offline Server, Protocol Decoders, and Master SQLite Reference**

---

## 🌟 Overview
This repository contains the complete community offline revival architecture for **DanMachi: Memoria Freese (com.eu.danmemo / com.eu.danmore)**, enabling the game to boot, authenticate, load Orario Town, equip crash-proof character rosters, and interact with master databases completely offline without active developer servers.

---

## 🚀 Quick Start (One-Click Environment Boot)
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Alcend/Danmemo_fanofflinerevivalfreese.git
   cd Danmemo_fanofflinerevivalfreese
   ```
2. **Start the Offline Server & Preflight Doctor:**
   ```bash
   node boot_env.cjs
   ```
   This script performs an automated 5-point audit:
   - Verifies ADB routing (`127.0.0.1:16384` on MuMuPlayer 15).
   - Starts `danmemore_server.cjs` on port `28766`.
   - Clears pending orphaned rows in `operation_queue`.
   - Verifies canonical `UserArea` and `UserLottery` tokens.
   - Verifies native `libapp.so` MD5 checksum.

---

## 🛡️ Solved Gates Summary (1 through 15)
- **Gate 1:** Dynamic IP Discovery & DNS Resolution.
- **Gate 2:** Argo AES-256-CBC Payload Decryption & Decompression.
- **Gate 3:** RapidJSON `kNumberType` (0x5) Integer Compliance (`userId`, `server_time`).
- **Gate 4:** Dual-Level Envelope Parity (Root keys + `result` model mapping).
- **Gate 5:** Server Time & Synchronization Anchors.
- **Gate 6:** Asset Pipeline Verification (`version.manifest.1`, `project.manifest.1`).
- **Gate 7:** SQLite Master Schema Extraction (`DanMemoRe/.work/danmemore.sqlite`).
- **Gate 8:** Gacha Persistence & Catalog Mapping.
- **Gate 9:** Town Screen & Character Album Activation.
- **Gate 10:** Currency Shielding (99,999+ Iris, 50M Valis, 148 Stamina).
- **Gate 11:** 404 Manifest Fallback Resolution.
- **Gate 12:** Combat Party Alignment (`tools/equip_combat_party.cjs`).
- **Gate 13:** Character Spine Verification (404 3D models verified).
- **Gate 14:** Combat Segfault Prevention (Elimination of `LWFResourceCacheDelegate` SIGSEGV null dereferences).
- **Gate 15:** 100% Crash-Proof Party Deployed (Bell Cranel, Ryu Lion, Ais Wallenstein, Lefiya Viridis).
