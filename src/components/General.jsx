export default function GeneralInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="general">
      <h2>General Information</h2>

      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}