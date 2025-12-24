import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      title: "Frontend Developer (React / Next.js)",
      location: "Remote / India",
      type: "Full Time",
    },
    {
      title: "Backend Developer (Node.js)",
      location: "Bangalore / Remote",
      type: "Full Time",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-32 bg-gradient-to-br from-purple-700 to-pink-600 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Build Your Career at Dwaith InfoTech
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-white/90">
          Join a team of innovators shaping the future of digital
          transformation, cloud, and automation.
        </p>
      </section>

      {/* WHY DWAITH */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Challenging & impactful projects",
            "Remote-friendly culture",
            "Learning & growth opportunities",
            "Supportive team environment",
            "Modern tech stack",
            "Work-life balance",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 p-6 rounded-xl border border-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Open Positions
          </h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="flex flex-col md:flex-row md:items-center md:justify-between
                           bg-black p-6 rounded-xl border border-white/10"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-4 md:mt-0 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Didn’t find a suitable role?
        </h2>
        <p className="text-gray-400 mb-8">
          Send us your resume — we’re always looking for great talent.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Contact HR
        </Link>
      </section>

    </main>
  );
}
