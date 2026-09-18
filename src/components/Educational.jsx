export default function EducationalInfo({
  schoolName,
  setSchoolName,
  studyTitle,
  setStudyTitle,
  studyDate,
  setStudyDate,
}) {
  return (
    <div className="general">
      <h2>Educational Experience</h2>

      <label htmlFor="schoolname">School Name</label>
      <input
        id="schoolname"
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />

      <label htmlFor="studytitle">Title of Study</label>
      <input
        id="studytitle"
        type="text"
        value={studyTitle}
        onChange={(e) => setStudyTitle(e.target.value)}
      />

      <label htmlFor="studydate">Date of Study</label>
      <input
        id="studydate"
        type="text"
        value={studyDate}
        onChange={(e) => setStudyDate(e.target.value)}
      />
    </div>
  );
}