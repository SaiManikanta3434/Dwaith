import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-center mb-14">
          Our <span className="gradient-text">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-zinc-900 p-6 rounded-xl hover:glow transition"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-400 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
