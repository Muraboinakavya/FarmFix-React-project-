import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">

      <h1>Welcome to FarmFix Dashboard 👋</h1>

      <p>
        Manage your farm equipment requests and connect with trusted mechanics.
      </p>

      <div className="dashboard-cards">

        <div className="dash-card">
          <h2>25</h2>
          <p>Total Reports</p>
        </div>

        <div className="dash-card">
          <h2>8</h2>
          <p>Mechanics Available</p>
        </div>

        <div className="dash-card">
          <h2>12</h2>
          <p>Completed Repairs</p>
        </div>

        <div className="dash-card">
          <h2>5</h2>
          <p>Pending Requests</p>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;