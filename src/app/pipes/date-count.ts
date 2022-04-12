export class DateCount {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInDay = 86400; // 60sec a min * 60min an hr * 24hrs a day

    var dateDifferenceSeconds = dateDifference*0.001; // convert miliseconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && todayWithNoTime > value) {
      return dateCounter;
    }else {
      return 0;
    }
  }

}

