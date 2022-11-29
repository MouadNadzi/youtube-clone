var videoGrid = document.getElementById("video-grid");

function CreateVideo(
    channelName,
    channelPicture,
    videoTitle,
    videoTumbnail,
    videoViews,
    videoTime
) {
    const videoInfo = `<div class="video-preview"> <div class="video-preview-thumbnail"> <video class="thumbnail" poster="${videoTumbnail}" alt=""></video> </div> <div class="video-preview-info"> <div class="channel-picture"> <img class="profile-picture" src="${channelPicture}" alt="profile picture"> </div> <div class="video-info"> <p class="video-title">${videoTitle}</p> <p class="video-author">${channelName} &#10003; </p> <p class="video-stats"> <span class="video-stats-views">${videoViews}</span> views &#183; <span class="video-stats-time">${videoTime}</span> ago </p> </div> </div> </div>`;
    videoGrid.innerHTML += videoInfo;
}

//Template
for (let i = 0; i < 16; i++) {
    CreateVideo(
        "Youtube Clone",
        "assets/images/profile.png",
        "Let's make a youtube clone",
        "assets/images/thumbnail.png",
        "3.4M",
        "1 month"
    );
}
