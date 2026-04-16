import os
import re

pb_dir = r"C:\Users\chandru21\.gemini\antigravity\conversations"
pb_files = ["1eb92c5e-6c89-4aa9-a59b-9835238ce8fc.pb"]

for f in pb_files:
    pb_path = os.path.join(pb_dir, f)
    with open(pb_path, 'rb') as f_in:
        data = f_in.read()
    
    # Simple extraction of text looking for ```html, ```css, ```javascript
    # Since it's a binary file, let's treat it as iso-8859-1 string to use regex
    text = data.decode('iso-8859-1', errors='ignore')
    
    blocks = re.findall(r'```(?:html|css|javascript)(.*?)```', text, re.DOTALL)
    print(f"Found {len(blocks)} code blocks in {f}")
    
    for i, block in enumerate(blocks[:5]): # just save the first 5
        with open(f"c:/ag/extracted_block_{i}.txt", "w", encoding="utf-8") as f_out:
            f_out.write(block)
