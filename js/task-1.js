const listItems = document.querySelectorAll('.item');
//  console.log(listItems)
console.log(`Number of categories: ${listItems.length}`);

 listItems.forEach(listEl => {
  // console.log('');
  console.log(`category: ${listEl.firstElementChild.textContent}`);
  console.log(`Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`)
 })