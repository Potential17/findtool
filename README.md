# Find and Replace Tool

A simple web application built with React that allows users to find and replace text within a document.

## Features

- Text input area for pasting or typing content
- Find text functionality
- Replace text functionality
- Case-sensitive search option
- Replace all occurrences at once
- Clean and intuitive user interface

## Assumptions and Design Choices

1. **Real-time Processing**: The tool processes the text immediately when the "Replace All" button is clicked.

2. **Case Sensitivity**: Users can toggle case-sensitive search with a checkbox.

3. **Text Preservation**: The original text formatting is preserved during find and replace operations.

4. **Input Validation**: Empty find queries are ignored to prevent accidental replacements.

5. **Regular Expressions**: The tool uses RegExp for case-insensitive searches.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open your browser to the local development URL

## Technologies Used

- React
- Vite
- CSS3