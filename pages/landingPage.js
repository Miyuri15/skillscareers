import FAQ from "@/components/FAQ";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JobFindBanner from "@/components/JobFindBanner";
import News from "@/components/News";
import RecruiterPackages from "@/components/RecruiterPackages";
import SuccessStories from "@/components/SuccessStories";

export default function LandingPage() {
  return (
    <>
      <Header />
      <JobFindBanner/>
      <FeaturedJobs/>
      <RecruiterPackages/>
      <SuccessStories/>
      <News/>
      <FAQ/>
      <Footer />
    </>
  );
}
