chrome.contextMenus.create({
    id: "cover_letter_gpt",
    title: "Generate cover letter from job description",
    contexts: ["page", "selection"]
});

chrome.contextMenus.create({
    id: "copy_text_1",
    title: "Generate cover letter",
    parentId: "cover_letter_gpt",
    contexts: ["page", "selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "copy_text_1") {
        let selectedText = info.selectionText;
    }
});