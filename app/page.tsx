import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
// import ImageSlider from "@/components/ImageSlider";
import Policy from "@/components/Policy";
import OurTeam from "@/components/OurTeam";


export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-clip">
      <Header />

      <Hero />

      <SplitSection
        id="about"
        imageSrc="/images/flat1.jpg"
        imageAlt="Dream Space residential property in Patna"
        badgeValue="7+ Yrs"
        badgeLabel="Trusted presence in Patna's real estate market"
        eyebrow="Who We Are"
        heading="A trusted real estate company in Patna."
        paragraph="Dream Space Infra Developers (OPC) Pvt Ltd is a trusted real estate marketing company dedicated to turning your dreams into reality. Whether you're searching for a sweet home to settle into, or a profitable property to invest in, we bring verified listings, honest guidance and end-to-end support to every deal."
        features={[
          "Residential & commercial property expertise",
          "Curated properties across Patna",
          "Professional support from enquiry to site visit",
          "Customer-first & transparent property guidance",
        ]}
        ctaLabel="Talk to Our Team"
        ctaHref={site.whatsapp}
      />

      {/* <SplitSection
       
        reverse
        bgClassName="bg-ivory"
        imageSrc="/images/flat2.png"
        imageAlt="Featured flat listing by Dream Space"
        badgeValue="Ready"
        badgeLabel="Move-in ready homes across prime Patna locations"
        eyebrow="Featured Listing"
        heading="Spacious flats, built for everyday living."
        paragraph="Explore our current listing of well-planned apartments in Patna's growing neighbourhoods — designed for comfortable family living and strong long-term value. Every listing is personally verified by our team before it reaches you."
        features={[
          "2 & 3 BHK options available",
          "Prime, well-connected locations",
          "Clear title & documentation support",
        ]}
        ctaLabel="Enquire About This Listing"
        ctaHref={site.whatsapp}
      /> */}

      {/* <ImageSlider /> */}

      <OurTeam/>
      <Policy/>

      <Footer />

      <WhatsAppFloat />
    </main>
  );
}
