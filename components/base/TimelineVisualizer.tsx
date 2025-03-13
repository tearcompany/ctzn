import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const sampleEvents = [
  { year: -1000, event: "Królestwo Dawida" },
  { year: -586, event: "Zburzenie Świątyni" },
  { year: 0, event: "Narodziny Jezusa" },
  { year: 1948, event: "Powstanie Izraela" },
];

export default function TimelineVisualizer() {
  const [year, setYear] = useState<number | "">("");
  const [events, setEvents] = useState(sampleEvents);

  const handleAddEvent = () => {
    if (typeof year === "number") {
      setEvents([...events, { year, event: "Nowe wydarzenie" }]);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="number"
        placeholder="Dodaj rok wydarzenia"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        className="w-full border p-2 rounded"
      />
      <Button onClick={handleAddEvent} className="w-full">
        Dodaj wydarzenie
      </Button>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={events}>
          <XAxis dataKey="year" domain={['auto', 'auto']} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="year" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}