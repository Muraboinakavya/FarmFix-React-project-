import "./ReportIssue.css";

function ReportIssue() {
  return (
    <section className="report-page">

      <div className="report-container">

        <h1>Report Farm Equipment Issue</h1>
        <p>
          Fill in the details below. Our trusted mechanics will contact you shortly.
        </p>

        <form className="report-form">

          <input
            type="text"
            placeholder="Farmer Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Village / Location"
          />

          <select>
            <option>Select Equipment</option>
            <option>Tractor</option>
            <option>Harvester</option>
            <option>Water Pump</option>
            <option>Sprayer</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe the problem..."
          ></textarea>

          <input type="file" />

          <button type="submit">
            Submit Report
          </button>

        </form>

      </div>

    </section>
  );
}

export default ReportIssue;