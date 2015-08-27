import ko from 'knockout';

function RFSTicket() {
	this.side = ko.observable('BUY');
	this.amount = ko.observable(1000);

	this.side.subscribe(function(newValue) {
		if(newValue === 'BUY') {
			this.amount(1000);
		}
		else {
			this.amount(9999);
		}
	}.bind(this));
}

export default RFSTicket;
