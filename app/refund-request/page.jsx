import MainLayout from "@/components/templates/MainLayout";
import RefundRequest from "@/components/pages/RefundRequest";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <RefundRequest />
    </MainLayout>
  );
}
