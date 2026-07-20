import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Button } from "../src/components/button"
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../src/components/dialog"

const meta: Meta<typeof Dialog> = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    closeOnBackdropClick: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    showCloseButton: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Dialog</DialogTitle>
          <DialogDescription>Dialog content goes here.</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-muted-foreground text-sm">
            Use the body for the main content of the dialog.
          </p>
        </DialogBody>
      </Dialog>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogHeader>
            <DialogTitle>Delete item?</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p className="text-muted-foreground text-sm">
              Footer buttons are composed by the caller.
            </p>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    )
  },
}
