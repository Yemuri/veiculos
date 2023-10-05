import {
  Button,
  Input,
} from "@material-tailwind/react";

export function PesquisaHeader() {
  return (
    <div className="relative flex w-full gap-2 md:w-max">
      <Input
        type="search"
        label="Type here..."
        className="pr-20"
        containerProps={{
          className: "min-w-[288px]",
        }}
      />
      <Button size="sm" className="!absolute right-1 top-1 rounded">
        Search
      </Button>
    </div>
  );
}