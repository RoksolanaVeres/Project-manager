import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <aside className=" bg-secondary text-foreground w-[25%] mt-8 rounded-tr-xl px-10 pt-20">
      <h1 className="uppercase text-primary font-bold text-xl mb-6">Your Projects</h1>
      <Button className="text-base">+ Add project</Button>
    </aside>
  );
}
