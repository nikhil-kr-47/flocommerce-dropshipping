# FLOCOMMERCE Dropshipping in the Gulf — Web Application

Modern, high-converting landing page and application funnel for **FLOCOMMERCE & Zambeel GCC Dropshipping**, built from the official proposal specification and client onboarding requirements.

## 🚀 Key Features

1. **High-Converting Hero Section**:
   - Collects **Full Name** and **WhatsApp Phone Number**.
   - Interactive **Get Started** button validating details and launching the qualification flow.
   - Live Proposal statistics: AED 146K sales, 897 monthly orders, 7,592 Zambeel orders, 74% delivery rate.

2. **Qualification Modal / 4-Question Questionnaire**:
   - Matches the exact qualification questions and options:
     - **Dropshipping Experience**: Complete Beginner / Tried before, but no consistent sales / Already dropshipping in India, High RTO / Already selling in Gulf.
     - **Daily Meta Ad Spend**: 1600 / 2000 / 3000 / 5000+.
     - **Launch Timeline**: Immediately (this festive season) / Within 1 week / Not Interested.
     - **Service Fee Affordability**: Yes, I can afford / Sorry its expensive (₹20K Q4 offer).
   - Dual view modes: Step-by-Step interactive cards & All-in-One dropdown form.

3. **Google Sheets Sync**:
   - Target Sheet: [FLOCOM DROPSHEET WEBSITE](https://docs.google.com/spreadsheets/d/1JxGf0jLpfcr__pndaD8xv-CD4aXMeHn0Du79zchGwnY/edit?usp=sharing)
   - Real-time webhook integration via Google Apps Script.
   - Built-in local cache and one-click script setup modal.

4. **10-Page Proposal Faithfully Implemented**:
   - **01 Results & Proofs**: Live unedited Shopify analytics (AED 146K sales, ₹38.3L INR, Tranexamic skin cream with 1,392% growth) + Zambeel seller dashboard + WhatsApp client groups.
   - **02 Why The Gulf**: Indian dropshipping pain points vs GCC dropshipping 5x margin advantages + Interactive ROI profit calculator.
   - **03 The Economics**: Transparent unit breakdown (170 AED selling price, 85 AED product, 20 AED delivery = 65 AED / ₹1,701 profit) + Live simulator.
   - **04 Delivery & Payouts**: 7 GCC countries delivery and return table + Friday invoice / Monday bank remittance cycle.
   - **05 Setup & Pricing**: 50% Off Q4 Offer (₹20,000 setup, ₹15,000 monthly).
   - **06 What's Covered**: Complete 7-pillar breakdown.
   - **07 Bonus**: Zambeel Gold & Diamond package ($299 value included free).

---

## 🛠️ Getting Started

### 1. Install & Run Locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Connect Google Sheets in 60 Seconds
1. Open the [Google Sheet](https://docs.google.com/spreadsheets/d/1JxGf0jLpfcr__pndaD8xv-CD4aXMeHn0Du79zchGwnY/edit?usp=sharing).
2. Go to **Extensions** → **Apps Script**.
3. Copy the script from `src/services/sheetService.js` (or click **Sheet Setup** in the website header).
4. Click **Deploy** → **New deployment** → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy your Web App URL and set it in `.env` as:
   ```env
   VITE_GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
   ```
   Or paste it into the **Sheet Setup** dialog on the site.

---

## 📦 Build for Production
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.
