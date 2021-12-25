<<<<<<< HEAD
# import pandas as pd
# from pymongo import MongoClient
=======
import pandas as pd
from pymongo import MongoClient

data = pd.read_csv('VeganMap_csv.csv')
data.reset_index(inplace=True) ## index 생성
data_dict = data.to_dict("records") ## 데이터를 사전형으로 변환 to_dict

client = MongoClient('localhost', 27017)
db = client.vegan
collection = db['vegan']
collection.insert_many(data_dict)

# def west_north():
#     users = collection.find({"$or": [{'자치구': '은평구'}, {'자치구': '서대문구'}, {'자치구': '마포구'}, {'_id': False}]})
#     return users
#
>>>>>>> c149bfc96843a7469d194d79f5124fe226a31d96
#
# data = pd.read_csv('VeganMap_csv.csv')
# data.reset_index(inplace=True) ## index 생성
# data_dict = data.to_dict("records") ## 데이터를 사전형으로 변환 to_dict
#
# client = MongoClient('localhost', 27017)
# db = client.vegan
# collection = db['vegan']
# collection.insert_many(data_dict)
