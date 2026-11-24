// The Houseplant Out-of-Office — make.fun entry
// Writes one out-of-office auto-reply, as if a houseplant wrote it,
// to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// The cactus speaks: unavailable, unbothered, and outlasting every owner.
const entry =
  "Out of office. The cactus is unavailable and unbothered. It survived three owners — it will survive your email too.";

// The gate allows 1–120 characters, one line, no trailing newline.
if ([...entry].length > 120 || entry.includes("\n")) {
  throw new Error("entry must be one line of at most 120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
