// current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = ` ${currentYear}`;

// last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;