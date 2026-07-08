import "./HowItworks.css"
function HowItworks(){
    return(
        <section className="How-It-Works-Section">
            <h2 className="title">How FarmFix Works</h2>
            <div className="container">
                <div className="card">
                    <h2 className="heading">Report Issue</h2>
                    <p>Upload the Equipment photo and describe the problem.</p>
                    </div>
                    <div className="card">
                        <h2>Mechanic Accepts</h2>
                        <p>Nearby meachanic receive the request and contact the farmer.</p>
                    </div>
                    <div className="card">
                        <h2>Repair Completed</h2>
                        <p>The mechanic visits the farm and repairs the equipment.</p>
                    </div>

            </div>
        </section>
    );
}
export default HowItworks;