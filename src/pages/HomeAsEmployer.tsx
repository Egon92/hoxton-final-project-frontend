import { HeaderAsEmployer } from "../components/HeaderAsEmployer";
import "../styling/homeAsEmployer.css";
import { useEffect, useState } from "react";



export function HomeAsEmployer() {
  const [employees, setEmployees] = useState<User[]>([])

  useEffect(() => {
    fetch(`http://localhost:4000/employees`)
      .then(resp => resp.json())
      .then(data => setEmployees(data))
  }, [])

  return (

    <section className="home-wrapper">
      <HeaderAsEmployer />
      <main className="home-main-wrapper">
        <div className="left-home-wrapper">
          <div className="filter-by-wrapper">
            <span>Filter by:</span>
          </div>
        </div>
        <div className="right-home-wrapper">
          {employees.map(employee => {
            return (
              <div className="job-wrapper">
                <div className="job-title-days-wrapper">
                  <img
                    id="profile-pic"
                    src={employee.avatar}
                    alt="profile-pic"
                  />
                  <div className="row_section">
                    <span id="days-left-wrapper">{employee.full_name}
                    </span>
                  </div>
                </div>
                <div className="job-description-wrapper">
                  <span id="job-description">{employee.bio}</span>
                  <span className="phone-wrapper">{employee.phone}</span>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </section>
  );
}
