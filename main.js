

var table = document.querySelector('.table');
var buttonAddColumn = document.querySelector('.add-column');
var buttonAddRow = document.querySelector('.add-row');
var buttonRemoveColumn = document.querySelector('.remove-column');
var buttonRemoveRow = document.querySelector('.remove-row');


for (var i = 1; i < 5; i++) {
	
	addElement( table, i, 'table-row', 'tr');
	for (var k = 1; k < 5; k++) {
		var lastTableRow = table.lastElementChild;
		
		addElement( lastTableRow, k, 'table-cell', 'td');
	}
}

var tableCell = document.querySelectorAll('.table-cell');


function addColumn() {
	var tableRow = document.querySelectorAll('.table-row');
	
	
	tableRow.forEach(function (tableRow) {
		var lastTableCell = tableRow.lastElementChild;
		
		var dataId = Number(lastTableCell.getAttribute('data-id'));

		addElement( tableRow, dataId+1, 'table-cell', 'td');
	});
	tableCell = document.querySelectorAll('.table-cell');
	tableCellRefresh();
}

buttonAddColumn.addEventListener('click', addColumn);

function addRow() {
	var lastTableRow = table.lastElementChild;
	var lastTableRowDataId = Number(lastTableRow.getAttribute('data-id'));
	var lastTableCell = lastTableRow.lastElementChild;
	var lastTableCellId = Number(lastTableCell.getAttribute('data-id'));
	
	
	addElement( table, lastTableRowDataId+1, 'table-row', 'tr');

	for (var i = 0; i < lastTableCellId; i++) {
		var createdTableRow = table.lastElementChild;
		addElement( createdTableRow, lastTableCellId, 'table-cell', 'td');

	}
	tableCell = document.querySelectorAll('.table-cell');
	tableCellRefresh();
}

buttonAddRow.addEventListener('click', addRow);

function addElement( parentElement, dataId, classOfTag, tag) {
	var createdElement = document.createElement(tag);
	createdElement.setAttribute('class', classOfTag);
	createdElement.setAttribute('data-id', dataId);
	parentElement.appendChild(createdElement);
	
	
}

function tableCellRefresh() {
	tableCell.forEach(function (e) {
		

		e.addEventListener('mouseover', display);
		e.addEventListener('mouseover', position);

	});

}
tableCellRefresh();

function display() {
	var buttonRemove = document.querySelectorAll('.button-remove');
	buttonRemove.forEach(function(e) {
		e.style.display = 'block';
	});
}

function position(event) {
	var posY = event.target.offsetTop;
	// console.log("posX", posY);
	var posX = event.target.offsetLeft;
	// console.log("posY", posX);
	buttonRemoveColumn.style.left = posX+1 + 'px';
	buttonRemoveRow.style.top = posY+1 + 'px';
	
}

buttonRemoveColumn.addEventListener('mouseover', RemoveColumn);

function RemoveColumn(e) {
	e.target.offsetLeft;
	console.log("e.target.offsetLeft", e.target.offsetLeft);
	tableCell.forEach(function (e) {
		e;
		console.log("e.target.offsetLeft", e);
	})
}

function getOffset() {
	var tableRow = document.querySelectorAll('.table-row');
	console.log("tableRow", tableRow);

	document.tr.cells.forEach(function () {
		console.log("tableRow.children", document.td.children);
		// body...
	});
}

getOffset();