import MainLayout from "@/components/templates/MainLayout";
import SocialOrganizationList from "@/components/pages/SocialOrganizationList";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <SocialOrganizationList />
    </MainLayout>
  );
}
