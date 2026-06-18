type ProcessStepProps = {
  title: string;
  description: string;
  index: number;
};

export default function ProcessStep({
  title,
  description,
  index,
}: ProcessStepProps) {
  return (
    <div className="relative rounded-[2rem] border border-white/70 bg-white/55 p-8 shadow-xl shadow-blue-950/5 backdrop-blur-xl">
      <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
