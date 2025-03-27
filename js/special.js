/* Load HTML via Fetch
*/

const targetHTML = document.getElementById("htmlTarget");
const loadHTML = HTMLsourceFile => {
    fetch(HTMLsourceFile)
    .then(res => {
        if (res.ok) {
            return res.text();
        }
    })
    .then(resultHTML => {
        targetHTML.innerHTML = resultHTML;
    })
}

