slider = document.getElementById("slider");

document.querySelectorAll("a.dota").forEach(item => {
  item.addEventListener("click", event => {
    var position = item.dataset.position;
    
    removeClassFromSiblings(item, "active");
    item.classList.add("active");
    slider.style.transform = "translateX(" + position + ")";
  });
});

document.querySelectorAll("span.arrow").forEach(item => {
  item.addEventListener("click", event => {
    var currentActiveDot = document.querySelector(".dot.active");

    if (item.classList.contains("prev")) {
      if (
        currentActiveDot.previousElementSibling != "undefined" &&
        currentActiveDot.previousElementSibling != null
      ) {
        currentActiveDot.previousElementSibling.click();
        
      } else {
        document.querySelector("span.dot:last-of-type").click();
      }
    } else {     
      if (
        currentActiveDot.nextElementSibling != "undefined" &&
        currentActiveDot.nextElementSibling != null
      ) {
        currentActiveDot.nextElementSibling.click();
        
      } else {
        document.querySelector("span.dot:first-of-type").click();

      }
    }
  });
});

function removeClassFromSiblings(elem, classToRemove) {
  var sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      sibling.classList.remove(classToRemove);
    }
    sibling = sibling.nextSibling;
  }
}
