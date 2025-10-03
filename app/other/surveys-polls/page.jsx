import MainLayout from "@/components/templates/MainLayout";
import SurveysPolls from "@/components/pages/SurveysPolls";
export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <SurveysPolls />
    </MainLayout>
  );
}
