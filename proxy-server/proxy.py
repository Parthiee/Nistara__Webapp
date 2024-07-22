from fastapi import FastAPI, HTTPException, Request
import httpx
import json

app = FastAPI()

# Load environment variables
with open('./token.json') as f:
    env = json.load(f)

ASTRA_BASE_URL = f"https://{env['ASTRA_DB_ID']}-{env['ASTRA_DB_REGION']}.apps.astra.datastax.com"
BASE_URL = f"{ASTRA_BASE_URL}/api/rest/v2/keyspaces/{env['ASTRA_DB_KEYSPACE']}"
HEADERS = {
    'Content-Type': 'application/json',
    'X-Cassandra-Token': env['ASTRA_DB_APPLICATION_TOKEN'],
    'Access-Control-Allow-Origin': '*'
}

@app.get("/posts")
async def get_posts():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{BASE_URL}/posts/rows", headers=HEADERS)
            response.raise_for_status()
            data = response.json()['data']
            posts = [
                {
                    "id": post["id"],
                    "geolocation": post["geolocation"],
                    "multimediaurl": post["multimediaurl"],
                    "textcontent": post["textcontent"],
                    "timestamp": post["timestamp"],
                    "lastupdatetimestamp": post["lastupdatetimestamp"],
                    "userid": post["userid"],
                    "username": post["username"],
                    "profilephoto": post["profilephoto"],
                    "language": post["language"],
                    "classifier": post["classifier"],
                    "isclassified": post["isclassified"],
                    "class": post["class"],
                    "translator": post["translator"],
                    "istranslated": post["istranslated"],
                    "translatedtextcontent": post["translatedtextcontent"],
                }
                for post in data
            ]
            return {"message": "Post Fetch Successful", "result": posts}
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed fetching all posts")

@app.get("/requests")
async def get_requests():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{BASE_URL}/requests/rows", headers=HEADERS)
            response.raise_for_status()
            data = response.json()['data']
            requests = [
                {
                    "id": request["id"],
                    "umbrellatype": request["umbrellatype"],
                    "item": request["item"],
                    "quantity": request["quantity"],
                    "postid": request["postid"],
                    "geolocation": request["geolocation"],
                    "translatedtextcontent": request["translatedtextcontent"],
                    "timestamp": request["timestamp"],
                    "postclass": request["postclass"],
                    "userid": request["userid"],
                    "username": request["username"],
                    "profilephoto": request["profilephoto"],
                    "matcherid": request["matcherid"],
                    "ismatched": request["ismatched"],
                }
                for request in data
            ]
            return {"message": "Request Posts Fetch Successful", "result": requests}
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed fetching all request posts")

@app.get("/evacuationrequests")
async def evacuationrequests():
    async with httpx.AsyncClient() as client:
        try:
            params = {
    'where': {
        "postclass": {"$eq": "REQUEST_ITEM"}
    }
}

    
            response = await client.get(f"{BASE_URL}/requests", headers=HEADERS,params=params)
            response.raise_for_status()
            data = response.json()['data']
            requests = [
                {
                    "id": request["id"],
                    "umbrellatype": request["umbrellatype"],
                    "item": request["item"],
                    "quantity": request["quantity"],
                    "postid": request["postid"],
                    "geolocation": request["geolocation"],
                    "translatedtextcontent": request["translatedtextcontent"],
                    "timestamp": request["timestamp"],
                    "postclass": request["postclass"],
                    "userid": request["userid"],
                    "username": request["username"],
                    "profilephoto": request["profilephoto"],
                    "matcherid": request["matcherid"],
                    "ismatched": request["ismatched"],
                }
                for request in data
            ]
            return {"message": "Request Posts Fetch Successful", "result": requests}
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed fetching all request posts")

@app.get("/donations")
async def get_donations():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{BASE_URL}/donations/rows", headers=HEADERS)
            response.raise_for_status()
            data = response.json()['data']
            donations = [
                {
                    "id": donation["id"],
                    "umbrellatype": donation["umbrellatype"],
                    "item": donation["item"],
                    "quantity": donation["quantity"],
                    "postid": donation["postid"],
                    "geolocation": donation["geolocation"],
                    "translatedtextcontent": donation["translatedtextcontent"],
                    "timestamp": donation["timestamp"],
                    "postclass": donation["postclass"],
                    "userid": donation["userid"],
                    "username": donation["username"],
                    "profilephoto": donation["profilephoto"],
                    "matcherid": donation["matcherid"],
                    "ismatched": donation["ismatched"],
                }
                for donation in data
            ]
            return {"message": "Donation Posts Fetch Successful", "result": donations}
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed fetching all donation posts")

@app.get("/information")
async def get_information():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{BASE_URL}/information/rows", headers=HEADERS)
            response.raise_for_status()
            data = response.json()['data']
            information = [
                {
                    "postid": info["postid"],
                    "userid": info["userid"],
                    "textualinfo": info["textualinfo"],
                    "multimediaurl": info["multimediaurl"],
                    "geolocation": info["geolocation"],
                }
                for info in data
            ]
            return {"message": "Information Posts Fetch Successful", "result": information}
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed fetching all information posts")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)