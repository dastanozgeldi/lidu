import React from "react";
import { ArrowDown } from "lucide-react";

function Fact({
  children,
  id,
  next,
  last,
}: {
  children: React.ReactNode;
  id: number;
  next?: number;
  last?: boolean;
}) {
  return (
    <section id={`${id}`} className="h-screen flex items-center">
      <div>
        <h1 className="text-center text-6xl font-extrabold">{children}</h1>
        {!last && (
          <div className="my-10 flex items-center justify-center">
            <a href={`#${next}`}>
              <ArrowDown className="w-10 h-10" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function RealityCheck() {
  const facts = [
    "say you're spending 4h a day on social media.",
    "that's 1460 hours a year.",
    "time that you can spend on literally anything.",
    "socializing. learning. creating. exercising. reading. grinding.",
    "it's time to lock in.",
  ];
  return (
    <>
      {facts.map((fact, id) => (
        <Fact key={id} id={id} next={id + 1} last={facts.length - 1 === id}>
          {fact}
        </Fact>
      ))}
    </>
  );
}
