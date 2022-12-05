import pandas as pd
import json

json_table = pd.read_csv('./brasília_dists .csv')
t_id = 'RA_Id'
dists = json_table[['dist' + str(k + 1) for k in range(7)] + [ t_id ]]
names = json_table[['Nome', 'RA_Id']]
map_id = {str(t_is): [] for t_is in dists[t_id]}

print(dists.iloc[2])

# for t_is, col in zip(map_id.keys(), dists.iloc[2]):
#     if type(col) == str :
#         ind, km = col.split('|')
#         map_id[t_is].append([ind, float(km)])

for row in dists.iterrows():
    _, val = row
    for col in val:
        if type(col) == str :
            ind, km = col.split('|')
            map_id[str(val[7])].append([ind, float(km)])


map_id = json.dumps(map_id)
print(map_id)
print(names.to_json(force_ascii=False))

with open('dists.json', 'w+') as dfile:
    dfile.writelines(map_id)

with open('names.json', 'w+') as nfile:
    nfile.writelines(names.to_json(force_ascii=False))