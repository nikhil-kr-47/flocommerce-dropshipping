// Service to handle Google Sheet submissions

export const GOOGLE_SHEET_ID = "1JxGf0jLpfcr__pndaD8xv-CD4aXMeHn0Du79zchGwnY";

// Active Google Apps Script Webhook endpoint
export const WEBHOOK_URLS = [
  "https://script.google.com/macros/s/AKfycbx6mhSVC8R5Gn6EHm3OZYzTCADsc3CmzucMcNtjOc9P1dS17QIf4C5cy8fwbXL2TmrI/exec"
];

/**
 * Submits lead data to Google Sheets
 * @param {Object} leadData
 * @returns {Promise<{success: boolean, message: string, data?: any}>}
 */
export async function submitLeadToGoogleSheet(leadData) {
  const timestamp = new Date().toLocaleString("en-IN", { 
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short"
  });

  // Always prepend apostrophe (') so Google Sheets strictly treats the phone number as plain text
  // Without this, Google Sheets interprets any '+91...' or numbers with spaces as an arithmetic formula and throws #ERROR! (Formula parse error)
  const rawPhone = (leadData.phone || "").trim();
  const safePhone = rawPhone ? `'${rawPhone.replace(/^'+/, "")}` : "";

  const payload = {
    timestamp,
    name: leadData.name || "",
    phone: safePhone,
    experience: leadData.experience || "",
    adSpend: leadData.adSpend || "",
    launchTimeline: leadData.launchTimeline || "",
    serviceFeeAffordable: leadData.serviceFeeAffordable || "",
    source: "FloCommerce Landing Page",
  };

  // 1. Always record in localStorage backup
  try {
    const existing = JSON.parse(localStorage.getItem("flocom_leads") || "[]");
    existing.unshift({ ...payload, id: Date.now() });
    localStorage.setItem("flocom_leads", JSON.stringify(existing));
  } catch (err) {
    console.error("Local cache warning:", err);
  }

  // 2. Dispatch to webhooks
  for (const url of WEBHOOK_URLS) {
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.warn("Webhook dispatch notice:", e);
    }
  }

  return {
    success: true,
    message: "Application recorded successfully!",
    data: payload
  };
}
