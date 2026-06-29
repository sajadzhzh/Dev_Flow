"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ActivityChart({ data }: { data: object[] }) {
  return (
    <div className="h-70 w-full">
      <ResponsiveContainer height={230} width={"100%"}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="activity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#2B2B31" vertical={false} />

          <XAxis
            dataKey="day"
            tick={{ fill: "#888" }}
            padding={{ left: 10, right: 10 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#6B7280",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#18181B",
              border: "1px solid #333",
              borderRadius: 10,
            }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#activity)"
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
