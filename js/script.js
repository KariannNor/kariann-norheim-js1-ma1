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
        age: 28
    }
];


// Question 1

const cat = {
    complain: "Meow!",
    getComplain: function(){
        console.log(this.complain);
    }
 }

 cat.getComplain();

 
 
// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subHeading");

// Question 5

const paragraphs = document.querySelectorAll("p");
    
for (let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
} 


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";


// Question 7

function list (names){

for (let i = 0; i < names.length; i++){
    console.log(names[i].name);
}

}
list(cats);

// This also works and will log each name //

// cats.forEach(function(cats){
//    console.log(cats.name);
// });


// Question 8

function createCats(cats){
    let html = "";
    
    for (let i = 0; i < cats.length; i++){
        let noAge = "Age unknown";

        if (cats[i].age){
            noAge = cats[i].age;
        }

        html += `<div>
                 <h5>Name: ${cats[i].name}</h5>
                 <p>Age: ${noAge}</p>
                 </div>`;
    }

    return html;

}

const container = document.querySelector(".cat-container");
container.innerHTML = createCats(cats);