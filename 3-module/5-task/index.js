function getMinMax(str) {
  let ourNumbers = str
        .split(' ')
        .filter(function (item) { return Number(item) });

      return {
        min: Math.min(...ourNumbers),
        max: Math.max(...ourNumbers),
      };
}
