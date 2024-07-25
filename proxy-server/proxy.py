from fastapi import FastAPI, HTTPException, Request
import httpx
import json
import hashlib
from datetime import datetime 
from fastapi.middleware.cors import CORSMiddleware

f = open("C:/Users/alamu/Documents/PSG_ITECH/Nistara__Webapp/src/Data/data.json")
donorData = json.load(f)


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load environment variables
with open('C:/Users/alamu/Documents/PSG_ITECH/Nistara__Webapp/proxy-server/token.json') as f:
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
async def requests():
    query = "SELECT * from main.requests WHERE postclass = 'REQUEST_ITEM' ALLOW FILTERING;"
    url = f"{ASTRA_BASE_URL}/api/rest/v2/cql?keyspace={env['ASTRA_DB_KEYSPACE']}"

    HEADERS = {
    'Content-Type': 'text/plain',
    'X-Cassandra-Token': env['ASTRA_DB_APPLICATION_TOKEN'],
    'Access-Control-Allow-Origin': '*'
}
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, data=query, headers=HEADERS)
            response.raise_for_status()
            data = response.json().get('data', [])
            
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
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


@app.get("/evacuationrequests")
async def evacuationrequests():
    query = "SELECT * from main.requests WHERE postclass = 'REQUEST_EVACUATION' ALLOW FILTERING;"
    url = f"{ASTRA_BASE_URL}/api/rest/v2/cql?keyspace={env['ASTRA_DB_KEYSPACE']}"

    HEADERS = {
    'Content-Type': 'text/plain',
    'X-Cassandra-Token': env['ASTRA_DB_APPLICATION_TOKEN'],
    'Access-Control-Allow-Origin': '*'
}
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, data=query, headers=HEADERS)
            response.raise_for_status()
            data = response.json().get('data', [])
            
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
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


@app.get("/searchrequests")
async def searchrequests():
    query = "SELECT * from main.requests WHERE postclass = 'REQUEST_SEARCH' ALLOW FILTERING;"
    url = f"{ASTRA_BASE_URL}/api/rest/v2/cql?keyspace={env['ASTRA_DB_KEYSPACE']}"

    HEADERS = {
    'Content-Type': 'text/plain',
    'X-Cassandra-Token': env['ASTRA_DB_APPLICATION_TOKEN'],
    'Access-Control-Allow-Origin': '*'
}
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, data=query, headers=HEADERS)
            response.raise_for_status()
            data = response.json().get('data', [])
            
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
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


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

@app.post("/approveRequest")
async def approverequest(request:Request):
    body = await request.body()
    requestData= json.loads(body)

    item = requestData['item']
    requestId = requestData['id']
    umbrellatype = requestData['umbrellatype']

    if requestData['quantity']:
        quantity = requestData['quantity']
    else:
        quantity = "null"

    matcherid = int(donorData["matcherid"])
    donorGeoloc = tuple(donorData["geolocation"])
    print(donorGeoloc)
    donorName=donorData["name"]
    donorId=donorData["id"]
    HEADERS = {
    'Content-Type': 'text/plain',
    'X-Cassandra-Token': env['ASTRA_DB_APPLICATION_TOKEN'],
    'Access-Control-Allow-Origin': '*'
    }
    url  = f"{ASTRA_BASE_URL}/api/rest/v2/cql?keyspace={env['ASTRA_DB_KEYSPACE']}"


    query1 = f"UPDATE MAIN.REQUESTS SET matcherid = {matcherid}, ismatched=True where id='{requestId}';"
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, data=query1, headers=HEADERS)
            print(response.json())
            response.raise_for_status()
           
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed updating request table")
        

        donationId = hashlib.sha256(f"{datetime.utcnow().isoformat()}{item}{donorData['id']}".encode()).hexdigest()

    
        query2 = f"INSERT INTO MAIN.DONATIONS (id,userid,umbrellatype,item,quantity,geolocation,timestamp,username,matcherid,ismatched) VALUES ('{donationId}','{donorId}','{umbrellatype}','{item}',{quantity},{donorGeoloc},{int(datetime.now().timestamp()*1000)},'{donorName}',{matcherid},True)"
    
        try:
            response = await client.post(url, data=query2, headers=HEADERS)
            print(response.json())
            response.raise_for_status()
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed updating donations table")
        
        query3 = f"INSERT INTO MAIN.MATCHES (requestID , donationID ,matcherID ,matchtime ,requesterAck ,donorAck ) VALUES ('{requestId}','{donationId}',{matcherid},{int(datetime.now().timestamp()*1000)},False,False)"
    
        try:
            response = await client.post(url, data=query3, headers=HEADERS)
            print(response.json())
            response.raise_for_status()
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed updating matches table")
    


@app.post("/approveEvacuationSearchRequest")
async def approverequest(request:Request):
    body = await request.body()
    requestData= json.loads(body)

    requestId = requestData['id']

    matcherid = int(donorData["matcherid"])
    donorGeoloc = tuple(donorData["geolocation"])
    print(donorGeoloc)
    donorName=donorData["name"]
    donorId=donorData["id"]
    HEADERS = {
    'Content-Type': 'text/plain',
    'X-Cassandra-Token': env['ASTRA_DB_APPLICATION_TOKEN'],
    'Access-Control-Allow-Origin': '*'
    }
    url  = f"{ASTRA_BASE_URL}/api/rest/v2/cql?keyspace={env['ASTRA_DB_KEYSPACE']}"


    query1 = f"UPDATE MAIN.REQUESTS SET matcherid = {matcherid}, ismatched=True where id='{requestId}';"
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, data=query1, headers=HEADERS)
            print(response.json())
            response.raise_for_status()
           
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Failed updating request table")
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)