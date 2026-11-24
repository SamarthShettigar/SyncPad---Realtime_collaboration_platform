import { slashCommands } from "../constants/slashCommands";

function UnifiedSlashMenu({
  visible,
  position,
  search = "",
  selectedIndex = 0,
  onSelect,
}) {
  if (!visible) return null;

  const filteredCommands = slashCommands.filter((cmd) => {
    const q = search.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(q) ||
      cmd.key.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.group.toLowerCase().includes(q)
    );
  });

  if (filteredCommands.length === 0) {
    return (
      <div
        className="absolute z-50 w-[340px] rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-950"
        style={{ top: position.top, left: position.left }}
      >
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No commands found
        </p>
      </div>
    );
  }

  let currentGroup = "";

  return (
    <div
      className="absolute z-50 w-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
      style={{ top: position.top, left: position.left }}
    >
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Command Menu
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Blocks and AI actions in one place
        </p>
      </div>

      <div className="max-h-[360px] overflow-y-auto p-2">
        {filteredCommands.map((cmd, index) => {
          const Icon = cmd.icon;
          const showGroupHeader = currentGroup !== cmd.group;

          if (showGroupHeader) currentGroup = cmd.group;

          return (
            <div key={cmd.key}>
              {showGroupHeader && (
                <div className="px-3 pb-2 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    {cmd.group}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => onSelect(cmd)}
                className={`flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition ${
                  index === selectedIndex
                    ? "bg-slate-100 dark:bg-slate-800"
                    : "hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900">
                  <Icon size={16} className="text-slate-700 dark:text-slate-300" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {cmd.label}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                        cmd.type === "ai"
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                          : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {cmd.type}
                    </span>
                  </div>

                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {cmd.description}
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnifiedSlashMenu;