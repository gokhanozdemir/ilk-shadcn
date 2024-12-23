import { Button } from "@/components/ui/Button";

import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  SlidersHorizontal,
  MailOpen,
  X,
} from "lucide-react";

import "./App.css";

function App() {
  const variants = [
    "default",
    "secondary",
    "destructive",
    "ghost",
    "outline",
    "link",
  ];
  const sizes = ["sm", "default", "lg", "icon"];
  const shapes = ["rounded", "square", "pill"];

  return (
    <div className="container my-4 flex flex-col gap-2">
      <div className="grid grid-cols-3 md:grid-cols-1 gap-2 p-4 border-2 border-dashed border-secondary">
        <h2 className="text-2xl text-primary font-bold col-span-3 md:col-span-1">
          @dodokod 🦤
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-3 border-2 border-dashed border-secondary p-4">
          <h3 className="text-xl font-bold">Variants</h3>
          {variants.map((variant) => {
            return (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-start gap-3 border-2 border-dashed border-secondary p-4">
          <h3 className="text-xl font-bold">Sizes</h3>
          {sizes.map((size) => {
            return (
              <Button key={size} size={size}>
                {size === "icon" ? <SlidersHorizontal /> : size}
              </Button>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row items-start gap-3 border-2 border-dashed border-secondary p-4">
          <h3 className="font-bold text-xl">Shapes</h3>
          {shapes.map((shape) => {
            return (
              <Button key={shape} shape={shape}>
                {shape}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex gap-3 flex-wrap p-4 border-2 border-dashed border-secondary">
        <h3 className="font-bold text-xl w-full">Combinations</h3>
        {shapes.map((shape) => {
          return (
            <div
              className="flex-grow border-2 border-dashed p-1 border-secondary"
              key={shape}
            >
              <h3 className="font-bold block w-full">{shape}</h3>
              {sizes.map((size) => {
                return (
                  <div
                    className="flex flex-col m-2 lg:flex-row lg:flex-wrap items-start gap-3 border-2 border-dashed border-secondary p-4"
                    key={size}
                  >
                    <h4 className="text-sm font-bold w-full">size {size}</h4>
                    {variants.map((variant) => {
                      return (
                        <div className="" key={variant}>
                          <Button
                            key={variant}
                            size={size}
                            shape={shape}
                            variant={variant}
                          >
                            {size !== "icon" ? variant : ""}
                            {variant === "default" && <ChevronRight />}
                            {variant === "secondary" && <ChevronDown />}
                            {variant === "destructive" && <X />}
                            {variant === "ghost" && <ChevronLeft />}
                            {variant === "outline" && <MailOpen />}
                            {variant === "link" && <SlidersHorizontal />}
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
