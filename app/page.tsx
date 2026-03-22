import dynamic from "next/dynamic";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import MissionStatement from "@/components/missionStatement";
import ProgramOverview from "@/components/programOverview";
import ApplicationProcess from "@/components/applicationProcess";
import FellowshipBenefits from "@/components/fellowshipBenefits";
import KeyStatistics from "@/components/keyStatistics";
import Changemakers from "@/components/changemakers";
import PostGraduationOutcomes from "@/components/postGraduationOutcomes";
import SponsorsAndPartners from "@/components/sponsorsAndPartners";
import ImpactMetrics from "@/components/impactMetrics";
import CTASection from "@/components/cta";
import OfficeMap from "@/components/officeMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <MissionStatement /> */}
      <ProgramOverview />
      
      <FellowshipBenefits />
      <KeyStatistics />
      <Changemakers />
      <PostGraduationOutcomes />
       {/*  <OfficeMap /> */}
      {/* <SponsorsAndPartners /> */}
      {/* <ImpactMetrics /> */}
      <CTASection />
      <Footer />
      {/* <Newsletter /> */}
    </div>
  );
}
