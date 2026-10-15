"use server";

import { redirect } from "next/navigation";

export type ContactFormState = {
  error: string | null;
};

export async function submitToGHL(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const monthlyMarketingBudget = String(
    formData.get("monthly_marketing_budget") ?? "",
  ).trim();
  const servicesInterested = String(
    formData.get("which_services_interested") ?? "",
  ).trim();
  const primaryGoal = String(
    formData.get("primary_goal_3_6_months") ?? "",
  ).trim();
  const website = String(formData.get("website") ?? "").trim();

  if (!name || !email || !phone) {
    return { error: "Please enter your name, email address, and phone number." };
  }

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    console.error("GHL credentials are not configured.");
    return { error: "We couldn't submit your request. Please try again later." };
  }

  const [firstName, ...lastNames] = name.split(/\s+/);
  const lastName = lastNames.join(" ");
  const customFields: { key: string; fieldValue: string }[] = [];

  if (monthlyMarketingBudget) {
    customFields.push({
      key: "monthly_marketing_budget",
      fieldValue: monthlyMarketingBudget,
    });
  }
  if (servicesInterested) {
    customFields.push({
      key: "which_services_interested",
      fieldValue: servicesInterested,
    });
  }
  if (primaryGoal) {
    customFields.push({
      key: "what_is_your_primary_goal_for_the_next_36_months",
      fieldValue: primaryGoal,
    });
  }

  const payload: Record<string, unknown> = {
    locationId,
    firstName,
    name,
    email,
    phone,
    ...(lastName ? { lastName } : {}),
    ...(website ? { website } : {}),
    source: "Landing Page Form",
    tags: ["Google Ads", "Digital Marketing"],
    customFields,
  };

  try {
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "v3",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("GHL contact submission failed with status:", response.status);
      return { error: "We couldn't submit your request. Please try again later." };
    }
  } catch (error) {
    console.error("GHL contact submission failed:", error);
    return { error: "We couldn't submit your request. Please try again later." };
  }

  redirect("/thank-you");
}
