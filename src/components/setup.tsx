import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function Setup() {
  const [birthday, setBirthday] = useState("");

  return (
    <>
      <header className="text-center mb-6">
        <h1 className="my-4 text-6xl font-extrabold">hi!</h1>
        <h2 className="font-bold my-3 text-3xl">
          this is LIDU -- life in different units.
        </h2>
        <p className="opacity-75">
          ~ the goal of the app is to showcase how much time you've lived in
          different units, including hours, minutes, seconds etc.
        </p>
      </header>

      <hr />

      <div className="space-y-3 my-6">
        <p>enter your birthday (we'll ask only once)</p>
        <div>
          <Label htmlFor="birthday">birthday</Label>
          {/* format is YYYY-MM-DD */}
          <Input
            id="birthday"
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <Button
          onClick={() => {
            localStorage.setItem("birthday", birthday);
            window.location.reload();
          }}
        >
          save
        </Button>
      </div>
    </>
  );
}
