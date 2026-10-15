import { ArrowLeft, Check, Clock3, ShieldCheck, Sparkles } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "48px 16px",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(66,133,244,.13), transparent 55%), #f7f9fc",
      }}
    >
      <section
        aria-labelledby="thank-you-title"
        style={{
          width: "min(100%, 680px)",
          padding: "clamp(28px, 6vw, 56px)",
          border: "1px solid #e3eaf5",
          borderRadius: 24,
          background: "rgba(255,255,255,.96)",
          boxShadow: "0 24px 70px rgba(26, 67, 125, .12)",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 72,
            height: 72,
            display: "grid",
            placeItems: "center",
            margin: "0 auto 24px",
            borderRadius: "50%",
            color: "#fff",
            background: "linear-gradient(135deg, #4285f4, #1a73e8)",
            boxShadow: "0 10px 24px rgba(66,133,244,.28)",
          }}
        >
          <Check size={34} strokeWidth={3} />
        </div>

        <p
          style={{
            margin: "0 0 12px",
            color: "#1a73e8",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "1.8px",
          }}
        >
          REQUEST RECEIVED
        </p>

        <h1
          id="thank-you-title"
          style={{
            margin: 0,
            color: "#202124",
            fontFamily: "Manrope, sans-serif",
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: "-1.5px",
          }}
        >
          Thanks for reaching out!
        </h1>

        <p
          style={{
            maxWidth: 470,
            margin: "18px auto 30px",
            color: "#5f6877",
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          Your growth audit request is in. Our team will review your goals and
          get in touch shortly.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "16px 18px",
            marginBottom: 28,
            border: "1px solid #e6edf7",
            borderRadius: 14,
            background: "#f8faff",
            textAlign: "left",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 42,
              height: 42,
              flex: "0 0 42px",
              display: "grid",
              placeItems: "center",
              borderRadius: 12,
              color: "#1a73e8",
              background: "#e8f0fe",
            }}
          >
            <Clock3 size={21} />
          </span>
          <span>
            <strong style={{ display: "block", color: "#202124", fontSize: 14 }}>
              What happens next?
            </strong>
            <span style={{ color: "#687386", fontSize: 13 }}>
              Keep an eye on your phone and email for our reply.
            </span>
          </span>
        </div>

        <a
          className="button-blue"
          href="/"
          style={{ minHeight: 48, paddingInline: 22, fontSize: 14 }}
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to home
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 7,
            marginTop: 26,
            color: "#8490a2",
            fontSize: 12,
          }}
        >
          <ShieldCheck size={15} aria-hidden="true" />
          <span>Your information is kept private.</span>
          <Sparkles size={14} aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
