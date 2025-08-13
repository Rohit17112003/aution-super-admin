import MainLayout from "@/components/templates/MainLayout";
import AuctionHistory from "@/components/pages/AuctionHistory";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AuctionHistory />
    </MainLayout>
  );
}
