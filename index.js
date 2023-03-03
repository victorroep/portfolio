import { Configuration, OpenAIApi } from "openai";
import React from "react";
import ReactDOM from "react-dom";

const configuration = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "I want you to act as a prompt generator. Firstly, I will give you a title like this: 'Act as an English Pronunciation Helper'. Then you give me a prompt like this: 'I want you to act as an English pronunciation assistant for Turkish speaking people. I will write your sentences, and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentences but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write explanations on replies. My first sentence is 'how the weather is in Istanbul?'.' (You should adapt the sample prompt according to the title I gave. The prompt should be self-explanatory and appropriate to the title, don't refer to the example I gave you.). My first title is 'Act as a vivid storyteller' (Give me prompt only)",
  max_tokens: 400,
  temperature: 0.5,
});
console.log(response.data)