const apply = (enabled) =>
  document.documentElement.classList.toggle("stripe-dark-off", !enabled);

chrome.storage.sync.get({ enabled: true }, ({ enabled }) => apply(enabled));
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) apply(changes.enabled.newValue);
});
