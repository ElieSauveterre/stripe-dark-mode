const setBadge = (enabled) =>
  chrome.action.setBadgeText({ text: enabled ? "" : "off" });

chrome.storage.sync.get({ enabled: true }, ({ enabled }) => setBadge(enabled));

chrome.action.onClicked.addListener(async () => {
  const { enabled } = await chrome.storage.sync.get({ enabled: true });
  await chrome.storage.sync.set({ enabled: !enabled });
  setBadge(!enabled);
});
