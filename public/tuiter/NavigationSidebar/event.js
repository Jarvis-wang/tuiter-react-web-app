const handleEventTarget = (event) => {
    const target = event.target;

    $(target)
        .css('background-color', 'blue')
        .css('color', 'white');
}
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);