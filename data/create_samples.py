# -*- coding: utf-8 -*-

import pandas as pd

df = pd.read_csv('genres.csv')


training = df.iloc[::2]
training.to_csv('genres_training.csv')

testing = df.iloc[1::2]
testing.to_csv('genres_testing.csv')