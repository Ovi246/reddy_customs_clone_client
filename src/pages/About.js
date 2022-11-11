import React from "react";

const About = () => {
  return (
    <div className="mb-32">
      <h1 className="text-[8vmin] text-center tracking-custom font-semibold mb-32 leading-[1.2]">
        VEHICLE CUSTOMIZATION WITH
        <br />
        <span className="text-mygold">REDDY CUSTOMS</span>
      </h1>
      <p className="text-4xl font-semibold">
        Remodelling company{" "}
        <span className="text-mygold">
          with an experience of over two decades
        </span>
      </p>
      <p className="whitespace-pre-line opacity-50">
        {"\n"}
        {"\n"}
        Reddy Customs is the best-in-class automobile personalization, designing
        and custom remoulding company. We expertise in vehicle customization for
        movie stars, businesses & automobile enthusiasts.
        {"\n"}
        {"\n"}
        With our highly experienced team of experts, we build and innovate
        vehicles of superior design, backed with cutting-edge technology in our
        ISO 9001:2015 certified facility.
        {"\n"}
        {"\n"}
        Our Vision is "To provide bespoke design to suit the style and comfort
        along with specific design requirements of our customer".
      </p>
    </div>
  );
};

export default About;
