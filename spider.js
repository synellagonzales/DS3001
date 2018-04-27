$(function () {
    $('#generate_btn').click(function () {
        genSpider();
    });
    $('#alternative').click(function () {
        var genre = "Alternative"
        genSpiderGenre(genre);
    });
    $('#christian').click(function () {
        var genre = "Christian"
        genSpiderGenre(genre);
    });
    $('#classical').click(function () {
        var genre = "Classical"
        genSpiderGenre(genre);
    });
    $('#country').click(function () {
        var genre = "Country"
        genSpiderGenre(genre);
    });
    $('#dance_elec').click(function () {
        var genre = "Dance\/Electronic"
        genSpiderGenre(genre);
    });
    $('#folk').click(function () {
        var genre = "Folk"
        genSpiderGenre(genre);
    });
    $('#hiphop').click(function () {
        var genre = "HipHop"
        genSpiderGenre(genre);
    });
    $('#r_b').click(function () {
        var genre = "R&B"
        genSpiderGenre(genre);
    });
    $('#rap').click(function () {
        var genre = "Rap"
        genSpiderGenre(genre);
    });
    $('#rock').click(function () {
        var genre = "Rock"
        genSpiderGenre(genre);
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
            color: 'red'
        };
        var genreData = {
            name: genre_predicted,
            data: getGenreAudioFeatures(genre_predicted),
            pointPlacement: 'on',
            color: 'purple'
        }

        options.series.push(songData);
        options.series.push(genreData);
    });

    var chart = new Highcharts.Chart(options);
}

function genSpiderGenre(genre) {

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
            color: 'red'
        };
        var genreData = {
            name: genre,
            data: getGenreAudioFeatures(genre),
            pointPlacement: 'on',
            color: 'purple'
        }

        options.series.push(songData);
        options.series.push(genreData);
    });

    var chart = new Highcharts.Chart(options);
}
