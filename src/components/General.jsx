import { useState } from "react";

export default function GeneralInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  const [touched, setTouched] = useState({});

  function handleBlur(e) {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  }

  function getError(field) {
    if (!touched[field]) return "";

    if (field === "name" && !name.trim()) {
      return "Full name is required.";
    }

    if (field === "email" && !email.trim()) {
      return "Email is required.";
    }

    if (
      field === "email" &&
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return "Please enter a valid email address.";
    }

    if (field === "phone" && !phone.trim()) {
      return "Phone number is required.";
    }

    if (field === "phone" && !/^\d{11}$/.test(phone)) {
      return "Phone number must contain 11 digits.";
    }

    return "";
  }

  return (
    <div className="general">
      <h2>General Information</h2>

      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("name") && (
        <p className="error-message">{getError("name")}</p>
      )}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("email") && (
        <p className="error-message">{getError("email")}</p>
      )}

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("phone") && (
        <p className="error-message">{getError("phone")}</p>
      )}
    </div>
  );
}