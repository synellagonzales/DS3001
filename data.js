var audio_features = ['danceability', 'energy', 'loudness', 'speechiness',
'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo',
'duration_ms', 'time_signature'];

var audio_features_nonnormalized = [];

for (var i = 0; i < audio_features.length; i++) {
    audio_features_nonnormalized.push(audio_features[i]+"_original");
}

function getSongAudioFeatures(song) {
    var results = [];
    var values = validation_data[song];
    for (var i = 0; i < audio_features.length; i++) {
        var result = {
            y: values[audio_features[i]],
            original: values[audio_features_nonnormalized[i]]
        };
        results.push(result);
    }
    return results;
}

function getGenreAudioFeatures(genre) {
    var results = [];
    var values = averages[genre];
    for (var i = 0; i < audio_features.length; i++) {
        var result = {
            y: values[audio_features[i]],
            original: values[audio_features_nonnormalized[i]]
        };
        results.push(result);
    }
    return results;
}

var row = 0;
function genTable() {
    $(document).ready(function () {
        var tr;
        var songs = Object.keys(validation_data);
        for (var i = 0; i < songs.length; i++) {
            row++;
            tr = $('<tr/>');
            var song = validation_data[songs[i]];
            tr.append("<td>" + "<input type=\"radio\" name=\"song\" id=\"check" + row + "\" />" + "</td>");
            tr.append("<td>" + songs[i] + "</td>");
            tr.append("<td>" + song.genre_predicted + "</td>");
            tr.append("<td>" + song.genre + "</td>");
            $('table').append(tr);
        }
    });
}

genTable();
