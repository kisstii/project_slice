function pageLoaded() {

	/*
	Todo applikációt készítünk, ami alapértelmezésben 10 üres mezőből áll, de ezt tudjuk bővíteni.
	Ki lehet pipálni az elvégzett feladatokat,de akár ki is lehet törölni azokat.
	*/

	//Változó a root-nak.
	let root = document.querySelector(".root");

	//El kell tárolni a sorok számát (10).
	let numRows = 10;
	
	//Külön változóba egy sor struktúrájának tárolása (div, input, button stb)
	let row = `
		<div class="row">
			<input type="checkbox">
			<input type="text">
			<button class="delete">delete</button>
		</div>
	`;

	//for ciklus a soroknak és hozzáadjuk a root-hoz.
	for (let i = 0; i < numRows; i++) {
		root.insertAdjacentHTML("beforeend", row);
	}

	//A root elemen kívül egy plusz gomb a lista végére (afterend).
	root.insertAdjacentHTML("afterend", `
		<button id="addNewRow">Add new row</button>
	`);

	//Click esemény adása a gombnak. Új sort hoz létre.
	function newItem() {
		root.insertAdjacentHTML("beforeend", row);

	//TODO: eseményfigyelőt rátenni az új "row"-ra

	}

	document.getElementById("addNewRow").addEventListener("click", newItem)

	//Kijelölöm az összes törlés gombot class name alapján és eltárolom külön változóba.
	let removeBtns = root.querySelectorAll(".delete");

	//for ciklus a click esemény rárakásához az összes törlés gombra.
	function removeItem(b) {
		b.target.parentElement.remove();
	}

	for (let i = 0; i < removeBtns.length; i++) {
		removeBtns[i].addEventListener("click", removeItem);
	}

}

window.addEventListener("load", pageLoaded);