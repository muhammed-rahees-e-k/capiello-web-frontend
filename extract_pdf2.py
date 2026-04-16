import os
import subprocess
import sys

try:
    import pdfplumber
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pdfplumber"])
    import pdfplumber

files = [
    r'c:\Users\Public\capiello-website\src\assets\capiello geam menu .pdf',
    r'c:\Users\Public\capiello-website\src\assets\capiello menu 2.pdf',
    r'c:\Users\Public\capiello-website\src\assets\capiellomenu1.pdf'
]

for f in files:
    print(f"\n--- {os.path.basename(f)} ---")
    try:
        with pdfplumber.open(f) as pdf:
            for page in pdf.pages:
                print(page.extract_text())
    except Exception as e:
        print(f"Error: {e}")
