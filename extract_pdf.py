import os
try:
    import pypdf
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

files = [
    r"c:\Users\Public\capiello-website\src\assets\capiello geam menu .pdf",
    r"c:\Users\Public\capiello-website\src\assets\capiello menu 2.pdf",
    r"c:\Users\Public\capiello-website\src\assets\capiellomenu1.pdf"
]

for filename in files:
    print(f"\n--- Extracting {os.path.basename(filename)} ---")
    try:
        reader = pypdf.PdfReader(filename)
        for i, page in enumerate(reader.pages):
            print(f"\nPage {i+1}:")
            print(page.extract_text())
    except Exception as e:
        print(f"Error reading {filename}: {e}")
