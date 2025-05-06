import { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cards from "@/components/cards";
import ReplyForm from "@/components/reply-form";
import HeroSection from "@/components/hero-section";
import FeedbackSection from "@/components/feedback-section";


export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Cards />
      <FeedbackSection>
        <ReplyForm />
      </FeedbackSection>
      <Footer />
    </Fragment>
  );
}
