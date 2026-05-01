// Renders a plain-string description that uses Markdown-style backticks for
// inline code (`file_open_callback`, `server.properties`) into a safe HTML
// fragment with <code> spans. The string is HTML-escaped first; only the
// promoted <code> spans contain markup.

const ESCAPE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => ESCAPE[c]!);
}

export function inlineCode(s: string): string {
  return s
    .split(/(`[^`]+`)/)
    .map(seg => {
      if (seg.length > 2 && seg.startsWith("`") && seg.endsWith("`")) {
        return `<code class="font-mono text-[0.92em]">${escapeHtml(seg.slice(1, -1))}</code>`;
      }
      return escapeHtml(seg);
    })
    .join("");
}
