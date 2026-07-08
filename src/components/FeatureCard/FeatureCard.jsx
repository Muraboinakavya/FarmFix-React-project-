import "./Feature.css"
function Features(){
    return(
        <section className="features-section">
            <h2 className="title">Why Choose FarmFix</h2>
            <p className="description">FarmFix empowers farmers by providing an easy-to-use platform for reporting equipment problems and connecting with verified mechanics. With features such as quick service requests, nearby mechanic discovery, and repair history tracking, FarmFix aims to make agricultural equipment maintenance faster, simpler, and more reliable.

            </p>
            <div className="container">
                <div className="feature-card">
                    <h1 className="feature-icon">⚡</h1>

                     <h2>Fast Service</h2>
                     <p>Get quick repair support from nearby mechanics.</p>
                     </div>
                     <div className="feature-card">
                        <h1 className="feature-icon">👨‍🔧</h1>

                          <h2>Trusted Mechanics</h2>
                            <p>Verified mechanics ensure reliable service.</p>
                     </div>
                     <div className="feature-card">
                        <h1 className="feature-icon">📍</h1>
                        <h2>Nearby Support</h2>
                        <p>Locate mechanics available near your village.</p>
                     </div>
                     <div className="feature-card">
                        <h1 className="feature-icon">📜</h1>
                        <h2>Repair History</h2>

<p>View previous repairs, replaced parts, mechanic details, and repair dates for each machine.</p>
                     </div>

</div>
            

        </section>
    );
}
export default Features;