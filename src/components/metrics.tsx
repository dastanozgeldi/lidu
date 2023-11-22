import { useCallback, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown } from "lucide-react";

export function Metrics({ birthday }: { birthday: Date }) {
  const [units, setUnits] = useState({
    years: "0",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const calculateUnits = useCallback(() => {
    const now = new Date();
    const diff = now.getTime() - birthday.getTime();
    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const years = days / 365.25;

    setUnits({
      years: years.toFixed(10),
      days: days.toFixed(7),
      hours: hours.toFixed(5),
      minutes: minutes.toFixed(3),
      seconds: seconds.toFixed(0),
    });
  }, []);

  useEffect(() => {
    calculateUnits();
    const interval = setInterval(calculateUnits, 100);
    return () => clearInterval(interval);
  }, [calculateUnits]);

  return (
    <section className="h-screen flex items-center">
      <div>
        <h1 className="text-6xl font-extrabold">
          this is how much you've lived up until now.
        </h1>
        <Tabs defaultValue="years" className="w-full my-6">
          <div className="flex flex-col items-center space-y-1">
            <TabsList>
              <TabsTrigger value="years">years</TabsTrigger>
              <TabsTrigger value="days">days</TabsTrigger>
              <TabsTrigger value="hours">hours</TabsTrigger>
              <TabsTrigger value="minutes">minutes</TabsTrigger>
              <TabsTrigger value="seconds">seconds</TabsTrigger>
            </TabsList>
            <span className="text-primary/50">
              hint: you can watch yourself age in different units.
            </span>
          </div>

          {/* content */}
          <div className="font-press-start my-6">
            <TabsContent value="years">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-center font-mono">
                {units.years.split(".")[0]}
                <span className="mx-1 text-xl">
                  .{units.years.split(".")[1]}
                </span>
              </h1>
            </TabsContent>
            <TabsContent value="days">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-center font-mono">
                {units.days.split(".")[0]}
                <span className="mx-1 text-xl">
                  .{units.days.split(".")[1]}
                </span>
              </h1>
            </TabsContent>
            <TabsContent value="hours">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-center font-mono">
                {units.hours.split(".")[0]}
                <span className="mx-1 text-xl">
                  .{units.hours.split(".")[1]}
                </span>
              </h1>
            </TabsContent>
            <TabsContent value="minutes">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-center font-mono">
                {units.minutes.split(".")[0]}
                <span className="mx-1 text-xl">
                  .{units.minutes.split(".")[1]}
                </span>
              </h1>
            </TabsContent>
            <TabsContent value="seconds">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-center font-mono">
                {units.seconds}
              </h1>
            </TabsContent>
          </div>

          <p className="text-center text-primary/50">
            wrong birthday?{" "}
            <button
              className="underline"
              onClick={() => {
                localStorage.removeItem("birthday");
                window.location.reload();
              }}
            >
              edit.
            </button>
          </p>
        </Tabs>

        <div className="my-10 flex items-center justify-center">
          <a href="#0">
            <ArrowDown className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
