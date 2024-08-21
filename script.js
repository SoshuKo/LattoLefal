function replaceText() {
    const inputText = document.getElementById("input-text").value;

    // 置換パターンをオブジェクトで定義
    const replacements = {
        "hng": "W",
        "kh": "kh",
        "gh": "gh",
        "ch": "cy",
        "sh": "S",
        "zh": "j",
        "j": "dj",
        "ya": "A",
        "bm": "B",
        "ts": "c",
        "dn": "D",
        "ye": "E",
        "gn": "G",
        "kn": "K",
        "hl": "L",
        "hm": "M",
        "hn": "N",
        "yo": "O",
        "pm": "P",
        "hr": "R",
        "tn": "T",
        "yu": "U",
        "ng": "w",
        "ks": "x"
    };

    let outputText = inputText;

    // 置換処理
    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        outputText = outputText.replace(regex, value);
    }

    // 結果を表示
    document.getElementById("output-text").textContent = outputText;
}
