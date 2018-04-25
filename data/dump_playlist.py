# -*- coding: utf-8 -*-
import spotipy
import csv
from spotipy.oauth2 import SpotifyClientCredentials
import config


client_credentials_manager = SpotifyClientCredentials(client_id=config.client_id, client_secret=config.client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)





def write_playlist(pl_id, user='spotify'):
    results = sp.user_playlist(user, playlist_id=pl_id)

    tracks = {}

    for track in results['tracks']['items']:
        trackid = 'spotify:track:' + track['track']['id']
        trackname = track['track']['name']
        artists = ""
        for artist in track['track']['artists']:
            artists = artists + artist['name'] + " "
        tracks[trackid] = trackname + ": " + artists



    features = sp.audio_features(tracks)

    for feature in features:
        feature['name'] = tracks.get('spotify:track:' + feature['id'])
        feature['playlist'] = results['name']

    return features


results = []

# Spotify playlists
for pid in ['5tA2x3J6yAaJpa7mHGvhmB', '7g3zHOim2XylTlM7Oittr8',
            '06KmJWiQhL0XiV6QQAHsmw', '7sVr7SW0RNqNtOsG48pnOh',
            '3jtuOxsrTRAWvPPLvlW1VR',
            '37i9dQZF1DXcN1fAVSf7CR', '3qu74M0PqlkSV76f98aqTd',
            '37i9dQZF1DX4ykqMZqUn3L', '37i9dQZF1DWYEA2z2jQnzS',
            '37i9dQZF1DWY8scm4hE7Kd', '5ByMwECRoxdBvGtUaRfsgX',
            '37i9dQZF1DWTyjRnMgESue', '37i9dQZF1DX0XUsuxWHRQd',
            '37i9dQZF1DXbhVuSJBP0MW', '37i9dQZF1DX76t638V6CA8',
            '37i9dQZF1DWXMg4uP5o3dm', '76h0bH2KJhiBuLZqfvPp3K',
            '37i9dQZF1DX1Jg9KZ76Rr9', '37i9dQZF1DWTRqg6ucMOrz',
            '37i9dQZF1DXbrSeoLHavML', '37i9dQZF1DX6VDO8a6cQME',
            '37i9dQZF1DWUzFXarNiofw', '37i9dQZF1DWVstK6FYh8Nw',
            '37i9dQZF1DXcDoDDetPsEg']:
    results.append(write_playlist(pid))


results.append(write_playlist('1YO0nYpOIDlSH6iCTUVoY6', 'kiamusicbox'))

results.append(write_playlist('7KEhJFrCsr8lkQU603nNwH', 'agentedv'))

results.append(write_playlist('69vewjElepFLh1Qz0B84sa', 'indiefolkradio'))

results.append(write_playlist('5E6bf0JPlGSM3cDxFEhiFb', 'billboard.com'))


with open('raw_data' + '.csv', 'w', newline='', encoding='utf-8') as f:
    dict_writer = csv.DictWriter(f, results[0][0].keys())
    dict_writer.writeheader()
    for result in results:
        dict_writer.writerows(result)

