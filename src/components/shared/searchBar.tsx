"use client";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function searchBar() {
  return (
    <Field
      orientation="horizontal"
      className="w-145.25 gap-4 flex justify-start items-start"
    >
      <div className="relative w-full">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Course, topic, creator"
          className="py-6 pl-11 pr-3 bg-[#FFFFFF] rounded-[24px]"
        />
      </div>
      <Button className="rounded-[24px] px-3 py-4.5" variant={"home"}>
        Search
      </Button>
    </Field>
  );
}
