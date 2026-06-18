type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="glass-card rounded-3xl p-6 text-center">
      <p className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}
