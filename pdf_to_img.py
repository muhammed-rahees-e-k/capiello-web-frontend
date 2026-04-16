import pdfplumber

files = [
    (r"c:\Users\Public\capiello-website\src\assets\capiello geam menu .pdf", "menu_img_1.png"),
    (r"c:\Users\Public\capiello-website\src\assets\capiello menu 2.pdf", "menu_img_2.png"),
    (r"c:\Users\Public\capiello-website\src\assets\capiellomenu1.pdf", "menu_img_3.png")
]

for pdf_path, img_path in files:
    try:
        with pdfplumber.open(pdf_path) as pdf:
            if len(pdf.pages) > 0:
                first_page = pdf.pages[0]
                im = first_page.to_image(resolution=150)
                im.save(img_path, format="PNG")
                print(f"Saved {img_path}")
    except Exception as e:
        print(f"Error converting {pdf_path}: {e}")
