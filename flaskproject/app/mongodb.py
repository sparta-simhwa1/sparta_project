import pandas as pd
from pymongo import MongoClient

# data = pd.read_csv('VeganMap_csv.csv')
# data.reset_index(inplace=True) ## index 생성
# data_dict = data.to_dict("records") ## 데이터를 사전형으로 변환 to_dict

client = MongoClient('localhost', 27017)
db = client.vegan
collection = db['vegan']


def west_north():
    users = collection.find({"$or": [{'자치구': '은평구'}, {'자치구': '서대문구'}, {'자치구': '마포구'}, {'_id': False}]})
    return users


def east_north():
    users = collection.find({"$or": [{'자치구': '도봉구'}, {'자치구': '노원구'}, {'자치구': '중랑구'}, {'자치구': '광진구'}, {'자치구': '동대문구'},
                                     {'자치구': '성동구'}, {'자치구': '성북구'}, {'자치구': '강북구'}, {'_id': False}]})
    return users


def dosim():
    users = collection.find({"$or": [{'자치구': '종로구'}, {'자치구': '중구'}, {'자치구': '용산구'}, {'_id': False}]})
    return users


def east_south():
    users = collection.find({"$or": [{'자치구': '서초구'}, {'자치구': '강남구'}, {'자치구': '송파구'}, {'자치구': '강동구'}, {'_id': False}]})
    return users


def west_south():
    users = collection.find({"$or": [{'자치구': '강서구'}, {'자치구': '양천구'}, {'자치구': '구로구'}, {'자치구': '영등포구'}, {'자치구': '동작구'},
                                     {'자치구': '금천구'}, {'자치구': '관악구'}, {'_id': False}]})
    return users
# users = seobuk()
# for user in users:
#     print(f"상호명:{user['상호명']}\n업종:{user['업종']}\n자치구:{user['자치구']}\n도로명주소:{user['도로명주소']}")
