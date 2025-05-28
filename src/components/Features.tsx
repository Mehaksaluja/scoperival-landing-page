import EcosystemIcon from "../assests/icons/ecosystem.svg";

const features = [
  {
    title: "Automated Competitor Monitoring",
    description:
      "Track pricing, changelogs, and feature pages across all your competitors — no manual checks needed.",
  },
  {
    title: "AI-Generated Summaries",
    description:
      "Let AI analyze and summarize what changed, why it matters, and what your team should do next.",
  },
  {
    title: "Real-Time Alerts via Slack & Email",
    description:
      "Get notified the moment a competitor updates something important — delivered directly to your inbox or Slack channel.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="@container p-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-center font-bold text-5xl tracking-tighter sm:text-6xl">
            Smart Features. Sharper Strategy.
          </h1>
          <p className="text-center mt-5 text-xl text-white/70">
            ScopeViral simplifies competitive intelligence with automation, AI
            analysis, and real-time updates — all in one place.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 max-w-6xl mx-auto">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
