from fastapi import FastAPI

app = FastAPI()

@app.get('/content')
def content():
    return {'data': 'content'}
