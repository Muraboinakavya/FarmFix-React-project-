import "./Hero.css"
function Hero(){
    return(
        <section>
            <h1 className="Hero-heading">
            Helping Farmers Find Trusted Mechanics</h1>
            <p className="Hero-body">

FarmFix helps farmers connect with nearby mechanics when
their farm equipment breaks down. Farmers can upload
the problem details, and trusted mechanics can respond
quickly to provide repair services at their location.</p>
<button className="issue">Report an Issue</button>
<button className="Mechanic">Become a Mechanic</button>
<div className="farmer-image">placeholder="Farmer"</div>

        </section>
    );
}
export default Hero;