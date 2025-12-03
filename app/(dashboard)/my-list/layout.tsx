import SidebarProfile from "@/components/SidebarProfile";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex gap-5 px-4 lg:container lg:mx-auto">
        <aside className="w-72 shrink-0 hidden lg:block">
          <SidebarProfile />
        </aside>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

export default layout;
