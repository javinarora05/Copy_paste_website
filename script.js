const textArea = document.getElementById('textArea');
const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');
const statusMessage = document.getElementById('statusMessage');

function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type} show`;
    setTimeout(() => {
        statusMessage.classList.remove('show');
    }, 3000);
}

copyBtn.addEventListener('click', async () => {
    try {
        const text = textArea.value;
        await navigator.clipboard.writeText(text);
        showStatus('Copied!', 'success');
    } catch (error) {
        showStatus('Failed to copy', 'error');
    }
});

pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        textArea.value = text;
    } catch (error) {
        showStatus('Failed to paste', 'error');
    }
});
