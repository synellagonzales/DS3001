# -*- coding: utf-8 -*-
import pandas as pd
from sklearn.naive_bayes import GaussianNB
from sklearn import metrics
from sklearn_porter import Porter



def encode_column(df, column):
    df_copy = df.copy()
    options = df_copy[column].unique()
    map_to_int = {name : n for n, name in enumerate(options)}
    df_copy["Encode"+column] = df_copy[column].replace(map_to_int)
    return (df_copy, options)

df = pd.read_csv('genres_training.csv')

df, targets = encode_column(df, 'genre')

features = ['danceability', 'energy', 'loudness', 'mode', 'speechiness',
            'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo']

Y = df['Encodegenre']
X = df[features]

gnb = GaussianNB()


fit = gnb.fit(X, Y)


## Test the training set
Y_pred = fit.predict(X)
print("Accuracy of Training:{0:.3f}".format(metrics.accuracy_score(Y, Y_pred)))


## TESTING
df_test = pd.read_csv('genres_testing.csv')
df_test, t = encode_column(df_test, 'genre')

Y_test = df_test['Encodegenre']
X_test = df_test[features]

Y_test_pred = fit.predict(X_test)

print("Accuracy of Testing:{0:.3f}".format(metrics.accuracy_score(Y_test, Y_test_pred)))

porter = Porter(gnb, language='js')
output = porter.export(embed_data=True)

with open('GaussianNB.js', 'w') as f:
    f.write(output)