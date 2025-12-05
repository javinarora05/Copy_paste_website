#📋 **Copy-Paste Helper (Clipboard API)**

A simple, clean, and modern web tool that lets you copy and paste text directly using the Navigator Clipboard API.
Built using HTML, CSS, and JavaScript, this mini-app provides a smooth user experience with animated UI elements and clear status messages.

🚀 Features

  ✏️ Editable Text Area – Type or paste any text.
  📋 Copy to Clipboard – Uses navigator.clipboard.writeText() to copy.
  📥 Paste from Clipboard – Uses navigator.clipboard.readText() to paste.
  ✅ Live Status Messages – Shows success/error messages.
  🎨 Modern UI – Gradient backgrounds, animations, responsive layout.
  📱 Mobile Friendly – Fully responsive for small screens.

📁 Project Structure
/
├── index.html      # Main interface markup
├── styles.css      # UI styling and animations
└── script.js       # Clipboard API logic (copy/paste)

🧩 How It Works
Clipboard — Copy

Your script.js calls the modern async Clipboard API:

await navigator.clipboard.writeText(text);

Clipboard — Paste
const text = await navigator.clipboard.readText();


Both features are wrapped in try–catch blocks and display a status message to the user.


script

📦 Installation & Usage
🔧 Option 1 — Open Locally

Download the repository.

Open index.html in any modern browser (Chrome, Edge, Firefox, Safari).

Done — everything runs client-side!

🌐 Option 2 — Host on GitHub Pages

Upload the files to GitHub.

Go to Settings → Pages.

Choose the main branch and root folder.

Your site will be live!

🔐 Browser Requirements

The Clipboard API requires:

HTTPS or localhost

Modern browsers (Chrome 66+, Edge 79+, Safari 13+, Firefox 63+)

🛠️ Technologies Used

HTML5 — Structure

CSS3 — UI, gradients, animations

JavaScript (ES6) — Clipboard API

Navigator Clipboard API (writeText, readText)

📜 License

This project is open-source and free to use.
Feel free to modify, improve, or integrate it into your own apps!
