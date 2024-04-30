// hooks
import { useState, useContext } from "react";

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

export default function EditForm({ editingProject, setIsEditing }) {
  const { closeForm, editProject } = useContext(ProjectsContext);
  const { prjctDate, prjctDescription, prjctTitle } = editingProject;
  const [editedTitle, setEditedTitle] = useState(prjctTitle);
  const [editedDescription, setEditedDescription] = useState(prjctDescription);
  const [editedDate, setEditedDate] = useState(prjctDate);

  // functions
  function handleSavingEditedProject() {
    editProject(editingProject, editedTitle, editedDescription, editedDate);
    setIsEditing(false);
  }

  function handleCancelClick() {
    closeForm();
  }

  return (
    <div className="mx-auto grid w-[70%] gap-8">
      <div id="buttons-container" className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleSavingEditedProject}>
          Save
        </Button>
        <Button variant="destructive" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="text-base font-bold uppercase">
          Title
        </Label>
        <Input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
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
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
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
                !editedDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {editedDate ? (
                format(editedDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={editedDate}
              onSelect={setEditedDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
