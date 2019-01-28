
const table = document.querySelector('.table');
const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonRemove = document.querySelectorAll('.button-remove');
const tableWr = document.querySelector('.table-wr');

let cellIndex;
let rowIndex;
let timerId;

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


tableWr.addEventListener('click', addOrRemove);

function addOrRemove(event) {
	let target = event.target.className;
	

	if (target.includes('add-column')) {
		
		addColumn();

	} else if (target.includes('add-row')) {
		
		addRow();

	} else if (target.includes('remove-column')) {
		
		removeColumn();
	} else if (target.includes('remove-row')) {
		
		removeRow();
	}
	event.target.removeEventListener('click', addOrRemove);
}

function addRow() {
	let lastTableRow = table.children;
	
	lastTableRow = Array.from(lastTableRow);
	
	let lastTableRowDataId = lastTableRow[0].children;
	
	lastTableRowDataId = Array.from(lastTableRowDataId);
	lastTableRowDataId = lastTableRowDataId.length;
	
	addElement( table,'table-row', 'tr');

	for (let i = 0; i < lastTableRowDataId; i++) {
		
		let createdTableRow = table.lastElementChild;
		addElement( createdTableRow, 'table-cell', 'td');

	}	
}


function addElement( parentElement, classOfTag, tag, dataId) {
	let createdElement = document.createElement(tag);
	createdElement.setAttribute('class', classOfTag);
	createdElement.setAttribute('data-id', dataId);
	parentElement.appendChild(createdElement);
	if (dataId === undefined) return;
	createdElement.setAttribute('data-id', dataId);
	
}

table.addEventListener('mouseover', displayPosition);

function displayPosition(event) {
	position(event);
	display(event);
}


function display(event) {
	let target = event.target;
	let rowQuantity = table.children.length;
	let rowFirst = document.querySelector('.table-row');
	let columnQuantity = rowFirst.children.length;

	if (target.tagName != 'TD') {

		return;

	} else {
		if (columnQuantity > 1 && rowQuantity > 1){
			
			buttonRemove.forEach( e => {
				e.style.display = 'block';
			});
		}
		else if (columnQuantity > 1) {
			
			buttonRemoveColumn.style.display = 'block';

		} else if (rowQuantity > 1) {
			
			buttonRemoveRow.style.display = 'block';

		} 
		
	}	
	target.removeEventListener('mouseover', displayPosition);	
	
}

function position(event) {
	clearTimeout(timerId);
	let target = event.target;
	
	if (target.tagName !== 'TD') return;

	cellIndex = event.target.cellIndex;
	
	rowIndex = event.target.parentElement.rowIndex;

	let posY = event.target.offsetTop;	
	let posX = event.target.offsetLeft;
	
	buttonRemoveColumn.style.left = `${posX + 1}px`;
	buttonRemoveRow.style.top = `${posY + 1}px`;

	target.removeEventListener('mouseover', displayPosition);
	
}

function removeColumn() {
	
	let tableRow =  document.querySelectorAll('.table-row');
	
	for (let value of tableRow) {
  	let cellCollection = value.children;
  	cellCollection.item(cellIndex).remove();
	}
	buttonRemoveDisplay();
}

function removeRow() {
		
	let rowCollection = table.children;
	rowCollection.item(rowIndex).remove();	

	buttonRemoveDisplay();
}

function buttonRemoveDisplay(event) {
	buttonRemove.forEach( e => {
		
		e.style.display = 'none';
				
	});
	
}

table.addEventListener('mouseout', removeDisplay);

function removeDisplay(e) {	
	let toElement = e.toElement.tagName;
	let target = e.target;
	
	if ( toElement !== 'BUTTON' && toElement !== 'TD' && toElement !== 'TABLE') {
		
		timerId = setTimeout(function () {
			buttonRemove.forEach( e => {
		
			e.style.display = 'none';
				
			});
		}, 3000);
		
	 }

	 if (target.tagName !== 'TABLE') {
			target.removeEventListener('mouseout', removeDisplay);
		}
	
}


