import os
# from datetime import datetime


def getFilesContaining(filename):
    paths = (os.path.join(root, f) for root, dirs, files in sorted(os.walk('.'))
             for f in files)
    return (path for path in paths if filename in path)


found = getFilesContaining("index.html")
content = ""
prev = ["", "", ""]
depth = 0
for item in found:
    ts = os.path.getmtime(item)
    item = item.replace("index.html", "").replace("./", "")
    split = item.split("/")
    i = 0
    for segment in split:
        if segment == "":
            continue
        i += 1
        if segment != prev[i - 1]:
            depth = i
            if depth == 1:
                content += f"\n### {segment}\n\n"
    for n in range(depth - 2):
        content += "   "
    prev = split
    entry = item
    # entry = f"{item} ({datetime.utcfromtimestamp(ts).strftime('%d/%m/%Y %H:%M:%S')} UTC)"
    content += f"- [{entry}](https://gitdocumentatie.logius.nl/publicatie/{entry}) [:scroll:](https://logius-standaarden.github.io/publicatie/{entry} \"Preview op GitHub Pages\")\n"
print(content)

f = open("README.md", "w")
f.write("# publicatie\n\nDe inhoud van deze repository wordt dagelijks gepubliceerd naar "
        "`gitdocumentatie.logius.nl/publicatie`.\n\n## Paginalijst\n\n"
        "Klik op het pad om naar de pagina op logius.nl te gaan. Klik op :scroll: om de pagina op GitHub Pages te zien.\n")
f.write(content)
f.close()
