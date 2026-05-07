# 🏫 HolidayAlert TN — School Holiday Detection System

An AI-powered system that monitors Tamil Nadu & Puducherry news channels , uses OCR to detect school holiday announcements, and sends instant WhatsApp/call notifications to registered parents and students.

---

## 🌍 Expanding to New States

The OCR models for 8 languages are already downloaded. To add a new state:

1. **Add channels** to `CHANNEL_MAP` in `index.js`
2. **Add language** to `LANGUAGE_MAP` in `index.js`:
   ```js
   'Kerala': 'mal+eng',
   'Karnataka': 'kan+eng',
   'Delhi': 'hin+eng'
   ```
3. **Add districts** to `districts.js`
4. **Add state keywords** to `STATE_WIDE_KEYWORDS` in `filterConfig.js`

That's it. The entire pipeline (OCR → AI → alert) works automatically.

---

## 🚨 Troubleshooting

### Service won't start
```
❌ CRITICAL ERROR: Missing MongoDB URI
```
→ Check your `.env` file has `MONGO_URI` set correctly.

### ffmpeg fails to start
```
❌ [Thanthi TV] ffmpeg: ...
```
→ Ensure `ffmpeg` is installed and in your system PATH.
→ On Windows: `winget install ffmpeg`
→ On Linux: `sudo apt install ffmpeg`

---

### yt-dlp timeout or stream URL failed
```
❌ [Thanthi TV] yt-dlp failed...
```
→ YouTube changed their player. Update yt-dlp:
→ `pip install -U yt-dlp`

---

### OCR worker times out
```
❌ [Thanthi TV] OCR Worker Timed Out
```
→ First-time OCR initialization can take 2–3 minutes. This is normal. Wait and it will recover.

---

## 📞 Support

For issues, open a GitHub issue or check the MongoDB logs first — they contain the full OCR + AI audit trail.

---

*Built to give Tamil Nadu parents peace of mind — alerts before TV, verified by AI.* 🙏
