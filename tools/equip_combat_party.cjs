/**
 * equip_combat_party.cjs — Sets Decks 1 & 100 to 100% verified crash-proof combat units
 */
const fs = require('fs');
const path = require('path');

const SEED_FILE = path.join(__dirname, '..', 'DanMemoRe', 'data', 'danmemore-seed.json');
console.log('[+] Equipping Crash-Proof Combat Party into Seed Database...');
