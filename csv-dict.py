import csv

def custom_csv_to_dict(file_path):
    data_dict = {}
    with open(file_path, 'r', newline='', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            key = row['Brick Number']
            brick = row['Brick']
            last_name = row['Last Name - Search Word']
            
            # Clean the multi-line content in the 'Brick' column
            # Replace newlines with spaces to ensure it's a single line
            brick_cleaned = brick.replace('\n', ' ')
            
            # Store the cleaned data in the dictionary
            data_dict[key] = {
                'Brick': brick_cleaned.strip(),
                'Last Name': last_name
            }
    return data_dict

# Replace 'donors.csv' with your CSV file name
csv_file_path = 'donors.csv'
result_dict = custom_csv_to_dict(csv_file_path)

# Now you have a dictionary where keys are from the 'Brick Number' column in the CSV file
# and values are dictionaries containing the cleaned 'Brick' content and 'Last Name'
print(result_dict["1"])
# print(result_dict)
