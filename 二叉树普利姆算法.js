function Node(value){
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
    [max, max, 5, max, 0]
];

function prim(points, instances, start){
    const resultList = [];
    resultList.push(start);
    while(resultList.length < pointList.length){
        let startNode = null; // 参照节点
        let endNode = null; // 待连接节点
        let min = max; // 线长最小值
        // 外循环: 循环整个二维数组外层进行逐个比较
        for(let i = 0; i < instances.length; i++){
            // 内循环: 循环已连接的数组依次取出参考点进行比较
            for(let j = 0; j < resultList.length; j++){
                // 计算参考点在点数组的索引
                let index = points.indexOf(resultList[j]);
                // 根据索引来取出线长进行比较
                let line = instances[i][index];
                // 判断: 线长比之前的短且比较的点不在结果中, 则替换上一步的参照
                if(line < min && resultList.indexOf(points[i]) < 0){
                    startNode = resultList[j];
                    endNode = points[i];
                    min = line;
                }
            }
        }
        // 连接节点
        startNode.neighbor.push(endNode);
        endNode.neighbor.push(startNode);   
        startNode.values.push(endNode.value);
        endNode.values.push(startNode.value);
        resultList.push(endNode);
    }
    return resultList;
}

console.log(prim(pointList, instanceList, d));