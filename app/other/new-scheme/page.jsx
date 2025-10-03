import MainLayout from "@/components/templates/MainLayout";
import AddNewScheme from "@/components/pages/AddNewScheme";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddNewScheme />
    </MainLayout>
  );
}
