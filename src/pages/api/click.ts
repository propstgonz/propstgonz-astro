import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

const COUNTER_FILE = path.join(process.cwd(), "src/data/counter.json");

function readCount(): number {
  try {
    const data = fs.readFileSync(COUNTER_FILE, "utf-8");
    return JSON.parse(data).count;
  } catch {
    return 0;
  }
}

function writeCount(count: number) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count }, null, 2));
}

export const GET: APIRoute = async () => {
  const count = readCount();
  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async () => {
  let count = readCount();
  count++;
  writeCount(count);
  return new Response(JSON.stringify({ count }), {
    headers: { "Content-Type": "application/json" },
  });
};
