# -*- coding: utf-8 -*-
from sklearn.tree import DecisionTreeClassifier, export_graphviz
from sklearn import metrics

import pandas as pd

def encode_column(df, column):
    df_copy = df.copy()
    options = df_copy[column].unique()
    map_to_int = {name : n for n, name in enumerate(options)}
    df_copy["Encode"+column] = df_copy[column].replace(map_to_int)
    return (df_copy, options)

df = pd.read_csv('../data/genres_training.csv')

df, targets = encode_column(df, 'genre')

features = ['danceability', 'energy', 'loudness', 'mode', 'speechiness',
            'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo']

Y = df['Encodegenre']
X = df[features]

dt = DecisionTreeClassifier(criterion='gini', min_samples_split=65)
dt.fit(X, Y)


## Test the training set
Y_pred = dt.predict(X)
print("Accuracy of Training:{0:.3f}".format(metrics.accuracy_score(Y, Y_pred)))


## TESTING
df_test = pd.read_csv('../data/genres_testing.csv')
df_test, t = encode_column(df_test, 'genre')

Y_test = df_test['Encodegenre']
X_test = df_test[features]

Y_test_pred = dt.predict(X_test)
print("Accuracy of Testing Set:{0:.3f}".format(metrics.accuracy_score(Y_test, Y_test_pred)))


df_validation = pd.read_csv('../data/validation_normalized.csv')
df_validation, t = encode_column(df_validation, 'genre')
Y_valid = df_validation['Encodegenre']
X_valid = df_validation[features]

Y_valid_pred = dt.predict(X_valid)

Y_valid_pred = [targets[x] for x in Y_valid_pred]
df_validation['genre_predicted'] = Y_valid_pred

df_validation.to_csv('../data/validation_predicted.csv', index=False)
