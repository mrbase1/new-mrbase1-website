type ServiceCardProps = {
  title: string;
  description: string;
  points: string[];
  index: number;
};

export default function ServiceCard({
  title,
  description,
  points,
  index,
}: ServiceCardProps) {
  return (
    <article className="group glass-card relative overflow-hidden rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl transition duration-300 group-hover:bg-orange-400/30" />
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-orange-400 text-lg font-bold text-white shadow-lg shadow-orange-500/20">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-700" key={point}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
