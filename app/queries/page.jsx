import MainLayout from "@/components/templates/MainLayout";
import Queries from "@/components/pages/Queries";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <Queries />
    </MainLayout>
  );
}
