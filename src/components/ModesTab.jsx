const modes = ["Encrypt", "Decrypt", "Brute Force"];

function ModesTab({ mode, setMode, modes }) {
  return (
    <div className="flex gap-2 m-8">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg cursor-pointer ${mode === m ? "bg-rw text-white border-rw" : "bg-surface text-rw border-rw/20 hover:border-rw/50"}`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

export default ModesTab;
