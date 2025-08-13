import MainLayout from "@/components/templates/MainLayout";
import AddNewBidder from "@/components/pages/AddNewBidder";
const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddNewBidder />
    </MainLayout>
  );
};

export default page;
