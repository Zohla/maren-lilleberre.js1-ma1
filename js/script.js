const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


/* Question 1 */
const cat = {
    complain: function () {
        console.log("Meow");
    }
}
cat.complain();


/* Question 2 */
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


/* Question 3 */
heading.style.fontSize = "2em";


/* Question 4 */
heading.classList.add("subheading")


/* Question 5 */
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => {
    p.style.color = "red";
});


/* Question 6 */
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


/* Question 7 */
function writeNames(list) {
    list.forEach(entry => {
        console.log(entry.name);
    });

}
writeNames(cats);


/* Question 8 */
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    let catObj;

    for (let i = 0; i < cats.length; i++) {
        let cat = cats[i];

        if (!cat.hasOwnProperty("age")) {
            cat.age = "Age unknown";
        }
        catObj += `<div><h5>${cat.name}</h5><p>${cat.age}</p></div>`;

    }
    catContainer.innerHTML += catObj;

}
createCats(cats);