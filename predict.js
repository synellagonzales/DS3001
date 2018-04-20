var genres = ['Country', 'HipHop', 'R&B', 'Alternative', 'Classical', 'Rock',
              'Rap', 'Dance/Electronic', 'Christian', 'Folk'];

var features = [0.533948941, 0.723067565, 0.906442459, 1, 0.02605042, 0.08724674199999999, 0.0, 0.206084601, 0.451290153, 0.671347062];
var features = [0.108093427,	0.032347722,	0.454566474,	1,	0.031372549,	0.973895518,	0.368635438,	0.110231298,	0.03654555,	0.208885747];

var clf = new DecisionTreeClassifier();
var prediction = clf.predict(features);
console.log(prediction);
console.log(genres[prediction]);


var prediction = gnb.predict(features);
console.log(prediction);
console.log(genres[prediction]);