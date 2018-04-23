# -*- coding: utf-8 -*-

import pandas as pd

df = pd.read_csv('genres_training.csv', index_col=0)
grouped = df.groupby(['genre']).mean()

grouped.to_csv('genre_averages.csv')