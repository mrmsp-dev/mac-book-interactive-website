function memoryCost(isprice) {
	if (isprice) {
		document.getElementById("memory-amount").innerText = parseInt(0);
	}
	else {
		document.getElementById("memory-amount").innerText = parseInt(180);
	}
}


function storgeCost(isStorge, anotherStorge) {
	if (isStorge) {
		document.getElementById("storge-amount").innerText = parseInt(180);
	}
	else if (isStorge == false) {
		document.getElementById("storge-amount").innerText = parseInt(100);
	}
	if (isStorge == false && anotherStorge == true) {
		document.getElementById("storge-amount").innerText = parseInt(0);
	}
}


function deleveryCost(delevered) {
	if (delevered) {
		document.getElementById("delevery-amount").innerText = parseInt(0);
	}
	else {
		document.getElementById("delevery-amount").innerText = parseInt(20);
	}
}


function totalPrice() {
	const bestPrice = parseInt(document.getElementById("best-amount").innerText)
	const memoryCost = parseInt(document.getElementById("memory-amount").innerText);
	const storgeCost = parseInt(document.getElementById("storge-amount").innerText);
	const deleveryCost = parseInt(document.getElementById("delevery-amount").innerText);
	let totalPrice = parseInt(bestPrice + memoryCost + storgeCost + deleveryCost);
	document.getElementById("total-amount").innerText = totalPrice;
	document.getElementById("last-amount").innerText = totalPrice;
}


function cuponPrice() {
	cuponValue = document.getElementById("cupon-input");
	const cuponText = cuponValue.value;
	if (cuponText == "stevekaku") {
		let lastAmount = parseFloat(document.getElementById("last-amount").innerText);
		const discountAmount = (lastAmount / 100) * 20;
		const totaldiscountAmount = lastAmount - discountAmount;
		document.getElementById("last-amount").innerText = totaldiscountAmount;
	}
	cuponValue.value = '';
}


/* ------------------------------------------
				even handler 
 ------------------------------------------*/

// even handler memory 8gb
document.getElementById("8gb-memory").addEventListener("click", function () {
	memoryCost(true);
	totalPrice();
})


// even handler memory 16gb
document.getElementById("16gb-memory").addEventListener("click", function () {
	memoryCost(false);
	totalPrice();
})


// even handler storge 256gb SSD
document.getElementById("256gb-storge-btn").addEventListener("click", function () {
	storgeCost(false, true);
	totalPrice();
})


// even handler storge 512gb SSD
document.getElementById("512gb-storge-btn").addEventListener("click", function () {
	storgeCost(false);
	totalPrice();
})


// even handler storge 1TB SSD
document.getElementById("1tb-storge-btn").addEventListener("click", function () {
	storgeCost(true);
	totalPrice();
})


// even handler Delevery Button
document.getElementById("free-delevery-btn").addEventListener("click", function () {
	deleveryCost(true);
	totalPrice();
})


// even handler Delevery cost
document.getElementById("costly-delevery-btn").addEventListener("click", function () {
	deleveryCost(false);
	totalPrice();
})


// even handler Cupon cost
document.getElementById("cupon-btn").addEventListener("click", function () {
	cuponPrice();
})