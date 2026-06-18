import { NextResponse } from "next/server";

const destinationEmail = "info@mrbase1.com.ng";
const projectTypes = ["web", "mobile", "prototype", "product"];
const minSubmissionMs = 3_000;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const recentSubmissions = new Map<string, number[]>();

type ContactBody = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  projectType?: unknown;
  submittedAt?: unknown;
  website?: unknown;
};

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function trim(value: unknown) {
  return isString(value) ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character] ?? character;
  });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const cloudflareIp = request.headers.get("cf-connecting-ip");

  return (
    forwardedFor?.split(",")[0]?.trim() ||
    cloudflareIp ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string, now: number) {
  const submissions = recentSubmissions.get(ip) ?? [];
  const recent = submissions.filter((timestamp) => now - timestamp < rateLimitWindowMs);

  recentSubmissions.set(ip, recent);

  return recent.length >= rateLimitMaxRequests;
}

export async function POST(request: Request) {
  const now = Date.now();
  const ip = getClientIp(request);

  if (isRateLimited(ip, now)) {
    return NextResponse.json({ message: "Please try again later." }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as ContactBody | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  const website = trim(body.website);
  const submittedAt = Number(body.submittedAt);
  const name = trim(body.name);
  const email = trim(body.email);
  const projectType = trim(body.projectType);
  const message = trim(body.message);

  if (website) {
    return NextResponse.json({ message: "Submission rejected." }, { status: 400 });
  }

  if (
    !Number.isFinite(submittedAt) ||
    now - submittedAt < minSubmissionMs ||
    submittedAt > now
  ) {
    return NextResponse.json({ message: "Submission rejected." }, { status: 400 });
  }

  if (
    name.length < 2 ||
    name.length > 120 ||
    !isEmail(email) ||
    email.length > 254 ||
    !projectTypes.includes(projectType) ||
    message.length < 20 ||
    message.length > 3000
  ) {
    return NextResponse.json({ message: "Check the form and try again." }, { status: 400 });
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? destinationEmail;
  const senderName = process.env.BREVO_SENDER_NAME ?? "Base1 Media & Tech";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message);

  const emailBody = {
    htmlContent: `
      <h2>New project enquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Project type:</strong> ${safeProjectType}</p>
      <h3>Project brief</h3>
      <p>${safeMessage.replace(/\n/g, "<br />")}</p>
    `,
    replyTo: {
      email,
      name,
    },
    sender: {
      email: senderEmail,
      name: senderName,
    },
    subject: `New ${projectType} enquiry from ${name}`,
    textContent: `New project enquiry\n\nName: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nProject brief:\n${message}`,
    to: [
      {
        email: destinationEmail,
        name: "Base1 Media & Tech",
      },
    ],
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      body: JSON.stringify(emailBody),
      headers: {
        "api-key": process.env.BREVO_API_KEY ?? "",
        "content-type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Brevo request failed with ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Unable to send message." }, { status: 500 });
  }

  return NextResponse.json({ message: "Message sent." }, { status: 200 });
}
