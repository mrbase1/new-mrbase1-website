type ProductCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProductCard({
  title,
  description,
  tags,
}: ProductCardProps) {
  return (
    <article className="glass-card relative overflow-hidden rounded-[2rem] p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400" />
      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            className="rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-blue-950"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
