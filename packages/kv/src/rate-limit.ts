import "server-only";

import { Ratelimit } from "@upstash/ratelimit";
import { client } from "./index";

export const ratelimit = new Ratelimit({
  limiter: Ratelimit.fixedWindow(10, "10s"),
  redis: client,
});