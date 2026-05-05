import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteContent } from "@/lib/data";

const InfoSection = () => {
  const infoItems = [
    { label: "WHAT I DO",     content: siteContent.info_what_i_do },
    { label: "MY BACKGROUND", content: siteContent.info_background },
    { label: "MY APPROACH",   content: siteContent.info_approach },
    { label: "CAREER",        content: siteContent.info_career },
    ...(siteContent.info_tools ? [{ label: "TOOLS / STACK", content: siteContent.info_tools }] : []),
    ...(siteContent.info_services ? [{ label: "SERVICES", content: siteContent.info_services }] : []),
    ...(siteContent.info_clients ? [{ label: "CLIENTS", content: siteContent.info_clients }] : []),
  ];

  return (
    <section className="page-container py-24 border-t border-border">
      <h2 className="section-title mb-16">Info</h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column: Text Content */}
        <div className="flex-1 space-y-12">
          {infoItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <span className="info-label text-muted-foreground whitespace-nowrap pt-1">
                {item.label}
              </span>
              <p className="info-text text-lg leading-relaxed text-foreground/90 max-w-2xl whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Profile Image */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end items-start">
          <div className="relative group w-64 h-64 lg:w-80 lg:h-80">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage
                src="https://ik.imagekit.io/tvgjth2fq/shas%20lab/IMG_2319.JPG"
                alt="Shashank - Profile"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <AvatarFallback className="text-4xl rounded-none bg-muted text-foreground">S</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
