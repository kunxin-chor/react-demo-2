from flask import Flask, render_template, request, redirect, url_for, jsonify

import os

app = Flask(__name__)

def cors_route(path, origin=('127.0.0.1'), **options):
    def inner(func):
        def wrapper(*args, **kwargs):
            if request.method == 'OPTIONS':
                response = make_response()
                response.headers.add("Access-Control-Allow-Origin", ', '.join(origin))
                response.headers.add('Access-Control-Allow-Headers', ', '.join(origin))
                response.headers.add('Access-Control-Allow-Methods', ', '.join(origin))
                return response
            else:
                result = func(*args, **kwargs)
            if 'Access-Control-Allow-Origin' not in result.headers:
                result.headers.add("Access-Control-Allow-Origin", ', '.join(origin))
            return result

        wrapper.__name__ = func.__name__

        if 'methods' in options:
            if 'OPTIONS' in options['methods']:
                return app.route(path, **options)(wrapper)
            else:
                options['methods'].append('OPTIONS')
            return app.route(path, **options)(wrapper)

        return wrapper

    return inner

# data is defined outside any functions, it's global
data = [
    {
        '_id':1,
        'name':'Fluffy',
        'type':'dog'
    },
    {
        '_id':2,
        'name':'Biscuit',
        'type':'dog'
    },
    {
        '_id':3,
        'name':'Carrot',
        'type':'bunny'
    }
]

@cors_route('/', origin=['*'])
def index():
    return jsonify(data)
    

# "magic code" -- boilerplate
if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)