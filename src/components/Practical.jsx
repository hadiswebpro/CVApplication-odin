export default function PracticalInfo({
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  mainRespo,
  setMainRespo,
  fromDate,
  setFromDate,
  untilDate,
  setUntilDate,
}) {
  return (
    <div className="general">
      <h2>Practical Experience</h2>

      <label htmlFor="companyname">Company Name</label>
      <input
        id="companyname"
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <label htmlFor="positiontitle">Position Title</label>
      <input
        id="positiontitle"
        type="text"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
      />

      <label htmlFor="mainrespo">Main Responsibilities</label>
      <textarea
        id="mainrespo"
        value={mainRespo}
        onChange={(e) => setMainRespo(e.target.value)}
      />

      <label htmlFor="fromdate">Date From</label>
      <input
        id="fromdate"
        type="text"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

      <label htmlFor="untildate">Date Until</label>
      <input
        id="untildate"
        type="text"
        value={untilDate}
        onChange={(e) => setUntilDate(e.target.value)}
      />
    </div>
  );
}