# -*- coding: utf-8 -*-
import pandas as pd


df = pd.read_csv('raw_data.csv') 

df = df.drop_duplicates(subset='id')


from sklearn.preprocessing import MinMaxScaler

df = pd.get_dummies(df, columns=['key'])

scale_cols = ['danceability', 'energy', 'loudness', 'speechiness',
              'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo',
              'duration_ms', 'time_signature']

scale_cols_names = []

scaler = MinMaxScaler()

originals = df[scale_cols]

df[scale_cols] = scaler.fit_transform(df[scale_cols])

merged = pd.merge(df, originals, left_index=True, right_index=True, suffixes=('', '_original'))

merged.to_csv('normalized_data.csv', index=False)


validation = pd.read_csv('validation_genres.csv')
validation = pd.get_dummies(validation, columns=['key'])
validation_orig = validation[scale_cols]
validation[scale_cols] = scaler.transform(validation[scale_cols])

validation_merge = pd.merge(validation, validation_orig, left_index=True,
                            right_index=True, suffixes=('', '_original'))

validation_merge.to_csv('validation_normalized.csv', index=False)