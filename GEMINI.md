# DanMemo Restoration Project — Hard Guardrails & Engine Invariants (GEMINI.md)

## RapidJSON Engine Invariants
1. Native C++ parser checks `Value::GetType() == 0x5` (`kNumberType`). Quoted numeric strings fail with an unhandled exception.
2. Dual-level JSON envelope parity: IDs must exist at both root and inside `result`.
3. Transport: AES-256-CBC, raw zlib, `Connection: keep-alive`.
