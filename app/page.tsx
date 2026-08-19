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
        imageSrc="/images/frontimg2.png"
        imageAlt="Dream Space residential property in Patna"
        badgeValue="7+ Yrs"
        badgeLabel="Trusted presence in Patna's real estate market"
        eyebrow="Who We Are"
        heading="A trusted real estate company in Patna."
        paragraph="Dream Space Infra Developers Pvt Ltd की पूरी टीम हमेशा यह कोशिश करती है कि आपको बेहतर, भरोसेमंद और साफ-सुथरी Property Deal मिले।

हमारा उद्देश्य सिर्फ Property बेचना नहीं, बल्कि आपकी जरूरत और बजट के अनुसार सही Property का सही विकल्प देना है।

 हमारी सेवाएँ Dream Space Infra Developers Pvt Ltd की Policy है कि Customers से कोई Commission / Brokerage Charge नहीं लिया जाता।

अगर आप Flat, Makan, Plot या Investment के लिए अच्छी और भरोसेमंद Deal तलाश रहे हैं, तो हमसे संपर्क करें।"
        features={[
          "Flat & Apartment",
          "Independent House / Makan",
          "Residential & Commercial Plot",
          "Property Investment",
          "Best Property Deals in Patna"
        ]}
        ctaLabel="Talk to Our Team"
        ctaHref={site.whatsapp}
      />
      

     

      <OurTeam />
      <Policy />

      <Footer />

      <WhatsAppFloat />
    </main>
  );
}
