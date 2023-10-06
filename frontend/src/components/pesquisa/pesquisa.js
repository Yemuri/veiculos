import {
  Button,
  Input,
} from "@material-tailwind/react";

export function PesquisaHeader() {
  return (
    <div className="relative flex w-full gap-2 max-w-full" >
      <Input
        type="search"
        label="Digite Aqui..."
        className="pr-28"
        containerProps={{
          className: "min-w-[288px]",
        }}
      />
      <Button size="sm" className="!absolute right-1 top-1 rounded w-24 text-center	items-center">
        PESQUISAR
      </Button>
    </div>
  );
}