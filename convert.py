import csv

# Read CSV file
with open('table.csv', 'r') as csvfile:
    csvreader = csv.reader(csvfile)
    data = list(csvreader)

# Generate HTML table
html_table = "<table>"
for row in data:
    html_table += "<tr>"
    for cell in row:
        html_table += f"<td>{cell}</td>"
    html_table += "</tr>"
html_table += "</table>"

# Write HTML to a file or send it to a web page
with open('output.html', 'w') as htmlfile:
    htmlfile.write(html_table)
