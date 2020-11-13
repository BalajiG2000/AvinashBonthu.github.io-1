// import { v4 as uuidv4 } from './node_modules/uuid';
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function meetid() {
			const roomid = uuidv4()
			alert("Room Id: "+ roomid)
		}

document.getElementById('create_btn').addEventListener('click', function() {
	meetid();
})