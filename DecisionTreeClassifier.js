var DecisionTreeClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    this.predict = function(features) {
        var classes = new Array(10);
            
        if (features[2] <= 0.6819968223571777) {
            if (features[0] <= 0.5187398195266724) {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 0; 
                classes[3] = 0; 
                classes[4] = 92; 
                classes[5] = 0; 
                classes[6] = 0; 
                classes[7] = 0; 
                classes[8] = 0; 
                classes[9] = 0; 
            } else {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 0; 
                classes[3] = 0; 
                classes[4] = 1; 
                classes[5] = 0; 
                classes[6] = 0; 
                classes[7] = 0; 
                classes[8] = 0; 
                classes[9] = 2; 
            }
        } else {
            if (features[4] <= 0.11764705926179886) {
                if (features[6] <= 2.0200001017656177e-05) {
                    if (features[0] <= 0.6355241537094116) {
                        if (features[5] <= 0.009093938395380974) {
                            classes[0] = 2; 
                            classes[1] = 0; 
                            classes[2] = 1; 
                            classes[3] = 11; 
                            classes[4] = 0; 
                            classes[5] = 18; 
                            classes[6] = 0; 
                            classes[7] = 0; 
                            classes[8] = 16; 
                            classes[9] = 4; 
                        } else {
                            if (features[1] <= 0.7734189033508301) {
                                if (features[4] <= 0.018907563760876656) {
                                    classes[0] = 18; 
                                    classes[1] = 0; 
                                    classes[2] = 4; 
                                    classes[3] = 1; 
                                    classes[4] = 0; 
                                    classes[5] = 3; 
                                    classes[6] = 0; 
                                    classes[7] = 4; 
                                    classes[8] = 13; 
                                    classes[9] = 3; 
                                } else {
                                    classes[0] = 3; 
                                    classes[1] = 1; 
                                    classes[2] = 18; 
                                    classes[3] = 7; 
                                    classes[4] = 0; 
                                    classes[5] = 4; 
                                    classes[6] = 6; 
                                    classes[7] = 4; 
                                    classes[8] = 10; 
                                    classes[9] = 6; 
                                }
                            } else {
                                classes[0] = 29; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                                classes[3] = 1; 
                                classes[4] = 0; 
                                classes[5] = 2; 
                                classes[6] = 1; 
                                classes[7] = 2; 
                                classes[8] = 7; 
                                classes[9] = 0; 
                            }
                        }
                    } else {
                        if (features[2] <= 0.8730635643005371) {
                            classes[0] = 3; 
                            classes[1] = 2; 
                            classes[2] = 21; 
                            classes[3] = 0; 
                            classes[4] = 0; 
                            classes[5] = 0; 
                            classes[6] = 3; 
                            classes[7] = 0; 
                            classes[8] = 1; 
                            classes[9] = 1; 
                        } else {
                            if (features[0] <= 0.7631721496582031) {
                                classes[0] = 2; 
                                classes[1] = 5; 
                                classes[2] = 13; 
                                classes[3] = 0; 
                                classes[4] = 0; 
                                classes[5] = 3; 
                                classes[6] = 5; 
                                classes[7] = 13; 
                                classes[8] = 3; 
                                classes[9] = 2; 
                            } else {
                                classes[0] = 1; 
                                classes[1] = 3; 
                                classes[2] = 5; 
                                classes[3] = 1; 
                                classes[4] = 0; 
                                classes[5] = 0; 
                                classes[6] = 16; 
                                classes[7] = 0; 
                                classes[8] = 0; 
                                classes[9] = 0; 
                            }
                        }
                    }
                } else {
                    if (features[5] <= 0.3428698778152466) {
                        if (features[4] <= 0.01463585440069437) {
                            if (features[0] <= 0.5258011817932129) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                                classes[3] = 4; 
                                classes[4] = 0; 
                                classes[5] = 0; 
                                classes[6] = 0; 
                                classes[7] = 1; 
                                classes[8] = 1; 
                                classes[9] = 22; 
                            } else {
                                classes[0] = 3; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                                classes[3] = 19; 
                                classes[4] = 0; 
                                classes[5] = 6; 
                                classes[6] = 0; 
                                classes[7] = 4; 
                                classes[8] = 0; 
                                classes[9] = 6; 
                            }
                        } else {
                            if (features[0] <= 0.7093970775604248) {
                                if (features[5] <= 0.00011046399595215917) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                    classes[3] = 2; 
                                    classes[4] = 0; 
                                    classes[5] = 9; 
                                    classes[6] = 0; 
                                    classes[7] = 0; 
                                    classes[8] = 0; 
                                    classes[9] = 0; 
                                } else {
                                    if (features[8] <= 0.3185887336730957) {
                                        classes[0] = 1; 
                                        classes[1] = 0; 
                                        classes[2] = 2; 
                                        classes[3] = 13; 
                                        classes[4] = 0; 
                                        classes[5] = 6; 
                                        classes[6] = 3; 
                                        classes[7] = 19; 
                                        classes[8] = 2; 
                                        classes[9] = 1; 
                                    } else {
                                        if (features[0] <= 0.36882129311561584) {
                                            classes[0] = 0; 
                                            classes[1] = 0; 
                                            classes[2] = 0; 
                                            classes[3] = 2; 
                                            classes[4] = 0; 
                                            classes[5] = 4; 
                                            classes[6] = 0; 
                                            classes[7] = 0; 
                                            classes[8] = 1; 
                                            classes[9] = 0; 
                                        } else {
                                            if (features[8] <= 0.38704580068588257) {
                                                classes[0] = 0; 
                                                classes[1] = 0; 
                                                classes[2] = 0; 
                                                classes[3] = 7; 
                                                classes[4] = 0; 
                                                classes[5] = 0; 
                                                classes[6] = 0; 
                                                classes[7] = 0; 
                                                classes[8] = 0; 
                                                classes[9] = 0; 
                                            } else {
                                                classes[0] = 6; 
                                                classes[1] = 2; 
                                                classes[2] = 2; 
                                                classes[3] = 30; 
                                                classes[4] = 0; 
                                                classes[5] = 4; 
                                                classes[6] = 1; 
                                                classes[7] = 6; 
                                                classes[8] = 2; 
                                                classes[9] = 5; 
                                            }
                                        }
                                    }
                                }
                            } else {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 9; 
                                classes[3] = 3; 
                                classes[4] = 0; 
                                classes[5] = 1; 
                                classes[6] = 12; 
                                classes[7] = 9; 
                                classes[8] = 0; 
                                classes[9] = 1; 
                            }
                        }
                    } else {
                        if (features[0] <= 0.26941877603530884) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 1; 
                            classes[3] = 1; 
                            classes[4] = 4; 
                            classes[5] = 0; 
                            classes[6] = 0; 
                            classes[7] = 0; 
                            classes[8] = 1; 
                            classes[9] = 0; 
                        } else {
                            if (features[2] <= 0.8561009168624878) {
                                classes[0] = 1; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                                classes[3] = 0; 
                                classes[4] = 3; 
                                classes[5] = 1; 
                                classes[6] = 0; 
                                classes[7] = 1; 
                                classes[8] = 1; 
                                classes[9] = 42; 
                            } else {
                                classes[0] = 2; 
                                classes[1] = 0; 
                                classes[2] = 5; 
                                classes[3] = 6; 
                                classes[4] = 0; 
                                classes[5] = 1; 
                                classes[6] = 1; 
                                classes[7] = 0; 
                                classes[8] = 1; 
                                classes[9] = 9; 
                            }
                        }
                    }
                }
            } else {
                if (features[0] <= 0.7224334478378296) {
                    if (features[1] <= 0.9274940490722656) {
                        if (features[4] <= 0.39425772428512573) {
                            if (features[9] <= 0.7566671371459961) {
                                if (features[6] <= 0.0020112020429223776) {
                                    classes[0] = 3; 
                                    classes[1] = 14; 
                                    classes[2] = 13; 
                                    classes[3] = 2; 
                                    classes[4] = 0; 
                                    classes[5] = 0; 
                                    classes[6] = 19; 
                                    classes[7] = 1; 
                                    classes[8] = 1; 
                                    classes[9] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                    classes[3] = 3; 
                                    classes[4] = 0; 
                                    classes[5] = 1; 
                                    classes[6] = 2; 
                                    classes[7] = 5; 
                                    classes[8] = 0; 
                                    classes[9] = 3; 
                                }
                            } else {
                                classes[0] = 1; 
                                classes[1] = 1; 
                                classes[2] = 10; 
                                classes[3] = 1; 
                                classes[4] = 0; 
                                classes[5] = 0; 
                                classes[6] = 0; 
                                classes[7] = 0; 
                                classes[8] = 0; 
                                classes[9] = 0; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 4; 
                            classes[2] = 4; 
                            classes[3] = 1; 
                            classes[4] = 0; 
                            classes[5] = 0; 
                            classes[6] = 23; 
                            classes[7] = 1; 
                            classes[8] = 0; 
                            classes[9] = 0; 
                        }
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                        classes[3] = 7; 
                        classes[4] = 0; 
                        classes[5] = 9; 
                        classes[6] = 0; 
                        classes[7] = 0; 
                        classes[8] = 2; 
                        classes[9] = 0; 
                    }
                } else {
                    if (features[9] <= 0.493291437625885) {
                        classes[0] = 0; 
                        classes[1] = 11; 
                        classes[2] = 8; 
                        classes[3] = 1; 
                        classes[4] = 0; 
                        classes[5] = 0; 
                        classes[6] = 41; 
                        classes[7] = 2; 
                        classes[8] = 0; 
                        classes[9] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 3; 
                        classes[2] = 0; 
                        classes[3] = 0; 
                        classes[4] = 0; 
                        classes[5] = 0; 
                        classes[6] = 56; 
                        classes[7] = 0; 
                        classes[8] = 0; 
                        classes[9] = 1; 
                    }
                }
            }
        }
    
        return findMax(classes);
    };

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 10) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new DecisionTreeClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}