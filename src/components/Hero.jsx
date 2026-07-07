import React from "react";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");

    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>Lift</h1>
          <h1>Sweat</h1>
          <h1>Conquer</h1>
        </div>

        <div className="sub-title">
          <p>Begin Your Fitness Journey</p>
          <p>Unlock Your Power</p>
        </div>

        <div className="buttons">
          <button onClick={scrollToPricing}>
            Start Your Journey
          </button>

          <button onClick={scrollToPricing}>
            Discover Your Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
