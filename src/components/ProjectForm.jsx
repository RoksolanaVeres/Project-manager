// hooks
import { useState, useRef, useContext } from "react";

// contexts
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// other
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function ProjectForm() {
  const [dueDate, setDueDate] = useState(null);
  const { projects, addNewProject, closeForm } = useContext(ProjectsContext);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // functions
  function handleSavingNewProject() {
    if (titleRef.current.value && descriptionRef.current.value && dueDate) {
      addNewProject(
        titleRef.current.value,
        descriptionRef.current.value,
        dueDate,
      );
      closeForm();
    } else {
      return;
    }
  }

  console.log(projects);
  return (
    <div className="mx-auto grid w-[70%] gap-8">
      <div id="buttons-container" className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleSavingNewProject}>
          Save
        </Button>
        <Button variant="destructive" onClick={closeForm}>
          Cancel
        </Button>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="text-base font-bold uppercase">
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
        <Label htmlFor="description" className="text-base font-bold uppercase">
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
        <Label htmlFor="dueDate" className="text-base font-bold uppercase">
          Due Date:
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="dueDate"
              variant={"outline"}
              className={cn(
                "justify-start text-left text-base font-normal",
                !dueDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dueDate}
              onSelect={setDueDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
