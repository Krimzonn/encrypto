const steps = [
  {
    num: "01",
    title: "Pick a cipher",
    desc: "Choose from a growing list of classiscal encryption methods",
  },
  {
    num: "02",
    title: "Type your message",
    desc: "Enter any text and watch it transform in real time",
  },
  {
    num: "03",
    title: "Crack it",
    desc: "Use brute force method to try all possible keys and decode any ciphertext",
  },
];

function HowItWorks() {
  return (
    <div className="border-t border-rw/20 px-4 md:px-8 py-12">
      <p className="text-xs font-semibold text-rw tracking-widest uppercase mb-6 md:mb-8">
        How it works
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-surface border border-rw/15 rounded-lg p-4 md:p-5"
          >
            <div className="text-2xl font-bold text-gold mb-3">{step.num}</div>
            <div className="text-sm font-semibold text-rw mb-2">
              {step.title}
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
