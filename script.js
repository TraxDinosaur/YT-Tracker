document.addEventListener('DOMContentLoaded', () => {
    const videoTitle = document.getElementById('video-title');
    const publishDate = document.getElementById('publish-date');

    const steps = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3'),
        document.getElementById('step4'),
        document.getElementById('step5'),
        document.getElementById('step6')
    ];

    // Mock video data
    const videoData = {
        title: "Earning Using Script Playlist Video 1",
        publishDate: "26-08-2024",
        planningDone: True,
        scriptingDone: True,
        shootingDone: false,
        editingDone: false,
        reviewDone: false
    };

    // Update UI with mock data
    videoTitle.textContent = videoData.title;
    publishDate.textContent = videoData.publishDate;

    if (videoData.planningDone) {
        steps[0].classList.add('completed');
    }
    if (videoData.scriptingDone) {
        steps[1].classList.add('completed');
    }
    if (videoData.shootingDone) {
        steps[2].classList.add('completed');
    }
    if (videoData.editingDone) {
        steps[3].classList.add('completed');
    }
    if (videoData.reviewDone) {
        steps[4].classList.add('completed');
    }
    if (videoData.publishDate) {
        steps[5].classList.add('completed');
    }
});
