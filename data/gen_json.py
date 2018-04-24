# -*- coding: utf-8 -*-

import pandas as pd

validation = pd.read_csv('validation_predicted.csv', index_col='name')
validation.to_json('validation.json', orient='index')

averages = pd.read_csv('genre_averages.csv', index_col=0)
averages.to_json('averages.json', orient='index')