document.getElementById("boutiqueName").innerText = "Chelsea's Boutique";
document.getElementById("boutiqueSlogan").innerText = "Indulge In Luxury";

let pieces = ["Vintage LV Handbag", "Preloved Chanel Purse", "Hermes Belt"];

let dropDownList = "<select>";
for (let i = 0; i < pieces.length; i++) {
    dropDownList = dropDownList + `<option value="${pieces[i]}">${pieces[i]}</option>`;
} 
dropDownList = dropDownList + "</select>";

document.getElementById("boutiquePieces").innerHTML = dropDownList;

// <select id="pieces">
// <option value="lv">Vintage LV handbag</option>
// <option value="chanel">Preloved Chanel purse</option>
// <option value="hermes">Hermes belt</option>
// </select>
