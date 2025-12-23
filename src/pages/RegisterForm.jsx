import React, { useState } from "react";

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

  member2Name: "",
  member2Branch: "",
  member2Year: "",
  member2Class: "",

  member3Name: "",
  member3Branch: "",
  member3Year: "",
  member3Class: "",

  member4Name: "",
  member4Branch: "",
  member4Year: "",
  member4Class: "",
});


  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwjguY3BzzMfsbkgDGGDiN4sQPrdjtj4ESni1NcxMgvfzpm5IxfGjsnneZcdKB3D_sBrQ/exec";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   try {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  setSuccess(true); // assume success if no error
} catch (err) {
  alert("Submission failed. Please try again.");
}


    setLoading(false);
  };

  const styles = {
  page: {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #020024, #0f3460, #2c1056ff, #6c0e5eff)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px 16px",
},

  card: {
    width: "100%",
    maxWidth: "900px",
    // background:
    //   "linear-gradient(145deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.02))",
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
    background:
      "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
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
    background:
      "linear-gradient(90deg, #22d3ee, #a855f7)",
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
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
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
    background:
      "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
    color: "#fff",
    marginTop: "36px",
    boxShadow:
      "0 0 30px rgba(168,85,247,0.5)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  success: {
    textAlign: "center",
    color: "#fff",
  },

  check: {
    fontSize: "72px",
    marginBottom: "18px",
    background:
      "linear-gradient(90deg, #22d3ee, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};


  if (success) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.success}>
            <div style={styles.check}>✓</div>
            <h1 style={styles.title}>Registration Successful</h1>
            <p style={styles.subtitle}>
              Your team has been registered for Arcane 2026.
            </p>
            <p style={{ color: "#9ca3af" }}>
              Further details will be shared via WhatsApp.
            </p>
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

        <div style={styles.sectionTitle}>Team Details</div>
       <input
  style={styles.input}
  name="teamName"
  placeholder="Team Name *"
  required
  onChange={handleChange}
/>
<br /><br />

<input
  style={styles.input}
  name="leaderName"
  placeholder="Leader Name *"
  required
  onChange={handleChange}
/>
<br /><br />

<input
  style={styles.input}
  name="leaderWhatsapp"
  placeholder="WhatsApp Number *"
  value={form.leaderWhatsapp}
  onChange={(e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length <= 10) {
      setForm({ ...form, leaderWhatsapp: val });
    }
  }}
  inputMode="numeric"
  maxLength={10}
  required
/>

<div style={styles.sectionTitle}>Leader Academic Details</div>
<div style={styles.grid2}>
  <input
    style={styles.input}
    name="leaderBranch"
    placeholder="Branch *"
    required
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="leaderYear"
    placeholder="Year *"
    required
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="leaderClass"
    placeholder="Class *"
    required
    onChange={handleChange}
  />
</div>

<div style={styles.sectionTitle}>Team Member 2</div>
<input
  style={styles.input}
  name="member2Name"
  placeholder="Name *"
  required
  onChange={handleChange}
/>
<br /><br />

<div style={styles.grid2}>
  <input
    style={styles.input}
    name="member2Branch"
    placeholder="Branch *"
    required
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="member2Year"
    placeholder="Year *"
    required
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="member2Class"
    placeholder="Class *"
    required
    onChange={handleChange}
  />
</div>


      <div style={styles.sectionTitle}>Additional Members</div>

{/* Team Member 3 */}
<input
  style={styles.input}
  name="member3Name"
  placeholder="Team Member 3 Name (Optional)"
  onChange={handleChange}
/>
<br /><br />

<div style={styles.grid2}>
  <input
    style={styles.input}
    name="member3Branch"
    placeholder="Branch"
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="member3Year"
    placeholder="Year"
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="member3Class"
    placeholder="Class"
    onChange={handleChange}
  />
</div>

<br /><br />

{/* Team Member 4 */}
<input
  style={styles.input}
  name="member4Name"
  placeholder="Team Member 4 Name (Optional)"
  onChange={handleChange}
/>
<br /><br />

<div style={styles.grid2}>
  <input
    style={styles.input}
    name="member4Branch"
    placeholder="Branch"
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="member4Year"
    placeholder="Year"
    onChange={handleChange}
  />
  <input
    style={styles.input}
    name="member4Class"
    placeholder="Class"
    onChange={handleChange}
  />
</div>

        <button style={styles.button} disabled={loading}>
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </div>
  );
}
