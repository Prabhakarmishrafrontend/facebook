var addFriend = document.querySelector("#add")
var istatus = document.querySelector("h5")
var removeBtn = document.querySelector("#remove")


addFriend.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addFriend.innerHTML = "Confirmed"
});

removeBtn.addEventListener("click", function(){
    istatus.innerHTML = "Freind List Removed"
    istatus.style.color = "red"
    removeBtn.innerHTML = "Removed"
});