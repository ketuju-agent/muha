"use client";
import { Label } from "@ui/components/base/label";
import { Switch } from "@ui/components/base/switch";
import { useCallback } from "react";

export function EditSwitch({
  defaultEditing,
  onCheckedChange,
}: {
  defaultEditing: boolean;
  onCheckedChange: (editing: boolean) => void;
}) {
  const setEditing = useCallback(
    (editing: boolean) => {
      onCheckedChange(editing);
    },
    [onCheckedChange]
  );
  return (
    <div className="flex items-center space-x-2">
      <Switch
        defaultChecked={defaultEditing}
        id="edit-mode"
        onCheckedChange={setEditing}
      />
      <Label htmlFor="airplane-mode">Enable Edit Mode</Label>
    </div>
  );
}