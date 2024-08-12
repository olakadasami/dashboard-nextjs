import Header from "@/components/Header/Header";
import { DrawerDemo } from "@/components/nav/Drawer";
import SideBar from "@/components/nav/SideBar";
import { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40 relative over">
      <aside className=" lg:hidden border-r bg-background p-4">
        <DrawerDemo />
      </aside>
      <aside className="w-48 hidden lg:block border-r bg-background overflow-hidden">
        <SideBar />
      </aside>

      <main className="flex-1 overflow-scroll relative">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default layout;
