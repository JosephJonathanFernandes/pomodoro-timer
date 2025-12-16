# 🚀 Quick Setup Guide

## TL;DR - Just Run This

```bash
# 1. Check versions (npm v10.9.x has bugs!)
node --version   # v22.21.1 ✅
npm --version    # v10.5.0 or v10.8.2 ✅

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
# OR if that fails:
.\node_modules\.bin\vite

# 4. Open browser
# http://localhost:5173
```

---

## ⚠️ Known Issues (Dec 2025)

### Issue #1: npm v10.9.4 Bug
**Error:** `ERR_INVALID_ARG_TYPE: The "file" argument must be of type string`

**Quick Fix:**
```bash
npm install -g npm@10.5.0
npm cache clean --force
npm install
```

### Issue #2: Locked node_modules
**Error:** `EPERM: operation not permitted, rmdir`

**Quick Fix:**
```bash
# Close ALL terminals, editors, VS Code
# Wait 10 seconds
Remove-Item -Path node_modules -Recurse -Force
npm install
```

### Issue #3: npm run dev Fails
**Error:** Cannot read properties of undefined

**Quick Fix:**
```bash
# Use Vite directly
.\node_modules\.bin\vite
```

---

## 📋 Requirements

| Component | Version | Status |
|-----------|---------|--------|
| Node.js | v22.21.1+ | ✅ Required |
| npm | v10.5.0 or v10.8.2 | ✅ Recommended |
| npm | v10.9.x | ❌ **Avoid (buggy)** |
| Browser | Chrome 61+/Firefox 60+ | ✅ Required |
| Vite | v4.5.14 | ✅ Auto-installed |

---

## 🔧 Troubleshooting Commands

```bash
# Check if Vite is installed
.\node_modules\.bin\vite --version

# Clean install
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json -Force
npm cache clean --force
npm install

# Verify npm version
npm --version
# If v10.9.x, downgrade:
npm install -g npm@10.5.0

# Test Node.js
node --version
node -e "console.log('Node works!')"

# Manual server (fallback)
python -m http.server 8000
```

---

## 📦 What Gets Installed

```
node_modules/
├── vite@4.5.14          # Dev server & bundler
├── rollup@~3.x          # Bundler (Vite dependency)
├── esbuild@~0.18.x      # Fast transpiler
└── ~50 other packages   # Dependencies
```

**Total size:** ~40-50 MB  
**Install time:** 30-60 seconds (clean install)

---

## 🎯 First Time Setup Checklist

- [ ] Clone repository
- [ ] Check Node.js version (v22+)
- [ ] Check npm version (NOT v10.9.x)
- [ ] Run `npm install`
- [ ] Run `npm run dev` or `.\node_modules\.bin\vite`
- [ ] Open http://localhost:5173
- [ ] Verify timer works
- [ ] Test all three modes
- [ ] Check browser console for errors

---

## 🔍 Quick Health Check

Run this to verify everything is working:

```bash
# Verify installation
node --version && npm --version

# Check Vite
.\node_modules\.bin\vite --version

# List key files
ls index.html, src/js/main.js

# Start server
npm run dev
```

**Expected output:**
```
v22.21.1
10.5.0
vite/4.5.14 win32-x64 node-v22.21.1

VITE v4.5.14 ready in 328 ms
Local: http://localhost:5173/
```

---

## 🆘 Still Having Issues?

1. **Close everything** (VS Code, terminals, browsers)
2. **Wait 10 seconds** (let file handles release)
3. **Delete these:**
   ```bash
   Remove-Item node_modules -Recurse -Force
   Remove-Item package-lock.json -Force
   ```
4. **Reinstall:**
   ```bash
   npm cache clean --force
   npm install
   ```
5. **Run directly:**
   ```bash
   .\node_modules\.bin\vite
   ```

If still broken, check [README.md](README.md) troubleshooting section or create an issue.

---

**Last Updated:** December 16, 2025  
**Tested On:** Windows 11, Node v22.21.1, npm v10.5.0
