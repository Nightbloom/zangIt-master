import React from "react";
import './about.css'

function AboutPage(){
    const ans1 = "We at zang provide hassle-free cooking for food lovers from across the country. Zang brings you the most authentic recipes curated by our expert chefs. Our goal is to create the Mise-en-place(chopping, peeling) for all dishes, thus reducing your effort. We offer a range of exotic cuisines keeping in mind both your cravings and health."
    const ans2 = "Our commitment is providing healthy and easy to cook meal kits which will meet your cooking desires instantly. Keeping in mind your busy lifestyles we accommodate your love for cooking without actually having to put an hour and a half in preparation. We are dedicated in bringing you the best culinary experience ever."
    const ans3 = "Our mission is to give an opportunity to every person to discover the cook in them. Now anyone can become a cook in less than 30 minutes. Health is important to us and so we take care of your health needs by compiling the best and fresh ingredients with utmost care, and delivering it to your doorsteps in an ecofriendly packaging."

    const mediaQuery = window.matchMedia('(max-width: 480px)')
    return(
        <>
        <h1 className="aboutUsH1"> About Us</h1>
        {
            mediaQuery.matches
            ?(
                <div className="Info" style={{height:"700px", width:"390px", marginRight:"20%"}}>
                    <div className="QuesDiv">
                        <h2 className="Ques">Who are we?</h2>
                        <p className="Ans">{ans1}</p>
                    </div>
                    <div className="QuesDiv">
                        <h2 className="Ques2">Our Commitment</h2>
                        <p className="Ans2">{ans2}</p>
                    </div>
                    <div className="QuesDiv">
                        <h2 className="Ques">Our mission and values</h2>
                        <p className="Ans">{ans3}</p>
                    </div>
                </div>
            )
            :(
                <div className="InfoPc" style={{height:"90%", width:"100%", marginTop:"-10%"}}>
                    <div className="QuesDivPc">
                        <h2 className="QuesPc">Who are we?</h2>
                        <p className="AnsPc">{ans1}</p>
                    </div>
                    <div className="QuesDivPc">
                        <h2 className="QuesPc">Our Commitment</h2>
                        <p className="AnsPc">{ans2}</p>
                    </div>
                    <div className="QuesDivPc">
                        <h2 className="QuesPc">Our mission and values</h2>
                        <p className="AnsPc">{ans3}</p>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default AboutPage;