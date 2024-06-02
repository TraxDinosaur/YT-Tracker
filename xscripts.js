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

    // Fetch data from a JSON file or API endpoint
    fetch('data.json')
        .then(response => response.json())
        .then(videoData => {
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
        })
        .catch(error => {
            console.error('Error fetching video data:', error);
        });
});
