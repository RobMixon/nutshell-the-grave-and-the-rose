const userConverter = (obj) => {
    const userHTML = 
    `
    <div class="user__profilePicture">
            <img class="mainUserImage" src="./images/userIcon.png">
        </div>
        <div class="user__userName">
        <p>${obj.username} <sup>&#8226;</sup></p>
    </div>
    `
    return userHTML
}


export default userConverter;