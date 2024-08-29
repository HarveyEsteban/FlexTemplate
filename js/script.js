let saying = document.getElementById('qoutes');
let authors = document.getElementById('author');



const quotsss = 
[
    {
        "text": "“Do the best you can until you know better. Then when you know better, do better.”",

        "author" : "-Maya Angelou"
    },

    {
        "text" : "“We can’t become what we need to be by remaining what we are.” ",
        "author" : "-Oprah Winfrey"
    },

    {
        "text" : "“Be not afraid of growing slowly; be afraid only of standing still.” ",
        "author" : "-Chinese Proverb"
    },

    {
        "text" : "“If there is no struggle, there is no progress.”",
        "author" : "-Frederick Douglass"
    }
];



function newQuotes ()
{
    let index = Math.floor(Math.random()*quotsss.length);

    saying.innerText = quotsss[index].text;
    authors.innerText = quotsss[index].author;

    console.log(authors);
}

window.setInterval(newQuotes, 10000);





