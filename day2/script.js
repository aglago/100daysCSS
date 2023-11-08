//collecting the icon into a variable
const icon = document.getElementById('icon');

//adding a click event listener to icon
icon.addEventListener('click', ()=> {
    /**
     * if the icon div has a class name "exit"
     */
    if (icon.classList.contains("exit"))
    {
        icon.classList.remove("exit");
        icon.classList.add("reverse_animation");
        
        /**
         * at the end the icon div becomes:
         * <div class="icon reverse_animation">
         */
    }
    else
    {
        icon.classList.add("exit");
        icon.classList.remove("reverse_animation");

        /**
         * at the end the icon div becomes:
         * <div class="icon exit">
         */
    }
})