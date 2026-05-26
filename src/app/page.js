import Banner from "@/components/Banner";
import Top3CoursesPage from "./top3courses/page";
import LearningTips from "@/components/LearningTips";
import TopInstructorPage from "./topinstructor/page";


export default function Home() {
  return (
  
    <div className="max-w-11/12 mx-auto">
       <Banner></Banner>
      <Top3CoursesPage></Top3CoursesPage>
      <LearningTips></LearningTips>
      <TopInstructorPage></TopInstructorPage>
    </div>
  );
}
