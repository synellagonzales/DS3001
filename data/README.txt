---DATA CLEANING PROCESS---

1.) Data gathering - dump_playlist.py
    This file connects to the SpotifyWebAPI using the spotipy library. It
    gathers the audio features for all of the playlists requested.
    This requires an API key from Spotify, which is specified in config.py.
    See config_sample.py for the format of the file. A sample of fetching
    playlists is included in dump_playlist.py. One csv is saved 'raw_data.csv'

2.) Data normalization - clean_data.py
    The data must then be normalized using a MinMaxScaler, which normalizes
    the audio features from 0 to 1. This requires the pandas and sci-kit learn
    libraries. This python script also creates dummy variables for our categorical
    data (song key). One csv is saved 'normalized_data.csv'.

3.) Add genres
    The genres for each playlist must be manually added and saved to a csv
    titled 'genres.csv'. This can be done quickly in Excel using a table that
    has all the playlists and associated genres. The genres can the be assigned
    to a column titled 'genre' using VLOOKUP. This should be saved to a csv titled
    'genres.csv'.

4.) Generate Testing and Training Sets - create_samples.py
    This python script creates training and testing sets by simply alternating each
    row. These files are saved to 'genres_training.csv' and 'genres_testing.csv'