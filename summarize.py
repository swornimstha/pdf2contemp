import torch
from transformers import pipeline

from reader import getText 

FILENAME = "book.pdf"

toSummarize = getText(FILENAME)

model_id = "meta-llama/Llama-3.2-1B-Instruct"
pipe = pipeline(
    "text-generation",
    model=model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)
messages = [
    {"role": "system", "content": "You are a computer engineer and summarize the user input without missing any important detail!"},
    {"role": "user", "content": toSummarize},
]
outputs = pipe(
    messages,
    max_new_tokens=1256,
)
content = outputs[0]["generated_text"][-1]["content"]

print("Writing file...")
with open("summary.txt", "w") as writeSum:
    writeSum.write(content)

print("File successfully saved to summary.txt")
