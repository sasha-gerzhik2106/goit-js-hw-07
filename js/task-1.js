const arr = document.querySelectorAll('.item')
    const itemCount = arr.length;
    console.log( "Number of categories: ", itemCount);
    arr.forEach(element => {
       const Tag = element.querySelector('h2').innerText;
       const arrAdd = element.querySelectorAll('li').length;
        console.log("Categories: ", Tag);
        console.log("Elements: ", arrAdd);
    });