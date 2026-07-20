"use client"

import {
  Label,
  Input,
  Select,
  Textarea,
  Field,
  FieldError,
  FieldHint,
  Button,
  Stack,
} from "@mr-stash/ui"

export default function Page() {
  return (
    <>
      <main>
        <Stack gap="xl" style={{ maxWidth: 250, margin: "0 auto" }}>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" />
            <FieldHint>We will never share your email.</FieldHint>
          </Field>

          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" />
            <FieldError>Email is required.</FieldError>
          </Field>

          <Field>
            <Label htmlFor="select-1">Select</Label>
            <Select id="select-1">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Select>
          </Field>

          <Field>
            <Label htmlFor="textarea-1">TextArea</Label>
            <Textarea id="textarea-1" />
          </Field>

          <Button variant="destructive">Cancel</Button>
          <Button variant="primary">Continue</Button>
        </Stack>
      </main>
    </>
  )
}
