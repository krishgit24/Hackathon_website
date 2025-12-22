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
      backgroundColor: "#020203ff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 16px",
    },
    card: {
      width: "100%",
      maxWidth: "900px",
      background: "rgba(199, 199, 199, 0.05)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "22px",
      padding: "32px",
      boxShadow: "0 0 50px rgba(0,255,255,0.15)",
    },
    title: {
      color: "#fff",
      fontSize: "45px",
      fontWeight: "900",
      textAlign: "center",
      marginBottom: "10px",
    },
    subtitle: {
      color: "#9ca3af",
      textAlign: "center",
      marginBottom: "30px",
    },
    sectionTitle: {
      color: "#22d3ee",
      fontSize: "18px",
      margin: "24px 0 12px",
      fontWeight: "600",
    },
    grid2: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.15)",
      backgroundColor: "rgba(255,255,255,0.08)",
      color: "#fff",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "15px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      background:
        "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
      color: "#fff",
      marginTop: "30px",
    },
    success: {
      textAlign: "center",
      color: "#fff",
    },
    check: {
      fontSize: "70px",
      color: "#22d3ee",
      marginBottom: "16px",
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
