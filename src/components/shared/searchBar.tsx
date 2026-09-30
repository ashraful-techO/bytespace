"use client";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function searchBar() {
  return (
    <Field orientation="horizontal" className="w-[581px]">
      <Input type="search" placeholder="Course, topic, creator" className="px-3 py-4"/>
      <Button>Search</Button>
    </Field>
  );
}
