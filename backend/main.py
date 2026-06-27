from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)



@app.get("/")
def home():

    return {
        "status":"online",
        "message":"Luraph Analyzer API"
    }



@app.post("/analyze")
def analyze(data:dict):

    code = data.get("code","")
    version = data.get("version","auto")


    # ここは後で解析エンジンに置き換える

    return {

        "version":version,

        "received":True,

        "code_length":len(code),

        "result":
        "解析エンジン未接続"

    }
