$(function () {
    $('#generate_btn').click(function () {
        genSpider();
    });
    $('#alternative').click(function () {
        var genre = "Alternative"
        var color = "blue"
        genSpiderGenre(genre, color);
    });
    $('#christian').click(function () {
        var genre = "Christian"
        var color = "gray"
        genSpiderGenre(genre, color);
    });
    $('#classical').click(function () {
        var genre = "Classical"
        var color = "purple"
        genSpiderGenre(genre, color);
    });
    $('#country').click(function () {
        var genre = "Country"
        var color = "yellow"
        genSpiderGenre(genre, color);
    });
    $('#dance_elec').click(function () {
        var genre = "Dance\/Electronic"
        var color = "red"
        genSpiderGenre(genre, color);
    });
    $('#folk').click(function () {
        var genre = "Folk"
        var color = "orange"
        genSpiderGenre(genre, color);
    });
    $('#hiphop').click(function () {
        var genre = "HipHop"
        var color = "pink"
        genSpiderGenre(genre, color);
    });
    $('#r_b').click(function () {
        var genre = "R&B"
        var color = "lime"
        genSpiderGenre(genre, color);
    });
    $('#rap').click(function () {
        var genre = "Rap"
        var color = "aqua"
        genSpiderGenre(genre, color);
    });
    $('#rock').click(function () {
        var genre = "Rock"
        var color = "fuchsia"
        genSpiderGenre(genre, color);
    });

});

function genSpider() {

    var options = {
        chart: {
            renderTo: 'container',
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Song Audio Features'
        },
        xAxis: {
            categories: audio_features,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 1,
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.original}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: []
    };

    $.each($(':checked'), function (index, item) {
        //Get the tds of this checked item row
        var tds = $(item).parents('tr').first().children('td');
        var name = $(tds[1]).html();
        var genre_predicted = validation_data[name].genre_predicted;
        var songData = {
            name: name,
            data: getSongAudioFeatures(name),
            pointPlacement: 'on',
            color: 'teal'
        };
        var genreData = {
            name: genre_predicted,
            data: getGenreAudioFeatures(genre_predicted),
            pointPlacement: 'on',
            color: 'black'
        }

        options.series.push(songData);
        options.series.push(genreData);
    });

    var chart = new Highcharts.Chart(options);
}

function genSpiderGenre(genre, gcolor) {

    var options = {
        chart: {
            renderTo: 'container',
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Song Audio Features'
        },
        xAxis: {
            categories: audio_features,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 1,
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.original}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: []
    };

    $.each($(':checked'), function (index, item) {
        //Get the tds of this checked item row
        var tds = $(item).parents('tr').first().children('td');
        var name = $(tds[1]).html();
        //var genre = "Alternative";
        var songData = {
            name: name,
            data: getSongAudioFeatures(name),
            pointPlacement: 'on',
            color: 'teal'
        };
        var genreData = {
            name: genre,
            data: getGenreAudioFeatures(genre),
            pointPlacement: 'on',
            color: gcolor
        }

        options.series.push(songData);
        options.series.push(genreData);
    });

    var chart = new Highcharts.Chart(options);
}
