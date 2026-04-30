import { newTaskAction } from "@/lib/actions";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Modal,
  Button,
  Form,
  FieldError,
} from "@heroui/react";
import React from "react";

const NewTask = () => {
  return (
    <div className="w-1/2 mx-auto mt-10">
      <h2 className="text-5xl">Add A New Task</h2>
      <div>
        <Form action={newTaskAction} className="flex flex-col gap-4">
          <TextField
            isRequired
            minLength={8}
            className="w-full"
            name="title"
            type="text"
          >
            <Label>Title</Label>
            <Input placeholder="Enter your task title" />
          </TextField>
          <TextField className="w-full" name="description" type="text">
            <Label>Description</Label>
            <Input placeholder="Enter your task description" />
            <FieldError></FieldError>
          </TextField>
          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-full" name="dueDate">
            <Label>Due Date</Label>
            <Input placeholder="Last due date" />
          </TextField>

          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit Task
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewTask;
