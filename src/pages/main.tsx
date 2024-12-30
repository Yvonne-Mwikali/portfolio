import { ContactUs, ExperienceEducation, Landing, SkillsPage, TestimonialPage, WorkPage } from "../sections";

export function MainPage() {
  //Put all the sections needed for the main page
  return (
    <div>
      <Landing />
      <SkillsPage />
      <ExperienceEducation />
      <WorkPage />
      {/* <TestimonialPage /> */}
      <ContactUs />
    </div>
  );
}
