from flask import Flask, render_template
from app import mongodb
from pymongo import MongoClient

app = Flask(__name__)


@app.route('/region', methods=['POST'])
def shop_region():
    region = request.form['region']
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
        return render_template('vegan.html', region=region)
    return render_template('vegan.html', region=region, datas=users)


# return render_template('vegan.html', region=region, datas=users)


@app.route('/')
def index():
    """route 데코레이션을 통해 어떤 URL 이 우리가 작성한 함수를 실행시키는지 알려준다."""
    return render_template('index.html')


if __name__ == '__main__':
    """
    run() 함수를 사용해서 우리가 개발한 어플리케이션을 로컬서버로 실행한다. 
     소스파일을 모듈이 아닌 python 인터프리터를 이용해서 직접 실행한다면 
    if __name__ == '__main__': 이 문장은 우리가 실행한 서버가 현재 동작되는 유일한 서버라는 것을 보장한다.
    """
    app.run(debug=True)
