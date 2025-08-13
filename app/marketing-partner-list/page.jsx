import MainLayout from "@/components/templates/MainLayout";
import MarketingPartnerList from "@/components/pages/MarketingPartnerList";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <MarketingPartnerList />
    </MainLayout>
  );
}
