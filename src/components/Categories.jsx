import {
  Music,
  BriefcaseBusiness,
  Laptop2,
  Palette,
  Trophy,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Music",
    icon: Music,
    color: "text-pink-400",
  },
  {
    id: 2,
    name: "Business",
    icon: BriefcaseBusiness,
    color: "text-cyan-400",
  },
  {
    id: 3,
    name: "Technology",
    icon: Laptop2,
    color: "text-violet-400",
  },
  {
    id: 4,
    name: "Art",
    icon: Palette,
    color: "text-orange-400",
  },
  {
    id: 5,
    name: "Sports",
    icon: Trophy,
    color: "text-green-400",
  },
  {
    id: 6,
    name: "Education",
    icon: GraduationCap,
    color: "text-yellow-400",
  },
];

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 font-semibold tracking-widest uppercase">
            Explore
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Browse by
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Category
            </span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Find events that match your interests. Select a category to
            instantly discover experiences you'll love.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => {

            const Icon = category.icon;

            const active = selectedCategory === category.name;

            return (

              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 p-8
                ${
                  active
                    ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    : "border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                }`}
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />

                <div className="relative flex flex-col items-center">

                  <div className={`mb-5 ${category.color}`}>
                    <Icon
                      size={42}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {category.name}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Explore
                  </p>

                </div>

              </button>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;