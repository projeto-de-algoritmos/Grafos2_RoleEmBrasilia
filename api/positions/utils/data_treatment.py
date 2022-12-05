import pandas as pd
import os
import pathlib as path

df = pd.read_csv('./../new-york-city-truck-routes-1.csv')

df[['lat', 'long']] = [list(map(float, data.split(
    ',')[0][18:].split(' '))) for data in df['the_geom']]
df = df.sort_values(by=['lat', 'long'], ascending=False)
df = df[df.columns[1:]]
df = df.dropna(axis='columns')

p = path.Path(os.getcwd()) 
with open(p/'../treated_data.csv', 'w+') as f:
    df.to_csv(p/'../treated_data.csv')
    df.to_json(p/'../treated_data.json')

print(df.head())
