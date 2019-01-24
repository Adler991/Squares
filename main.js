
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
// 
let cellIndex;


for (let i = 1; i < 5; i++) {
	
	addElement( table, 'table-row', 'tr', i);
	for (let k = 1; k < 5; k++) {
		let lastTableRow = table.lastElementChild;
		
		addElement( lastTableRow, 'table-cell', 'td', k);
		
	}
}

function addColumn() {
	let tableRow = document.querySelectorAll('.table-row');
	
	tableRow.forEach( tableRow => {
		

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

	for (let i = 0; i < lastTableRowDataId; i++) {
		
		let createdTableRow = table.lastElementChild;
		addElement( createdTableRow, 'table-cell', 'td');


	}
	
}

buttonAddRow.addEventListener('click', addRow);

function addElement( parentElement, classOfTag, tag, dataId) {
	let createdElement = document.createElement(tag);
	createdElement.setAttribute('class', classOfTag);
	createdElement.setAttribute('data-id', dataId);
	parentElement.appendChild(createdElement);
	
}

tableWr.addEventListener('mouseover', position);
tableWr.addEventListener('mouseover', display);
// tableWr.addEventListener('mouseover', position);

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

	cellIndex = event.target.cellIndex;
	console.log("event.target", cellIndex);


	let posY = event.target.offsetTop;	
	let posX = event.target.offsetLeft;
	
	buttonRemoveColumn.style.marginLeft = posX+1 + 'px';
	buttonRemoveRow.style.marginTop = posY+1 + 'px';

	target.removeEventListener('mouseover', position);
	
}

function removeColumn() {
	
	let tableCell  = document.querySelectorAll('.table-cell');
	
	for (let value of tableCell) {
  	// console.log(value.children);
  	// console.log(cellIndex);
  	console.log("value", value.cellIndex);
  	if (table.cellIndex === cellIndex) {
  		// console.log("value", value.children.cellIndex);

  	}
	}
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
