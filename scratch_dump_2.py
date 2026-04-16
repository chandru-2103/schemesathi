import os
import re

pb_path = r"C:\Users\chandru21\.gemini\antigravity\conversations\1eb92c5e-6c89-4aa9-a59b-9835238ce8fc.pb"

with open(pb_path, 'rb') as f_in:
    data = f_in.read()

# Extract all printable string contents that are long enough (e.g. >1000 chars and contain "DOCTYPE")
text = data.decode('iso-8859-1', errors='ignore')

matches = re.finditer(r'<!DOCTYPE html>(.+?)</html>', text, re.DOTALL | re.IGNORECASE)

blocks = [m.group(0) for m in matches if len(m.group(0)) > 100]
print(f"Found {len(blocks)} HTML blocks in pb.")

if blocks:
    with open("c:/ag/first_html_dump.html", "w", encoding="utf-8") as f_out:
        # Save the first one (might be the initial code)
        clean_text = ''.join(c for c in blocks[0] if c.isprintable() or c in '\n\r\t')
        f_out.write(clean_text)
