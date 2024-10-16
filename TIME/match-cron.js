function matchCron(inputCron, date) {
    const cronParts = inputCron.split(" ");
    const cron = {};

    cronParts.forEach((part, i) => {
        if (part === "*") return;
        switch (i) {
            case 0:
                cron.minute = part;
                break;
            case 1:
                cron.hour = part;
                break;
            case 2:
                cron.date = part;
                break;
            case 3:
                cron.month = part;
                break;
            case 4:
                cron.day = part;
                break;
        }
    });

    const dateParts = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay(),
    };

    return Object.keys(cron).every(key => cron[key] === dateParts[key].toString());
}