/**
 * boot_env.cjs — Master DanMemo Offline Revival Boot & Health Verifier
 */
const { execFile, execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ADB = 'C:\\Program Files\\Netease\\MuMuPlayer\\nx_device\\15.0\\shell\\adb.exe';
const DEVICE = '127.0.0.1:16384';
const PORT = 28766;

console.log('[+] Starting DanMemo Revival Environment Boot...');
require('./doctor.cjs');
