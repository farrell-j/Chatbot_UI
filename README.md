# Chatbot_UI
Chatbot_UI Created Using v0.dev

This project is a customizable chatbot user interface built with React, TypeScript, and Tailwind CSS. The UI includes components for chatting, settings configuration, file uploads, and more.

## Features

- **Interactive Chat**: Allows users to send and receive messages with AI models.
- **Settings Configuration**: Adjust parameters like AI model selection, response streaming, temperature, and AI personality.
- **File Upload**: Supports file uploads within the chat.
- **Clipboard Copy**: Easily copy assistant responses to the clipboard.
- **PDF Export**: Placeholder function for exporting chat conversations to PDF.
- **Responsive Design**: Built with Tailwind CSS for a consistent look across devices.

## Technologies Used

- **React**: Core library for building user interfaces.
- **TypeScript**: Enhances JavaScript with type safety.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn/UI**: React component library for UI elements.
- **Lucide React**: Icon library for React.
- **React Hot Toast**: For toast notifications.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/chatbot-ui.git
   cd chatbot-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

- **Send Messages:** Type a message and click the send button.
- **Upload Files:** Click the upload icon to select a file.
- **Adjust Settings:** Navigate to the "Settings" tab to configure AI parameters.
- **Copy Responses:** Click the copy icon next to assistant messages to copy text.
- **Export to PDF:** Click the "Export to PDF" button in the settings tab (currently a placeholder).

## Customization

- **UI Components:** Modify the components in the `src/components/ui` directory to customize the UI.
- **Styling:** Tailwind CSS classes can be adjusted to change the design.
- **AI Integration:** Replace the placeholder AI service calls with your AI model integration in the `handleSendMessage` function.

## License

This project is licensed under the MIT License.

---

Feel free to customize further based on specific needs or additional details.
