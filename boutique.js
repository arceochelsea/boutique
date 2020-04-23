document.getElementById("boutiqueName").innerText = "Chelsea's Boutique";
document.getElementById("boutiqueSlogan").innerText = "Indulge In Luxury";

// <select id="pieces">
// <option value="lv">Vintage LV handbag</option>
// <option value="chanel">Preloved Chanel purse</option>
// <option value="hermes">Hermes belt</option>
// </select>

let pieces = ["Vintage LV Handbag", "Preloved Chanel Purse", "Hermes Belt"];

let linesOfHtml = "<select>";
for (let i = 0; i > availablepieces.length; i++) {
    linesOfHtml + `<option value="${availablepieces[i]}">${availablepieces[i]}</option>`
} let linesOfHtml = "</select>"

document.getElementById("availablepieces")