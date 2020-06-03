let the_text = "The cat sat on the mat";
let split_text ="";

splitText(" ");
splitText("");

function splitText(separator){
    split_text = the_text.split(separator);
   
    let html = "<p>";
        for (let count=0; count<split_text.length; count++){
            html += split_text[count] + "<br>";
        }

    html += "</p>"
        if (separator === " "){
        let splitEl = document.getElementById("split_word");
        splitEl.innerHTML = html;
        }
        else {
            let splitEl = document.getElementById("split_each");
        splitEl.innerHTML = html;
        }
}

