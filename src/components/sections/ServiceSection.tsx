import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/activity_icon.png",
      title: "Graphic Design",
      description:
        "Expert graphic design services creating visually compelling and impactful designs for branding, marketing, and digital media.",
    },
    {
      id: 1,
      iconUrl: "/images/video_icon.png",
      title: "Video Editing",
      description:
        "Professional video editing to create polished, engaging, and visually appealing content for personal or commercial use, including cutting, color correction, special effects, and sound design.",
    },
    {
      id: 2,
      iconUrl: "/images/chart_icon.png",
      title: "Digital Marketing",
      description:
        "Encompasses various online strategies aimed at promoting products or services, including SEO, social media management, PPC advertising, and content marketing.",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
