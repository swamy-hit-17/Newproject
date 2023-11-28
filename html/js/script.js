document.addEventListener('DOMContentLoaded', function() {
    const dateSlotBoxes = document.querySelectorAll('.date-slot-box');

    dateSlotBoxes.forEach(box => {
        box.addEventListener('click', function() {
            dateSlotBoxes.forEach(el => {
                el.classList.remove('selected');
            });

            this.classList.add('selected');
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const timeSlotBoxes = document.querySelectorAll('.time-slot-box');

    timeSlotBoxes.forEach(box => {
        box.addEventListener('click', function() {
            timeSlotBoxes.forEach(el => {
                el.classList.remove('selected');
            });

            this.classList.add('selected');
        });
    });
});
