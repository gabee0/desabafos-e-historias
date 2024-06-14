function post() {
    var postInput = document.getElementById("postInput").value;
    if (postInput.trim() === "") {
        alert("Digite algo para postar!");
        return;
    }
    var postsContainer = document.getElementById("postsContainer");
    var postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = postInput;
    postsContainer.prepend(postElement);
    document.getElementById("postInput").value = "";
}
