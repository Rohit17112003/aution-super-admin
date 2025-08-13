import MainLayout from "@/components/templates/MainLayout";
import BidderList from "@/components/pages/BidderList";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <BidderList />
    </MainLayout>
  );
}
