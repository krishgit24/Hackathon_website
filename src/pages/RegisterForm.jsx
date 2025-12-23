import React, { useState } from "react";
import kshitij_gpay from "../Assets/kshitij_gpay.jpeg";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    teamName: "",
    leaderName: "",
    leaderBranch: "",
    leaderYear: "",
    leaderClass: "",
    leaderWhatsapp: "",
    leaderIEEEMember: false,

    member2Name: "",
    member2Branch: "",
    member2Year: "",
    member2Class: "",
    member2IEEEMember: false,

    member3Name: "",
    member3Branch: "",
    member3Year: "",
    member3Class: "",
    member3IEEEMember: false,

    member4Name: "",
    member4Branch: "",
    member4Year: "",
    member4Class: "",
    member4IEEEMember: false,

    transactionId: "",
  });

  const [screenshot, setScreenshot] = useState(null);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby8HOSVFLvAUaujpNEzlLqFNqmAIBAnCC9AR-STu_-RGuumd2EIZn-53qCVziHQMXb6YA/exec";

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const calculateFee = () => {
    let fee = 200;
    if (form.leaderIEEEMember) fee -= 50;
    if (form.member2IEEEMember) fee -= 50;
    if (form.member3IEEEMember) fee -= 50;
    if (form.member4IEEEMember) fee -= 50;
    return fee;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggle = (fieldName) => {
    setForm({ ...form, [fieldName]: !form[fieldName] });
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setScreenshot(file || null);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    let screenshotUrl = "";

    // Step 1: upload screenshot if exists
    if (screenshot) {
      const base64Image = await fileToBase64(screenshot);

      // Remove prefix like "data:image/png;base64,"
      const base64Data = base64Image.split(",")[1];

      const uploadPayload = new FormData();
      uploadPayload.append("action", "upload");
      uploadPayload.append("fileData", base64Data);
      uploadPayload.append("fileName", screenshot.name);
      uploadPayload.append("mimeType", screenshot.type);
      uploadPayload.append("teamName", form.teamName);

      const uploadResp = await fetch(SCRIPT_URL, {
        method: "POST",
        body: uploadPayload,
      });

      const uploadJson = await uploadResp.json();

      if (uploadJson.status === "success") {
        screenshotUrl = uploadJson.url;
      } else {
        throw new Error("Screenshot upload failed");
      }
    }

    // Step 2: submit form data with screenshot URL
    const formPayload = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    formPayload.append("screenshotUrl", screenshotUrl);
    formPayload.append("totalFee", calculateFee());

    const formResp = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formPayload,
    });

    const formJson = await formResp.json();

    if (formJson.status === "success") {
      setSuccess(true);
    } else {
      throw new Error(formJson.message || "Form submission failed");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }

  setLoading(false);
};


  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020024, #0f3460, #2c1056, #6c0e5e)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 16px",
    },
    card: {
      width: "100%",
      maxWidth: "900px",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "6px solid rgba(255, 255, 255, 0.18)",
      borderRadius: "26px",
      padding: "40px",
      boxShadow:
        "0 0 60px rgba(34,211,238,0.25), inset 0 0 20px rgba(255,255,255,0.04)",
    },
    title: {
      fontSize: "48px",
      fontWeight: "900",
      textAlign: "center",
      marginBottom: "12px",
      background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.5px",
    },
    subtitle: {
      color: "#9ca3af",
      textAlign: "center",
      marginBottom: "36px",
      fontSize: "16px",
    },
    sectionTitle: {
      fontSize: "18px",
      margin: "28px 0 14px",
      fontWeight: "600",
      background: "linear-gradient(90deg, #22d3ee, #a855f7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.18)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
      color: "#fff",
      outline: "none",
      fontSize: "15px",
      boxShadow: "inset 0 0 8px rgba(255,255,255,0.05)",
    },
    button: {
      width: "100%",
      padding: "16px",
      fontSize: "17px",
      fontWeight: "700",
      borderRadius: "16px",
      border: "none",
      cursor: "pointer",
      background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
      color: "#fff",
      marginTop: "36px",
      boxShadow: "0 0 30px rgba(168,85,247,0.5)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    success: { textAlign: "center", color: "#fff" },
    check: {
      fontSize: "72px",
      marginBottom: "18px",
      background: "linear-gradient(90deg, #22d3ee, #a855f7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    paymentRow: { display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "24px", alignItems: "flex-start" },
    uploadBox: { marginTop: "12px", padding: "14px 16px", borderRadius: "14px", border: "1px dashed rgba(255,255,255,0.26)", background: "rgba(15,23,42,0.7)" },
    uploadLabel: { display: "flex", flexDirection: "column", gap: "4px", marginBottom: "10px", cursor: "pointer", color: "#e5e7eb", fontSize: "14px" },
    fileInput: { width: "100%", color: "#e5e7eb", fontSize: "14px", marginBottom: "6px" },
    uploadInfo: { fontSize: "12px", color: "#9ca3af" },
    qrBox: { flex: "0 0 220px", maxWidth: "260px", padding: "14px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.16)", background: "rgba(15,23,42,0.9)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
    qrTitle: { fontSize: "14px", fontWeight: 600, color: "#e5e7eb" },
    qrImageWrapper: { width: "180px", height: "180px", borderRadius: "12px", overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" },
    qrImage: { width: "100%", height: "100%", objectFit: "contain" },
    qrNote: { fontSize: "11px", color: "#9ca3af", textAlign: "center", marginTop: "4px" },
    memberHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" },
    toggleContainer: { display: "flex", alignItems: "center", gap: "10px" },
    toggleLabel: { fontSize: "13px", color: "#e5e7eb", fontWeight: "500" },
    toggleSwitch: { position: "relative", width: "50px", height: "26px", background: "rgba(255,255,255,0.15)", borderRadius: "13px", cursor: "pointer", transition: "background 0.3s ease", border: "1px solid rgba(255,255,255,0.2)" },
    toggleSwitchActive: { background: "linear-gradient(90deg, #22d3ee, #a855f7)" },
    toggleKnob: { position: "absolute", top: "2px", left: "2px", width: "20px", height: "20px", background: "#fff", borderRadius: "50%", transition: "transform 0.3s ease", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" },
    toggleKnobActive: { transform: "translateX(24px)" },
    feeBox: { marginTop: "20px", padding: "16px", borderRadius: "12px", background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)" },
    feeText: { fontSize: "16px", color: "#e5e7eb", fontWeight: "600", textAlign: "center" },
    feeAmount: { fontSize: "24px", fontWeight: "800", background: "linear-gradient(90deg, #22d3ee, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  };

  const qrPlaceholder = kshitij_gpay;

  const ToggleSwitch = ({ checked, onChange, label }) => (
    <div style={styles.toggleContainer}>
      <span style={styles.toggleLabel}>{label}</span>
      <div
        style={{ ...styles.toggleSwitch, ...(checked ? styles.toggleSwitchActive : {}) }}
        onClick={onChange}
      >
        <div style={{ ...styles.toggleKnob, ...(checked ? styles.toggleKnobActive : {}) }} />
      </div>
    </div>
  );

  if (success) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.success}>
            <div style={styles.check}>✓</div>
            <h1 style={styles.title}>Registration Successful</h1>
            <p style={styles.subtitle}>Your team has been registered for Arcane 2026.</p>
            <p style={{ color: "#9ca3af" }}>Further details will be shared via WhatsApp.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Hackathon Registration</h1>
        <p style={styles.subtitle}>Arcane 2026 · Team Registration</p>

        {/* ========== TEAM DETAILS ========== */}
        <div style={styles.sectionTitle}>Team Details</div>
        <input style={styles.input} name="teamName" placeholder="Team Name *" required onChange={handleChange} />
        <br /><br />

        {/* Leader */}
        <div style={styles.memberHeader}>
          <div style={styles.sectionTitle}>Team Leader</div>
          <ToggleSwitch checked={form.leaderIEEEMember} onChange={() => handleToggle("leaderIEEEMember")} label="IEEE VESIT Member" />
        </div>
        <input style={styles.input} name="leaderName" placeholder="Leader Name *" required onChange={handleChange} />
        <br /><br />
        <input style={styles.input} name="leaderWhatsapp" placeholder="WhatsApp Number *" value={form.leaderWhatsapp} onChange={(e) => {
          let val = e.target.value.replace(/\D/g, "");
          if (val.length <= 10) setForm({ ...form, leaderWhatsapp: val });
        }} inputMode="numeric" maxLength={10} required />
        <div style={styles.sectionTitle}>Leader Academic Details</div>
        <div style={styles.grid2}>
          <input style={styles.input} name="leaderBranch" placeholder="Branch *" required onChange={handleChange} />
          <input style={styles.input} name="leaderYear" placeholder="Year *" required onChange={handleChange} />
          <input style={styles.input} name="leaderClass" placeholder="Class *" required onChange={handleChange} />
        </div>

        {/* Member 2 */}
        <div style={styles.memberHeader}>
          <div style={styles.sectionTitle}>Team Member 2</div>
          <ToggleSwitch checked={form.member2IEEEMember} onChange={() => handleToggle("member2IEEEMember")} label="IEEE VESIT Member" />
        </div>
        <input style={styles.input} name="member2Name" placeholder="Name *" required onChange={handleChange} />
        <br /><br />
        <div style={styles.grid2}>
          <input style={styles.input} name="member2Branch" placeholder="Branch *" required onChange={handleChange} />
          <input style={styles.input} name="member2Year" placeholder="Year *" required onChange={handleChange} />
          <input style={styles.input} name="member2Class" placeholder="Class *" required onChange={handleChange} />
        </div>

        {/* Member 3 */}
        <div style={styles.memberHeader}>
          <div style={{ fontSize: "16px", color: "#e5e7eb", fontWeight: "500" }}>Team Member 3 (Optional)</div>
          <ToggleSwitch checked={form.member3IEEEMember} onChange={() => handleToggle("member3IEEEMember")} label="IEEE VESIT Member" />
        </div>
        <input style={styles.input} name="member3Name" placeholder="Team Member 3 Name (Optional)" onChange={handleChange} />
        <br /><br />
        <div style={styles.grid2}>
          <input style={styles.input} name="member3Branch" placeholder="Branch" onChange={handleChange} />
          <input style={styles.input} name="member3Year" placeholder="Year" onChange={handleChange} />
          <input style={styles.input} name="member3Class" placeholder="Class" onChange={handleChange} />
        </div>

        {/* Member 4 */}
        <div style={styles.memberHeader}>
          <div style={{ fontSize: "16px", color: "#e5e7eb", fontWeight: "500" }}>Team Member 4 (Optional)</div>
          <ToggleSwitch checked={form.member4IEEEMember} onChange={() => handleToggle("member4IEEEMember")} label="IEEE VESIT Member" />
        </div>
        <input style={styles.input} name="member4Name" placeholder="Team Member 4 Name (Optional)" onChange={handleChange} />
        <br /><br />
        <div style={styles.grid2}>
          <input style={styles.input} name="member4Branch" placeholder="Branch" onChange={handleChange} />
          <input style={styles.input} name="member4Year" placeholder="Year" onChange={handleChange} />
          <input style={styles.input} name="member4Class" placeholder="Class" onChange={handleChange} />
        </div>

        {/* Fee */}
        <div style={styles.feeBox}>
          <div style={styles.feeText}>
            Total Registration Fee: <span style={styles.feeAmount}>₹{calculateFee()}</span>
          </div>
          <div style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "8px" }}>
            ₹50 per non-IEEE member · IEEE VESIT members register free
          </div>
        </div>

        {/* Payment */}
        <div style={styles.sectionTitle}>Payment & Verification</div>
        <div style={styles.paymentRow}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <input style={styles.input} name="transactionId" placeholder="Transaction / UPI Reference ID *" required onChange={handleChange} />
            <div style={styles.uploadBox}>
              <label htmlFor="screenshot" style={styles.uploadLabel}>
                <span style={{ fontWeight: 600 }}>Upload payment screenshot (JPG / PNG)</span>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>Image will be uploaded to Google Drive and its link stored in the sheet.</span>
              </label>
              <input id="screenshot" type="file" accept="image/*" style={styles.fileInput} onChange={handleFileChange} />
              <div style={styles.uploadInfo}>
                {screenshot ? <span>Selected file: {screenshot.name}</span> : <span>No file selected yet</span>}
              </div>
            </div>
          </div>

          <div style={styles.qrBox}>
            <div style={styles.qrTitle}>Scan &amp; Pay (Sample)</div>
            <div style={styles.qrImageWrapper}>
              <img src={qrPlaceholder} alt="Payment QR placeholder" style={styles.qrImage} />
            </div>
            <p style={styles.qrNote}>Use this QR placeholder for now. After paying, upload the screenshot on the left.</p>
          </div>
        </div>

        <button style={styles.button} disabled={loading}>
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}