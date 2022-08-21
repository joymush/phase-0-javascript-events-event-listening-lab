function addingEventListener() {
    prompt('What have you done');
    const input = document.getElementById("button");
    input.addEventListener('click', addingEventListener);
}