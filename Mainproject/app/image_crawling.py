import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
import urllib.request

client = MongoClient('localhost', 27017)
db = client.vegan1
collection = db['vegan1']
db_selections = collection.find({})

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari / 537.36'}

# 검색어 설정
for db in db_selections:
    shop_region = db['자치구']
    shop_name = db['상호명']
    search = shop_region + ' ' + shop_name

    data = requests.get(
        f'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query={search}',
        headers=headers)

    soup = BeautifulSoup(data.text, 'html.parser')
    if data.status_code == 200:
        try:
            images = soup.select('#place_main_ct')
            for image in images:
                a = image.select_one('div > section > div > div.top_photo_area.type_v4 > div:nth-child(1) > a > img')[
                    'src']
                print(f'\n{a}')
                url = a
                urllib.request.urlretrieve(url, f'./images/{search}.jpg')
                if a is None:
                    print('이미지가 등록되어 있지 않습니다.')
        except Exception as e:
            print(f"에러가 발생했습니다 : {e}")