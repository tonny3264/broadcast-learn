function Node(value) {
  this.value = value;
  this.neighbor = [];
  this.values = [];
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

const max = 10000;
const pointList = [a, b, c, d, e];
const instanceList = [
  [0, 4, max, 3, max],
  [4, 0, 6, 8, max],
  [max, 6, 0, 7, 5],
  [3, 8, 7, 0, max],
  [max, max, 5, max, 0],
];

function canLink(resultList, start, end) {
  let n1 = n2 = null;
  for(let i = 0; i < resultList.length; i++){
    if(resultList[i].indexOf(start) > -1){
      n1 = resultList[i];
    }
    if(resultList[i].indexOf(end) > -1){
      n2 = resultList[i];
    }
  }
  // 两个点在同一个部落, 放回false
  if(n1 != null && n2 != null && n1 == n2){
    return false;
  }
  return true;
}

function link(resultList, start, end){
  let n1 = n2 = null;
  for(let i = 0; i < resultList.length; i++){
    if(resultList[i].indexOf(start) > -1){
      n1 = resultList[i];
    }
    if(resultList[i].indexOf(end) > -1){
      n2 = resultList[i];
    }
  }
  // 两个都是新的点
  if(n1 == null && n2 == null){
    resultList.push([start, end]);
  }
  // end点为新的点
  else if(n1 != null && n2 == null){
    n1.push(end);
  }
  // start为新的点
  else if(n1 == null && n2 != null){
    n2.push(start);
  }
  // start和end是两个部落:合并部落
  else if(n1 != null && n2 != null && n1 != n2){
    let index = resultList.indexOf(n2);
    n1.push(...n2);
    resultList.splice(index, 1);
  }
  start.neighbor.push(end);
  end.neighbor.push(start);
  start.values.push(end.value);
  end.values.push(start.value);
}

function klusi(points, instances) {
  const resultList = [];
  let startNode, endNode;
  while (true) {
    let min = max;
    for (let i = 0; i < instances.length; i++) {
      for (let j = 0; j < instances.length; j++) {
        if (
          instances[i][j] < min &&
          i != j && 
          canLink(resultList, points[i], points[j])
        ) {
          min = instances[i][j];
          startNode = points[i];
          endNode = points[j];
        }
      }
    }
    console.log("min ====", min);
    // 连接节点
    link(resultList, startNode, endNode);
    if(resultList.length == 1 && resultList[0].length >= points.length){
      break;
    }
  }
  return resultList;
}

console.info(klusi(pointList, instanceList));
