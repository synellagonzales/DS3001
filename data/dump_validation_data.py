# -*- coding: utf-8 -*-
import spotipy
import csv
from spotipy.oauth2 import SpotifyClientCredentials
import config


client_credentials_manager = SpotifyClientCredentials(client_id=config.client_id, client_secret=config.client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


tracks = \
['4G3O4PWSHPAdNSZkkmFwDs', '0YZkqQBk2gWAFCJs59XqPg', '3KTtvScjwPFoKzUW7frj8X',
 '2Mor7Tp1w61mPKozLewqey', '3FhBQdBnnsxka6vGVcgCpX', '3vtSoQokbluZbNfVpZy162',
 '4DODnpnNZMZD1jR6NvyPuc', '6pBlce4wuq7xQehbnPhXTx', '73pVOHkzEguC4B2tc8s00e',
 '72JGbnSubT6KxXmEtXVqic', '1YA3pVpphCohL6V53qLgQ0', '2Ifjrl6lpeH0vfWiA3MUhv',
 '0sTSwUb3f6ohMHlLkIAN55', '1bLt25zgVGg9O39oT6lHw7', '3hUN9ojcHaKSQk0MgMFWkf',
 '29lZ9v5hZ7iqMMsD9nf714', '02CPGci789jBYhpFbEiu7P', '08zJpaUQVi9FrKv2e32Bah',
 '1vNoA9F5ASnlBISFekDmg3', '5t3rLuQ9yj1iScUyhgX2pk']

trackfeatures = {}

trackresults = sp.tracks(tracks)

for track in trackresults['tracks']:
    trackid = 'spotify:track:' + track['id']
    trackname = track['name']
    artists = ""
    for artist in track['artists']:
        artists = artists + artist['name'] + " "
    trackfeatures[trackid] = trackname + ": " + artists

features = sp.audio_features(tracks)

for feature in features:
    feature['name'] = trackfeatures.get('spotify:track:' + feature['id'])


with open('validation_raw_data' + '.csv', 'w', newline='', encoding='utf-8') as f:
    dict_writer = csv.DictWriter(f, features[0].keys())
    dict_writer.writeheader()
    dict_writer.writerows(features)
