import RFSTicket from '../src/RFSTicket';
import chai from 'chai';
const expect = chai.expect;

describe('RFS Ticket', function() {
	it('starts with an amount of 1000', function() {
		// given
		var ticket = new RFSTicket();

		// then
		expect(ticket.amount()).to.equal(1000);
	});

	it('changes to an amount of 9999 if the side is flipped', function() {
		// given
		var ticket = new RFSTicket();

		// when
		ticket.side('SELL');

		// then
		expect(ticket.amount()).to.equal(9999);
	});

	// TODO: add a ChaiJs `permutations` plug-in (see <http://chaijs.com/guide/plugins/>)
	// and re-enable this test
	xit('has the right amount depeding on the side', function() {
		// given
		var ticket = new RFSTicket();

		// then
		expect(ticket).to.have.permutations(`
			side	| amount?
			BUY		| 1000
			SELL	| 9999
		`);
	});
});
