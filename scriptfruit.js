const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.onkeyup = function search(str) {
	let results = [];
	let inputs = input.value;
    if (inputs.length){
        results = fruit.filter((keyword) =>{
        return keyword.toLowerCase().toUpperCase().includes(inputs.toLowerCase().toUpperCase());
    });
    console.log(results);
    }
	
    showSuggestions(results);    
}


function searchHandler(e) {

}

function showSuggestions(results, inputVal) {
    const suggest = results.map((list)=>{
        return "<li onclick = useSuggestion(this)>" + list + "</li>";
    });
    suggestions.innerHTML = "<ul>" + suggest.join('') + "</ul>";
}



function useSuggestion(e) {
    input.value = e.innerHTML;
    suggestions.innerHTML = '';
    console.log(e);
    
}
    


input.addEventListener('keyup', searchHandler);
//suggestions.addEventListener('click', useSuggestion);