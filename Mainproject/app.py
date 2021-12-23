from flask import Flask, render_template, request
from app import mongodb
from pymongo import MongoClient


app = Flask(__name__)
# username, password = 명령 삽입시 인증정보 입력 필요(서버)
client = MongoClient('localhost', 27017)
# , username='test', password='test'
db = client.vegan
collection = db['vegan']



@app.route('/', methods=['POST'])  # POST 요청을 위해 methods=['POST'] 추가
def shop_region():
    region = request.form['region']  # 페이지에서 POST 요청한 값을 받아오기 위해 request.form['보내온 데이터 이름'] 추가
    if region == '서북권':
        users = mongodb.west_north()
    elif region == '도심권':
        users = mongodb.dosim()
    elif region == '동북권':
        users = mongodb.east_north()
    elif region == '서남권':
        users = mongodb.west_south()
    elif region == '동남권':
        users = mongodb.east_south()
    else:
        return render_template('main.html', region=region)
    return render_template('main.html', region=region, datas=users)


@app.route('/guname', methods=['POST'])
def shop_guname():
    guname = request.form['guname']
    gunames = collection.find({"$or" :[{'자치구': guname}, {'_id': False}]})
    return render_template('main.html', guname=guname, gudatas=gunames)
    
# return render_template('vegan.html', region=region, datas=users)


@app.route('/')
def index():
    """route 데코레이션을 통해 어떤 URL 이 우리가 작성한 함수를 실행시키는지 알려준다."""
    return render_template('main.html')
    

@app.route('/map/')
def kakao_map():
    return render_template('test.html')


if __name__ == '__main__':
    # """
    # run() 함수를 사용해서 우리가 개발한 어플리케이션을 로컬서버로 실행한다.
    #  소스파일을 모듈이 아닌 python 인터프리터를 이용해서 직접 실행한다면
    # if __name__ == '__main__': 이 문장은 우리가 실행한 서버가 현재 동작되는 유일한 서버라는 것을 보장한다.
    # """
    # 서버 업로드시 debug=False 확인
    # host 미입력시 다른 host로 연결 시도 하기 때문에 필수입력
    app.run(debug=True, host='0.0.0.0')


# , host='0.0.0.0'