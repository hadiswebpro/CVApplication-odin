import { useState } from "react";
import GeneralInfo from "./General.jsx";
import EducationalInfo from "./Educational.jsx";
import PracticalInfo from "./Practical.jsx";

export default function App() {
  // General Information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Educational Experience
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");

  // Practical Experience
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainRespo, setMainRespo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  // Determines whether we are editing or viewing the CV
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="app">
      <h1>CV Application</h1>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <GeneralInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />

          <EducationalInfo
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            studyTitle={studyTitle}
            setStudyTitle={setStudyTitle}
            studyDate={studyDate}
            setStudyDate={setStudyDate}
          />

          <PracticalInfo
            companyName={companyName}
            setCompanyName={setCompanyName}
            positionTitle={positionTitle}
            setPositionTitle={setPositionTitle}
            mainRespo={mainRespo}
            setMainRespo={setMainRespo}
            fromDate={fromDate}
            setFromDate={setFromDate}
            untilDate={untilDate}
            setUntilDate={setUntilDate}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="cv">
          <section>
            <h2>General Information</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </section>

          <section>
            <h2>Educational Experience</h2>
            <p>{schoolName}</p>
            <p>{studyTitle}</p>
            <p>{studyDate}</p>
          </section>

          <section>
            <h2>Practical Experience</h2>
            <p>{companyName}</p>
            <p>{positionTitle}</p>
            <p>{mainRespo}</p>
            <p>
              {fromDate} - {untilDate}
            </p>
          </section>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
