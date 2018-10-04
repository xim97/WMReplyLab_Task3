export default function findIntersections(events, newEvent) {
    let intersection = events.find(event => 
        event.startTime <= newEvent.startTime && event.finishTime >= newEvent.startTime
    );
    return intersection !== undefined;
}