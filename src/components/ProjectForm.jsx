import { useState, useRef, useContext } from "react";
import { ProjectsContext } from "@/store/ProjectsContext";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function ProjectForm() {
  const [dueDate, setDueDate] = useState(null);
  const { projects, addNewProject, setProjects } = useContext(ProjectsContext);

  console.log(projects);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // functions
  function handleAddingNewProject() {
    addNewProject(titleRef.current.value, descriptionRef.current.value, dueDate);
  }

  return (
    <div className="grid gap-8">
      <div id="buttons-container" className="flex gap-2 justify-end">
        <Button variant="outline" onClick={handleAddingNewProject}>
          Save
        </Button>
        <Button variant="destructive">Cancel</Button>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="text-base uppercase font-bold">
          Title
        </Label>
        <Input
          ref={titleRef}
          type="text"
          id="name"
          placeholder="Project title"
          className="text-base"
        />
      </div>

      <div className="grid w-full gap-1.5 ">
        <Label htmlFor="description" className="text-base uppercase font-bold">
          Description:
        </Label>
        <Textarea
          ref={descriptionRef}
          placeholder="Write a few words about the project here"
          id="description"
          className="text-base"
        />
      </div>

      <div className="grid w-full gap-1.5 ">
        <Label htmlFor="dueDate" className="text-base uppercase font-bold">
          Due Date:
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="dueDate"
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal text-base",
                !dueDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={dueDate} onSelect={setDueDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
