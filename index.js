let addbtn = document.getElementById("add-btn")
addbtn.addEventListener('click',addChapter)
function addChapter(e)
{
  let parentList = document.getElementById('myList');
  if(parentList.children[0].className == 'emptyMsg')
  {
    parentList.children[0].remove()
  }
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling
  console.log(currentInput.value)
  let newLi = document.createElement('li')
  newLi.className = "list-group-item d-flex justify-content-between"
  newLi.innerHTML = `<h3 class="flex-grow-1">${currentInput.value}</h3>
  <button id="edit-btn" class="btn btn-warning" type="button" id="button-addon2" onclick="editChapter(this)">Edit</button>
 <button id="rem-btn" class="btn btn-danger" type="button" id="button-addon2" onclick="removeChapter(this)">Remove</button>`
  list  = document.getElementById('myList')
  list.append(newLi)
}
remBtn = document.getElementById('rem-btn')
remBtn.addEventListener('click',removeChapter)

function removeChapter(currElement)
{
    currElement.parentElement.remove()
    let parentList = document.getElementById('myList');
    if(parentList.children.length<=0)
    {
        let newEmptyString = document.createElement("h3")
        newEmptyString.classList.add("emptyMsg")
        newEmptyString.textContent = "No chapters"
        parentList.appendChild(newEmptyString)
    }
    
}

function editChapter(currElement)
{
    if(currElement.textContent == "Done")
    {
        currElement.textContent = "Edit"
        let currChapterName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3')
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currChapterName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }
    else
    {
        currElement.textContent = "Done"
    let currChapterName = currElement.previousElementSibling.textContent
    let currInput = document.createElement('input');
    currInput.type = "text"
    currInput.className = "form-control"
    currInput.value = currChapterName

    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
    
}