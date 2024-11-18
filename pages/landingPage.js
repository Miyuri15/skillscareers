import Category from "@/components/Category";
import FAQ from "@/components/FAQ";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JobFindBanner from "@/components/JobFindBanner";
import News from "@/components/News";
import RecruiterPackages from "@/components/RecruiterPackages";
import SuccessStories from "@/components/SuccessStories";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="relative">
          <Image
            src="/images/bgLineWide.jpg"
            alt="line"
            width={100}
            height={30}
            className="absolute top-0 right-0 w-fit h-[800px] object-cover z-0 opacity-5 items-end"
          />

          <Image
            src="/images/bgLineThin.jpg"
            alt="line"
            width={200}
            height={500}
            className="absolute top-0 right-40 w-fit h-[800px] object-cover z-0 opacity-5 items-end"
          />
        </div>

      <JobFindBanner/>
      <FeaturedJobs/>
      <Category/>
      <RecruiterPackages/>
      <SuccessStories/>
      <News/>
      <FAQ/>
      <Footer />
    </>
  );
}

