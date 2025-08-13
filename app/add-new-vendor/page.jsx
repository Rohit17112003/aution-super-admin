import MainLayout from "@/components/templates/MainLayout";
import AddNewVendor from "@/components/pages/AddNewVendor";
const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <AddNewVendor />
    </MainLayout>
  );
};

export default page;
