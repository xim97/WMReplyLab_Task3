export default function getEventsInShowingMonth(events, showingDate) {
    return events.filter(event => {
        const isThisMonth = event.startTime.getMonth() === showingDate.getMonth();
        const isThisYear = event.startTime.getYear() === showingDate.getYear();        
        return isThisMonth && (isThisYear || event.isEveryYear);
    }
    );
}