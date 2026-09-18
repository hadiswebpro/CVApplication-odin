import { useState } from "react";
import GeneralInfo from "./General.jsx";
import EducationalInfo from "./Educational.jsx";
import PracticalInfo from "./Practical.jsx";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainRespo, setMainRespo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    setIsEditing(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleEdit() {
    setIsEditing(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="app">
      <h1>CV Application</h1>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}images/hero.jpg`}
              alt="CV application illustration"
           />
          </div>

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
          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}images/hero.jpg`}
              alt="CV application illustration"
            />
          </div>

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