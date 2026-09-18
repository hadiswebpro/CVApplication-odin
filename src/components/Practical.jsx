import { useState } from "react";

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
  const [touched, setTouched] = useState({});

  function handleBlur(e) {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  }

  function getError(field) {
    if (!touched[field]) return "";

    if (field === "companyName" && !companyName.trim()) {
      return "Company name is required.";
    }

    if (field === "positionTitle" && !positionTitle.trim()) {
      return "Position title is required.";
    }

    if (field === "mainRespo" && !mainRespo.trim()) {
      return "Main responsibilities are required.";
    }

    if (field === "fromDate" && !fromDate) {
      return "Start date is required.";
    }

    if (field === "untilDate" && !untilDate) {
      return "End date is required.";
    }

    if (
      field === "untilDate" &&
      fromDate &&
      untilDate &&
      untilDate < fromDate
    ) {
      return "End date cannot be before start date.";
    }

    return "";
  }

  return (
    <div className="general">
      <h2>Practical Experience</h2>

      <label htmlFor="companyname">Company Name</label>
      <input
        id="companyname"
        name="companyName"
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("companyName") && (
        <p className="error-message">{getError("companyName")}</p>
      )}

      <label htmlFor="positiontitle">Position Title</label>
      <input
        id="positiontitle"
        name="positionTitle"
        type="text"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("positionTitle") && (
        <p className="error-message">{getError("positionTitle")}</p>
      )}

      <label htmlFor="mainrespo">Main Responsibilities</label>
      <textarea
        id="mainrespo"
        name="mainRespo"
        value={mainRespo}
        onChange={(e) => setMainRespo(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("mainRespo") && (
        <p className="error-message">{getError("mainRespo")}</p>
      )}

      <label htmlFor="fromdate">Date From</label>
      <input
        id="fromdate"
        name="fromDate"
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("fromDate") && (
        <p className="error-message">{getError("fromDate")}</p>
      )}

      <label htmlFor="untildate">Date Until</label>
      <input
        id="untildate"
        name="untilDate"
        type="date"
        value={untilDate}
        onChange={(e) => setUntilDate(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("untilDate") && (
        <p className="error-message">{getError("untilDate")}</p>
      )}
    </div>
  );
}