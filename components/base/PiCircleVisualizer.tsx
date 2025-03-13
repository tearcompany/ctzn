import { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const generatePiDigits = (count: number) => {
  const piString = Math.PI.toString().slice(2, count + 2);
  return piString.split("").map((digit, index) => ({
    index,
    value: parseInt(digit),
  }));
};

export default function PiCircleVisualizer() {
  const [data, setData] = useState<{ index: number; value: number }[]>([]);

  useEffect(() => {
    setData(generatePiDigits(50));
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Wizualizacja cyfr liczby π</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="index" />
          <YAxis domain={[0, 9]} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-muted-foreground">
        Liczba π jest obecna w wielu aspektach mistycznych i matematycznych.
      </p>
    </div>
  );
}