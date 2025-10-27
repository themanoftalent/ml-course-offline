export function positionElements(numElements, maxNumNeurons) {
  const interval = (maxNumNeurons - 1 - numElements + 1) / 2;

  // Create an array of positions for each element
  const positions = [];
  for (let i = 0; i < numElements; i++) {
    positions.push(interval + i);
  }
  return positions;
}

export function makeJsonArray(jsonArray) {
  const xyValues = [];
  const yValues = [];

  jsonArray.forEach((item) => {
    xyValues.push([item.x1, item.x2]);
    yValues.push(item.y);
  });

  return [xyValues, yValues];
}

export function numNeurons(network) {
  let sum = 0;
  for (let i = 0; i < network.length - 1; i++) {
    sum += network[i] * network[i + 1];
  }
  return sum;
}
