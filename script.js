document.addEventListener('DOMContentLoaded', () => {
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');
    const currentDayTimeElement = document.getElementById('current-day-time');

    const updateCurrentTime = () => {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        currentDayTimeElement.textContent = now.toLocaleDateString('en-US', options);
    };

    setInterval(updateCurrentTime, 60000);
    updateCurrentTime();

    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            dayTabs.forEach(t => t.classList.remove('active'));
            dayContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('fade-in');
            });

            
            tab.classList.add('active');

            
            const contentId = tab.id.replace('tab-', 'content-');
            const newContent = document.getElementById(contentId);
            if (newContent) {
                newContent.classList.remove('hidden');

                setTimeout(() => {
                    newContent.classList.add('fade-in');
                }, 10);
            }
        });
    });

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const todayTab = document.getElementById(`tab-${today.substring(0, 3)}`);
    if (todayTab) {
        todayTab.click();
    } else {
        document.getElementById('tab-mon').click();
    }
});