// Service to handle FloCommerce DropShipping application submissions to Evoc Admin CRM

function getBackendBase() {
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL.replace(/\/+$/, "");
  }
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    return "http://localhost:5001";
  }
  return "https://api.evoclabs.com";
}

/**
 * Submits lead data directly to Evoc Backend (CRM/dropshipping)
 * @param {Object} leadData
 * @returns {Promise<{success: boolean, message: string, data?: any}>}
 */
export async function submitLead(leadData) {
  const timestamp = new Date().toLocaleString("en-IN", { 
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short"
  });

  const rawPhone = (leadData.phone || "").trim();
  const cleanPhone = rawPhone.replace(/^'+/, "").trim();

  // Prepare payload strictly for Evoc Admin CRM (DropShipping)
  const crmPayload = {
    name: (leadData.name || "").trim() || "Unnamed Applicant",
    phone: cleanPhone,
    phoneNumber: cleanPhone,
    formType: "dropshipping-application",
    budget: String(leadData.adSpend || ""),
    dailyBudget: String(leadData.adSpend || ""),
    status: "LEADS",
    metadata: {
      sellerType: leadData.experience || "",
      experience: leadData.experience || "",
      targetRegion: leadData.launchTimeline || "",
      launchTimeline: leadData.launchTimeline || "",
      serviceFee: leadData.serviceFeeAffordable || "",
      serviceFeeAffordable: leadData.serviceFeeAffordable || "",
      adSpend: leadData.adSpend || "",
      dailyBudget: leadData.adSpend || "",
      source: "FloCommerce Landing Page",
      submittedAt: timestamp,
    },
  };

  // 1. Save locally in localStorage backup
  try {
    const existing = JSON.parse(localStorage.getItem("flocom_leads") || "[]");
    existing.unshift({ ...crmPayload, id: Date.now() });
    localStorage.setItem("flocom_leads", JSON.stringify(existing));
  } catch (err) {
    console.error("Local cache warning:", err);
  }

  // 2. Dispatch to Evoc Backend (/api/leads)
  const backendBase = getBackendBase();
  const res = await fetch(`${backendBase}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(crmPayload),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.error || errorBody.message || `Failed to submit application (${res.status})`);
  }

  const result = await res.json();

  return {
    success: true,
    message: "Application recorded successfully!",
    data: result,
  };
}

// Alias for backwards compatibility if referenced
export const submitLeadToGoogleSheet = submitLead;
export const submitFloCommerceLead = submitLead;
