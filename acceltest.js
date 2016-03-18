var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['B']); // Replace '../' with 'accel-mma84' in your own code
var camera = require('camera-vc0706').use(tessel.port['A']);

// Initialize the accelerometer.
accel.on('ready', function () {
    // Stream accelerometer data
  accel.on('data', function (xyz) {
    // xyz.forEach(function(num, i){
    // 	if(i===2) return;
    // 	console.log('x:', xyz[0].toFixed(2),
    //   'y:', xyz[1].toFixed(2),
    //   'z:', xyz[2].toFixed(2));
    // 	if(num > 0.2) camera.takePicture(function(err,image){
    		console.log("Picture was taken!");
		        if (err) return console.error(err);
		        process.sendfile('sleeping.jpg', image);
		    });
		// });
    	// });
});

accel.on('error', function(err){
  console.log('Error:', err);
});