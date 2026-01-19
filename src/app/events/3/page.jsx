import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import CodeSprintOdyssey from "../components/Event3";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <CodeSprintOdyssey  />
      <Footer />
    </main>
  );
};

export default page;
