import OpenAI from "openai";

let openai;

export const initializeOpenAI = (apiKey) => {
  openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });
};

export const getOpenAI = () => {
  if (!openai)
    throw new Error("OpenAI is not initialized. Set the API key first.");
  return openai;
};
