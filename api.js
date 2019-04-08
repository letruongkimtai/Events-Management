import moment from 'moment';

export function formatDate(dateString){
    const parsed = moment(new Date(dateString));
    if(!parsed.isValid()){
        return dateString;
    }
    return parsed.format('D MM YYYY');
}

export function getCountdownPart(eventDate){
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return{
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds'),
    };
}