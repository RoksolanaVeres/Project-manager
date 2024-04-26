import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function ProjectForm() {
  const [date, setDate] = useState(null);

  return (
    <div className="grid gap-8">
      <div id="buttons-container" className="flex gap-2 justify-end">
        <Button variant="outline">Save</Button>
        <Button variant="destructive">Cancel</Button>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name" className="text-base uppercase font-bold">
          Title
        </Label>
        <Input type="text" id="name" placeholder="Project title" className="text-base" />
      </div>

      <div className="grid w-full gap-1.5 ">
        <Label htmlFor="description" className="text-base uppercase font-bold">
          Description:
        </Label>
        <Textarea
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
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
