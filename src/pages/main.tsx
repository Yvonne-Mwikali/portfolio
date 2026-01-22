import {
  ContactUs,
  ExperienceEducation,
  Landing,
  Services,
  SkillsPage,
  // TestimonialPage,
  WorkPage,
} from "../sections";
// import { Achievements } from "../sections";

export function MainPage() {
  //Put all the sections needed for the main page
  return (
    <div>
      <Landing />
      <SkillsPage />
      <Services />
      <ExperienceEducation />
      <WorkPage />
      {/* <Achievements /> */}
      {/* <TestimonialPage /> */}
      <ContactUs />
    </div>
  );
}
