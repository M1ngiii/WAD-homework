document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts-container");

    /*
    Your JSON bin has been created, with id 292847112c22.

    URI to access this JSON bin:

    https://json.extendsclass.com/bin/292847112c22
    URI to access this JSON in a text editor:

    https://extendsclass.com/jsonstorage/292847112c22
    */
    //fetch('https://json.extendsclass.com/bin/292847112c22')
    fetch('src\\json\\data.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const createTime = document.createElement("p");
                createTime.className = "createTime-actions";
                
                const postDiv = document.createElement("div");
                postDiv.className = "posts";

                const postHeader = document.createElement("div");
                postHeader.className = "post-header";

                const profileImage = document.createElement("img");
                profileImage.className = "post-header-actions";
                profileImage.src = post.profilepic;
                profileImage.alt = "User Profile Picture";

                const username = document.createElement("h2");
                username.textContent = post.user;

                postHeader.appendChild(profileImage);
                postHeader.appendChild(username);

                const postImage = document.createElement("img");
                postImage.src = post.image;
                postImage.alt = "Post Image";
                postImage.className = "post-image";

                const postContent = document.createElement("p");
                postContent.textContent = post.content;
                postContent.className = "post-content";

                const postActions = document.createElement("div");
                postActions.className = "post-actions";

                const likeButton = document.createElement("button");
                likeButton.textContent = "Like";

                const commentButton = document.createElement("button");
                commentButton.textContent = "Comment";

                const shareButton = document.createElement("button");
                shareButton.textContent = "Share";

                postActions.appendChild(likeButton);
                postActions.appendChild(commentButton);
                postActions.appendChild(shareButton);

                postDiv.appendChild(postHeader);
                postDiv.appendChild(postImage);
                postDiv.appendChild(postContent);
                postDiv.appendChild(postActions);

                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
