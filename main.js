
const table = document.querySelector('.table');
const buttonAddColumn = document.querySelector('.add-column');
const buttonAddRow = document.querySelector('.add-row');
const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonRemove = document.querySelectorAll('.button-remove');
const tableWr = document.querySelector('.table-wr');
const roots = document.querySelector('#root');
const over =  document.querySelectorAll('.over');
const side =  document.querySelectorAll('.side');
const buttons = document.querySelectorAll('.buttons');


for (var i = 1; i < 5; i++) {
	
	addElement( table, 'table-row', 'tr');
	for (var k = 1; k < 5; k++) {
		let lastTableRow = table.lastElementChild;
		
		addElement( lastTableRow, 'table-cell', 'td');
	}
}

function addColumn() {
	let tableRow = document.querySelectorAll('.table-row');
	
	tableRow.forEach( tableRow => {
		let lastTableCell = tableRow.lastElementChild;

		addElement( tableRow, 'table-cell', 'td');

	});
	
}

buttonAddColumn.addEventListener('click', addColumn);

function addRow() {
	let lastTableRow = table.children;
	lastTableRow = [].slice.call(lastTableRow);
	
	let lastTableRowDataId = lastTableRow[0].children;
	
	lastTableRowDataId = [].slice.call(lastTableRowDataId);
	lastTableRowDataId = lastTableRowDataId.length;
	
	addElement( table,'table-row', 'tr');

	for (var i = 0; i < lastTableRowDataId; i++) {
		
		var createdTableRow = table.lastElementChild;
		addElement( createdTableRow, 'table-cell', 'td');

	}
	
}

buttonAddRow.addEventListener('click', addRow);

function addElement( parentElement, classOfTag, tag) {
	var createdElement = document.createElement(tag);
	createdElement.setAttribute('class', classOfTag);
	parentElement.appendChild(createdElement);
	
}

tableWr.addEventListener('mouseover', display);
tableWr.addEventListener('mouseover', position);

function display(event) {
	let target = event.target;
	let nSibling = target.nextElementSibling;
	let pSibling = target.previousElementSibling;
	let nParSiblimg = target.parentElement.nextElementSibling;
	let pParSiblimg = target.parentElement.previousElementSibling;

	if (target.tagName != 'TD') {

		return;

	} else {
		if (nParSiblimg === null  && pParSiblimg === null && nSibling === null && nSibling === null){
			//do nothing 
		}
		else if (nParSiblimg === null  && pParSiblimg === null ) {
			
			buttonRemoveColumn.style.display = 'block';

		} else if (nSibling === null && pSibling === null) {
			
			buttonRemoveRow.style.display = 'block';

		} else {

			buttonRemove.forEach( e => {
				e.style.display = 'block';
			});

			buttons.forEach( e => {
				e.style.display = 'block';
			});

		}

		target.removeEventListener('mouseover', display);
	}		
	
}

function position(event) {

	let target = event.target;
	
	if (target.tagName != 'TD') return;

	let posY = event.target.offsetTop;	
	let posX = event.target.offsetLeft;
	
	buttonRemoveColumn.style.marginLeft = posX+1 + 'px';
	buttonRemoveRow.style.marginTop = posY+1 + 'px';

	target.removeEventListener('mouseover', position);
	
}

function removeColumn() {
	let tableRow  = document.querySelectorAll('.table-row');

	tableRow.forEach( e => {

		let children = e.children;
		let childrens = [].slice.call(children);
		let id;


		childrens.forEach( e => {

			if (e.offsetLeft === buttonRemoveColumn.offsetLeft-1) {

				id = childrens.indexOf(e);

			}
		});

		childrens.forEach( e => {
			if (id === childrens.indexOf(e)) {
				e.remove();
			}
		});
	});

	buttonRemoveDisplay();
}

buttonRemoveColumn.addEventListener('click', removeColumn);

function removeRow() {
	let tableRow  = document.querySelectorAll('.table-row');
	tableRow = [].slice.call(tableRow);

	let id;

	tableRow.forEach( e => {
		if (e.offsetTop === buttonRemoveRow.offsetTop-1) {
			
			id = tableRow.indexOf(e);

		}
	});

	tableRow.forEach( e => {
		if(id === tableRow.indexOf(e)){
			e.remove();
		}
	});

	buttonRemoveDisplay();
}

buttonRemoveRow.addEventListener('click', removeRow);

function buttonRemoveDisplay(event) {
	
	buttonRemove.forEach( e => {
		
			e.style.display = 'none';
				
	});
	
}

over.forEach((e) => {
	e.addEventListener('mouseenter', buttonRemoveDisplay);
});

side.forEach((e) => {
	e.addEventListener('mouseenter', buttonRemoveDisplay);
});


console.log("onmouseenter", onmouseenter);
