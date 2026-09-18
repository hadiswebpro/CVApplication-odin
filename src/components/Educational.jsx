import { useState } from "react";

export default function EducationalInfo({
  schoolName,
  setSchoolName,
  studyTitle,
  setStudyTitle,
  studyDate,
  setStudyDate,
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

    if (field === "schoolName" && !schoolName.trim()) {
      return "School name is required.";
    }

    if (field === "studyTitle" && !studyTitle.trim()) {
      return "Title of study is required.";
    }

    if (field === "studyDate" && !studyDate) {
      return "Date of study is required.";
    }

    return "";
  }

  return (
    <div className="general">
      <h2>Educational Experience</h2>

      <label htmlFor="schoolname">School Name</label>
      <input
        id="schoolname"
        name="schoolName"
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("schoolName") && (
        <p className="error-message">{getError("schoolName")}</p>
      )}

      <label htmlFor="studytitle">Title of Study</label>
      <input
        id="studytitle"
        name="studyTitle"
        type="text"
        value={studyTitle}
        onChange={(e) => setStudyTitle(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("studyTitle") && (
        <p className="error-message">{getError("studyTitle")}</p>
      )}

      <label htmlFor="studydate">Date of Study</label>
      <input
        id="studydate"
        name="studyDate"
        type="date"
        value={studyDate}
        onChange={(e) => setStudyDate(e.target.value)}
        onBlur={handleBlur}
      />
      {getError("studyDate") && (
        <p className="error-message">{getError("studyDate")}</p>
      )}
    </div>
  );
}