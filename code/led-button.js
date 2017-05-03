// Copyright 2017 Google Inc.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

var firebase = require("firebase");
var five = require("johnny-five"), board, button;

board = new five.Board();

board.on("ready", function() {
  button = new five.Button(2);
  var led = new five.Led(12);

  var config = {
    apiKey: "CorrectHorseBatteryStapler",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID"
  };
  firebase.initializeApp(config);

	var db = firebase.database();
	var ref = db.ref("button");

	ref.on("value", function(snapshot) {
		var val = snapshot.val();

		if(val == "down") {
      console.log("down");
			led.on();
		} else {
			console.log("up");
			led.off();
		}
	});


  button.on("down", function() {
		ref.set("down");
  });

  button.on("up", function() {
		ref.set("up");
  });
});

