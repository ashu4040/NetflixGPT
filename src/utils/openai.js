import OpenAI from "openai";
import { openaiKey } from "./constants";

const openai = new OpenAI({
  apiKey: openaiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
