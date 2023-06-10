const obj = {
	name: 'vlad',
	gender: 'myj',
	statys: 'it',
};

function objArr(obj) {
	let arrObj = [];
	let arrIndex = [];

	for (let key in obj) {
		arrObj.push(obj[key]);
		arrIndex.push(key);
	}

	return [arrObj, arrIndex];
}

const [resultObj, resultIndex] = objArr(obj);
console.log(resultObj, resultIndex);
