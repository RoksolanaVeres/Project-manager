import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectForm() {
  return (
    <div className="grid gap-8">
      <div id="buttons-container" className="flex gap-2 justify-end">
        <Button variant="outline">Save</Button>
        <Button variant="destructive">Cancel</Button>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="text-base">
          Project Name:
        </Label>
        <Input type="text" id="name" placeholder="Project name" className="text-base" />
      </div>

      <div className="grid w-full gap-1.5 ">
        <Label htmlFor="description" className="text-base">
          Description:
        </Label>
        <Textarea
          placeholder="Write a few words about the project here"
          id="description"
          className="text-base"
        />
      </div>
    </div>
  );
}
