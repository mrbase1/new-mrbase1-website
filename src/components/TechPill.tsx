type TechPillProps = {
  label: string;
};

export default function TechPill({ label }: TechPillProps) {
  return (
    <span className="rounded-full border border-white/70 bg-white/65 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl">
      {label}
    </span>
  );
}
