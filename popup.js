import { $ } from "./utils.js";

const submitBtn = $("#submit_btn");
const textarea = $("textarea");

// Load saved subjects when popup opens
chrome.storage?.local?.get(["subjects"], (result) => {
  if (result?.subjects) {
    textarea.value = result.subjects;
  }
});

// Save subjects whenever textarea changes
textarea.addEventListener("input", () => {
  chrome.storage?.local?.set({ subjects: textarea.value });
});

submitBtn.addEventListener("click", () => {
  if (textarea.value === "") {
    alert("Bạn chưa nhập môn học");
    return;
  }
  const subjects = textarea.value;
  chrome.tabs?.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        type: "REGISTER",
        subjects,
      });
    }
  );
});

const version = $("#version");
version.textContent = chrome.runtime?.getManifest().version || "0.1.0";
