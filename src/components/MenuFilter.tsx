
export default function MenuFilter({ categories, current, onChange } : { categories: string[], current: string, onChange: (cat:string)=>void }) {
  return (
    <div className="flex flex-wrap gap-4 my-4 justify-center">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-6 py-2 rounded-btn font-semibold text-base transition
            ${current === cat 
              ? "bg-pz-blue text-white shadow-pz"
              : "bg-white text-pz-blue border border-pz-blue hover:bg-pz-blue/10"
            }`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
