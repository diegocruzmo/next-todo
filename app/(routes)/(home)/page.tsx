import { currentUser } from "@clerk/nextjs/server";

import TodosInfo from "./components/TodoInfo/TodosInfo";
import { CreateModal } from "./components/CreateModal";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default async function Home() {
  const user = await currentUser();

  if (!user) return <p>Not logged in</p>;

  return (
    <>
      <Header />

      <section className="flex justify-between items-center px-4 mx-6">
        <h2 className="text-light">Your To-Do 📙</h2>
        <CreateModal />
      </section>

      <section className="flex justify-between items-center px-4 mx-6">
        <TodosInfo />
      </section>

      <Footer />
    </>
  );
}
