function sumSalary(salaries) {
  let summaZarplat = 0
  for (let individualZarplata in salaries) {
    if (isFinite(salaries[individualZarplata])) {
      summaZarplat += salaries[individualZarplata];
    }
  }
  return summaZarplat;
}
