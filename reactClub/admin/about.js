import React from "react";
import ReactDOM from "react-dom";
import neptune from "../images/aboutPhoto.jpg";

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        show: "about" 
        };
    }
    
    
    // Renders component based on current state and props
    render() {
        return(
        <div className='format'>
            <header id ='header'>
                <h1>About our story </h1>
                <img src={neptune} />
            </header>
            <div className="center">
                <h2>The Cactus & Succulent Society of America</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;The Cactus and Succulent Society of America, Inc. (CSSA) is a national organization that supports about 80 affiliate groups (The San Diego Cactus and Succulent Society has one of the largest memberships).  There are no restrictions on membership.  Members are from many different ethnic, cultural and social backgrounds.  The society has constituents on every continent and many over seas affiliates, making it a truly international organization.</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;The positive direction provided by the CSSA regarding both national and worldwide environmental concerns is recognized as a strong voice for conservation and preservation of threatened and endangered plant life.</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;The CSSA Journal and newsletter is issued bimonthly and recognized internationally. The journal is illustrated with color and black and white photos.  It contains excellent articles, with a balance for both the amateur and serious student of cacti and succulents.  The advertisement section provides sources for plants, books, and supplies available throughout the country.  The newsletter, included with the journal, gives information about what other societies are doing and a calendar of events.  Recently the CSSA has introduced a new publication, Haseltonia, that will serve as a technical yearbook for extensive papers dealing with botanical or horticultural aspects of succulent plants.</p>

                <p>&nbsp;&nbsp;&nbsp;&nbsp;Other important functions sponsored by the CSSA are research, conservation, and environmental protection.  Other activities relate to a world class research library, foreign relations, lecture coordination, international liaison, convention coordination, historian, seed distribution, slide programs, annual show and sales and co-sponsorship of electronic communication via ???cacti_etc??? on the internet.  The CSSA webpage is at <a href="www.cssainc.org"> www.cssainc.org </a> </p>
            </div>
        </div>
        );
    }
}
export default About;