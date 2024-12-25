import pymupdf

def getText(filename : str):
    """
    Takes a filename of a pdf as input and returns the text within the filename as an array
    """
    file = pymupdf.open(filename)
    fullText = ""
    for pageNum in range(file.page_count):
        page = file.load_page(pageNum) 
        fullText += page.get_text()
    return fullText


