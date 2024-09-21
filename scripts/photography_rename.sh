#!/bin/bash

# Directory containing images
DIRECTORY="../public/images/photography"

# Change to the specified directory
cd "$DIRECTORY" || exit

# Initialize counter
counter=1

# Loop through each image file in the directory
for file in *.{jpg,jpeg,png,heic,JPG,JPEG,PNG,HEIC}; do
    # Check if the file exists (to avoid issues if no files match)
    if [[ -e "$file" ]]; then
        # Create a new filename with leading zeros (adjust the number of zeros as needed)
        new_file=$(printf "%03d.jpg" "$counter")  # Change the extension as needed

        # Rename the file
        mv "$file" "$new_file"

        # Increment the counter
        ((counter++))
    fi
done

echo "Renaming complete!"
