var minIgnoreNaN = function(values) {
    return Math.min(...values.filter(value => !isNaN(value)));
};

var maxIgnoreNaN = function(values) {
    return Math.max(...values.filter(value => !isNaN(value)));
};

for (i=0; i<data1.length; i++) {
    data1[i].parentItem = data0.find(item => item.id === data1[i].parentId);
}

var dataAll = data0.concat(data1);

var dwMin0 = minIgnoreNaN(data0.map(item => item.dw));
var dwMin1 = minIgnoreNaN(data1.map(item => item.dw));
var dwMax0 = maxIgnoreNaN(data0.map(item => item.dw));
var dwMax1 = maxIgnoreNaN(data1.map(item => item.dw));
var dwMin = Math.min(dwMin0, dwMin1);
var dwMax = Math.max(dwMax0, dwMax1);
var coMin0 = minIgnoreNaN(data0.map(item => item.co));
var coMin1 = minIgnoreNaN(data1.map(item => item.co));
var coMax0 = maxIgnoreNaN(data0.map(item => item.co));
var coMax1 = maxIgnoreNaN(data1.map(item => item.co));
var coMin = Math.min(coMin0, coMin1);
var coMax = Math.max(coMax0, coMax1);
var capMin0 = minIgnoreNaN(data0.map(item => item.cap));
var capMin1 = minIgnoreNaN(data1.map(item => item.cap));
var capMax0 = maxIgnoreNaN(data0.map(item => item.cap));
var capMax1 = maxIgnoreNaN(data1.map(item => item.cap));
var capMin = Math.min(capMin0, capMin1);
var capMax = Math.max(capMax0, capMax1);
var countMin = minIgnoreNaN(dataAll.map(item => item.count));
var countMax = maxIgnoreNaN(dataAll.map(item => item.count));


