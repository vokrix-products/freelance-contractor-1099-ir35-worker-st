from fastapi import FastAPI

@app.get('/dashboard')
async def dashboard():
    return {'status': 'ok'}


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "hello"}
