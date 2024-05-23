import { AppCTX } from "jetpath";
export function GET_(ctx: AppCTX) {
  ctx.send("hello world");
}
