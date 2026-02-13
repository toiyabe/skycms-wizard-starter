// Demo dynamic logic to move items between tiles based on environment detection
// Replace these booleans with real checks.
const env = {
  storageReady: false,          // try toggling
  publisherUrlReady: true,      // example placeholder
  emailServiceReady: false      // example placeholder
};

function createBeforeItem(icon, title, badgeClass, badgeText) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mb-3 fade-in';
  wrapper.innerHTML = `
    <div class="d-flex align-items-start gap-3">
      <div class="mt-1" aria-hidden="true">${icon}</div>
      <div>
        <div class="fw-semibold">${title}</div>
        <span class="badge rounded-pill ${badgeClass}">${badgeText}</span>
      </div>
    </div>`;
  return wrapper;
}

function moveStorageIfNeeded() {
  const alreadyList = document.getElementById('alreadyList');
  const beforeList  = document.getElementById('beforeList');
  const storageItem = alreadyList?.querySelector('[data-id="storage"]');

  if (!env.storageReady && storageItem) {
    // Remove from Already Set Up
    storageItem.remove();
    // Add a tile to Before You Begin
    const node = createBeforeItem('☁️', 'Storage', 'badge-attention', 'Needs configuration');
    beforeList.appendChild(node);
  }
}

// On DOM ready
document.addEventListener('DOMContentLoaded', () => {
  moveStorageIfNeeded();
});
