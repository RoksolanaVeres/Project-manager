// hooks
import { useContext } from "react";

// contexts
import { ProjectsContext } from "@/store/ProjectsContext";

// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogDeleteButton({ prjctId }) {
  const { deleteProject } = useContext(ProjectsContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-lg ">
        <DialogHeader>
          <DialogTitle className="mb-3 text-primary">
            Delete this project?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            project.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-2 flex gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              No, changed my mind
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            onClick={() => deleteProject(prjctId)}
          >
            Yes, delete it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
